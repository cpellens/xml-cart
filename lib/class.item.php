<?php

// used to represent 
class Item  {
    private $product_id,
        $product_name,
        $unit_price,
        $quantity_in_stock,
        $product_img;

    public function __set($k, $v) {
        $k = trim($k);
        $this->$k = $v;
    }

    public function getArray() {
        return [
            'product_name' => $this->product_name,
            'product_id' => $this->product_id,
            'unit_price' => $this->unit_price,
            'quantity_in_stock' => $this->quantity_in_stock,
            'product_img' => $this->product_img
        ];
    }
}