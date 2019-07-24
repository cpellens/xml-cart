<?php

include '../lib/class.inventory.php';

header('content-type: text/json');
try {
    $items = Inventory::FetchInventory();
    echo $items->getJSON();
} catch (Exception $e) {
    echo json_encode([
        'error' => $e->getMessage()
    ]);
}