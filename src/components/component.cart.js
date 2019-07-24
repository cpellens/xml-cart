'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import Catalog from './component.catalog'
import CartItem from './component.cartitem'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        ReactDOM.render(<Catalog onClick={(item) => this.addItem.bind(this)(item)}></Catalog>, document.getElementById("left"))

        this.loadCart();
    }

    getCart() {
        var cart = this.state.items;

        if (cart == null) {
            console.log("Cart is null")
            this.updateCart([]);
            return this.getCart();
        }

        return cart
    }

    loadCart() {
        var stored_cart = localStorage.getItem("cart");
        if (!stored_cart)
            return;

        this.updateCart(JSON.parse(stored_cart));
    }

    addItem(item) {
        var cart = this.getCart();
        var found_item = false;
        
        for (var i in cart) {
            if (isNaN(i))
                continue;
            if (cart[i].product_id == item.product_id) {
                found_item = true;
                cart[i].quantity++;
                console.log("Item already in the stuff")
            }
        }

        if (!found_item) {
            cart.push({
                product_id: item.product_id,
                price: item.unit_price,
                title: item.product_name,
                quantity: 1
            });
            console.log("item wasnt found - add")
        }

        console.log(cart)

        this.setState({
            items: cart
        });

        console.log(this.state)
    }

    // store the cart items in the browser's localStorage service
    saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    updateCart(cart) {
        if (this.state == null)
            this.state = {items: []}

        this.setState({items: cart});
    }

    removeItem(item) {
        // load what items are in the cart right now. then iterate through them all and remove all records where
        // the product id matches the id clicked. then update the cart.
        var cart = this.getCart();
        var id = item.product_id

        for (var i in cart) {
            if (isNaN(i))
                continue;

            if (cart[i].product_id == id)
                delete cart[i];
        }

        this.updateCart(cart);
    }

    getTotalCost() {
        var total = 0;
        var cart = this.getCart();

        cart.map((item) => total += item.quantity * item.price);
        return total;
    }

    render() {
        return <div>
                    <section id="cart-list" class="list">
                        {
                            this.state.items.map((item) => <CartItem onClick={() => this.removeItem.bind(this)(item)} title={item.title} quantity={item.quantity} product_id={item.product_id} price={item.price}></CartItem>)
                        }
                    </section>
                    <section id="total">
                        Cart Total:
                    </section>
                    <span id="total-amount">${this.getTotalCost().toFixed(2)}</span>
                </div>;
    }
}