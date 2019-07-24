<?php

require_once('../lib/class.item.php');

class Inventory extends SplStack {

    /* define the URLs for the resource targets */
    const TARGET_URL = 'http://www.partechgss.com';
    const INVENTORY_URI = '/inventory';

    /* http request INVENTORY_URL and parse the XML */
    public static function FetchInventory() {
        $xml_reader = new XMLReader;
        $dom = new DOMDocument;

        if (!$xml_reader->open(self::TARGET_URL . self::INVENTORY_URI))
            exit('could not read XML file');

        $inventory = new Inventory();

        // for each product, get its inner XML. Pass that to Item::FromXMLNode($node)
        while ($xml_reader->read()) {
            // we only care about element nodes whose tag name is 'product'
            if ($xml_reader->nodeType == XMLReader::ELEMENT && $xml_reader->name == 'product') {

                // create an item
                // expand the current node and peek into its child elements
                // set the properties on $item to match the xml product's child nodes
                $node = $xml_reader->expand();
                $item = new Item;

                // for each child node, we're going to set the property of the $item to match the child node
                // the tag name will be the property name, while its inner texts will be the values
                foreach ($node->childNodes as $child) {
                    if (!($child instanceof DOMElement))
                        continue;

                    $property_name = $child->tagName;
                    $property_value = trim($child->nodeValue);

                    $item->$property_name = $property_value;
                }

                unset($node);

                // push the $item to the inventory stack
                $inventory->push($item);
            }
        }

        unset($xml_src, $xml_reader);

        return $inventory;
    }

    // return a json-encoded string of the item data in the collection
    public function getJSON() {
        $items = [];

        $this->rewind();

        while ($this->valid()) {
            $items[] = $this->current()->getArray();
            $this->next();
        }

        return json_encode($items, JSON_PRETTY_PRINT);
    }
}