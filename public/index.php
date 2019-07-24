<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Partech XML Processing Sample</title>
    <link rel="stylesheet" type="text/css" href="//xml.charlespellens.com/style/layout.css">
</head>
<body>
    <section id="left">
        <button id="refresh">Retrieve New Inventory</button>
        <br>
        <section class="items" id="item-container"></section>
    </section>
    <section id="cart">

        <section id="cart-list">
            <div class="item">
                <div class="image">
                    <img src="https://www.partechgss.com/images/inventory/3.png">
                </div>
                <div class="info">
                    <strong>Title</strong>
                    <br>
                    Qty: 1
                </div>
                <div class="right">
                    <button>Remove</button>
                    <span class="cost">$2.00</span>
                </div>
            </div>

            <div class="item">
                <div class="image">
                    <img src="https://www.partechgss.com/images/inventory/3.png">
                </div>
                <div class="info">
                    <strong>Title</strong>
                    <br>
                    Qty: 1
                </div>
                <div class="right">
                    <button>Remove</button>
                    <span class="cost">$2.00</span>
                </div>
            </div>
        </section>

        <section id="total">
            Cart Total:
        </section>
        <span id="total-amount">$0.00</span>
    </section>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <!-- <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> -->
    <script src="//xml.charlespellens.com/js/components/component.item.js" type="text/javascript"></script>
</body>
</html>