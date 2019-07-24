'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import Catalog from './component.catalog'
import CartItem from './component.cartitem'

// the cart class is the 'container' for all the CartItem objects.
export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        if (!this.state) {
            this.state = {
                items: [],  // the current cart items
                hover: false,   // are we dragging an item over the cart area?
                selected_item: null // what item are we dragging over the cart area?
            };
        }

        // output the catalog interface
        ReactDOM.render(<Catalog onDragStart={(item) => this.onDragStart.bind(this)(item)} onDragStop={this.onDragEnd.bind(this)} onClick={(item) => this.addItem.bind(this)(item)}></Catalog>, document.getElementById("left"))

        // do we have a 'session' to reload? (using browser localStorage)
        this.loadCart();
    }

    // traced back from when an item from the catalog is being dragged. we're going to track that item
    onDragStart(item) {
        this.setState({selected_item: item});
    }

    // when the item is "dropped", do we have hover status? if so, consider the item added to cart
    onDragEnd() {

        if (this.state.hover) {
            console.log(this.state.selected_item)
            this.addItem(this.state.selected_item);
        }

        this.setState({selected_item: null, hover: false});
    }

    // returns the current cart data
    getCart() {
        var cart = this.state.items;

        if (cart == null) {
            console.log("Cart is null")
            this.updateCart([]);
            return this.getCart();
        }

        return cart
    }
    
    // loads the cart data from localStorage. localStorage stores our value as a string, so we use JSON.parse to convert
    // that string into a JSON data object.
    loadCart() {
        var stored_cart = localStorage.getItem("cart");
        if (!stored_cart)
            return;

        var item_array = [];
        stored_cart = JSON.parse(stored_cart);

        for (var i in stored_cart) {
            if (isNaN(i))
                continue;

            if (stored_cart[i] == null)
                continue;

            item_array.push(stored_cart[i])
        }

        this.state = {items: item_array};
    }

    // add 1 instance of the provided item to the cart
    addItem(item) {
        var cart = this.getCart();
        var found_item = false;
        
        // iterating through each of the CURRENT cart items to see if we just need to increment the quantity.
        for (var i in cart) {
            if (isNaN(i))
                continue;
            if (cart[i].product_id == item.product_id) {
                found_item = true;
                cart[i].quantity++;
            }
        }

        // if not, let's add it to our cart 
        if (!found_item) {
            cart.push({
                product_id: item.product_id,
                price: item.unit_price,
                title: item.product_name,
                product_img: item.product_img,
                quantity: 1
            });
        }

        // refresh the state of the cart so our UI updates
        this.setState({
            items: cart
        });
    }

    // store the cart items in the browser's localStorage service
    saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.getCart()));
    }

    // synchroizing cart data we expect with what's actually there
    updateCart(cart) {
        if (this.state == null)
            this.state = {items: cart}

        try {
            this.setState({items: cart});
        } catch (E) {
            this.state = {items: cart};
        }
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

    // return the sum of (quantity * price) per item in the cart
    getTotalCost() {
        var total = 0;
        var cart = this.getCart();

        cart.map((item) => total += item.quantity * item.price);
        return total;
    }

    // structure to output
    render() {
        return  <div onTouchMove={(e) => this.setState({hover: true})} onDragOver={(e) => this.setState({hover: true})} style={{backgroundColor: this.state.hover ? "rgba(255, 255, 255, 0.5)" : "transparent"}}>
                    <section id="cart-list" className={"list"}>
                        {
                            this.state.items.map((item) => <CartItem onClick={() => this.removeItem.bind(this)(item)} title={item.title} product_img={item.product_img} quantity={item.quantity} product_id={item.product_id} price={item.price}></CartItem>)
                        }
                    </section>
                    <div style={{textAlign: "right"}}>
                        <button onClick={() => this.saveCart.bind(this)()} id="checkout">Checkout</button>
                    </div>
                    <section id="total">
                        Cart Total:
                    </section>
                    <span id="total-amount">${this.getTotalCost().toFixed(2)}</span>
                </div>;
    }
}