'use strict';

import React from 'react'

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return  <div key={this.props.product_id} onClick={this.props.onClick} className="item">
                    <div class="image">
                        <img src={this.props.image} />
                    </div>
                    <div class="details">
                        <span>
                            <strong>{this.props.title}</strong><br />
                            {(this.props.quantity_in_stock > 0 ? "In Stock" : "Not In Stock")}
                        </span>
                        <span class="cost">${this.props.price}</span>
                    </div>
                </div>;
    }
}
