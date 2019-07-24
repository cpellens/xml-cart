'use strict';

import React from 'react';
export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity
    };
  }

  render() {
    return React.createElement("div", {
      class: "item"
    }, React.createElement("div", {
      class: "image"
    }, React.createElement("img", {
      src: this.props.image
    })), React.createElement("div", {
      class: "info"
    }, React.createElement("strong", null, this.props.title), React.createElement("br", null), "Qty: ", this.props.quantity), React.createElement("div", {
      class: "right"
    }, React.createElement("button", {
      id: this.props.product_id,
      onClick: this.props.onClick
    }, "Remove"), React.createElement("span", {
      class: "cost"
    }, "$", this.props.price)));
  }

}