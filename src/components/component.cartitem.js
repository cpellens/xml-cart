import React from 'react'

// This class represents a catalog item in the cart. This doesn't do much other than look pretty on the side.
export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div class="item">
                    <div class="image">
                        <img src={"http://partechgss.com" + this.props.product_img} />
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