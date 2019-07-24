'use strict';

import React from 'react'

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity
        }
    }

    render() {
        return  <div class="item">
                    <div class="image">
                        <img src={this.props.image} />
                    </div>
                    <div class="info"> 
                        <strong>{this.props.title}</strong>
                        <br />
                        Qty: {this.props.quantity}
                    </div>
                    <div class="right">
                        <button id={this.props.product_id} onClick={this.props.onClick}>Remove</button>
                        <span class="cost">${this.props.price}</span>
                    </div>
                </div>;
    }
} 