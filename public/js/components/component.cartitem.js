'use strict';

import React from 'react';
export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      class: "item"
    }, React.createElement("div", {
      class: "image"
    }, React.createElement("img", {
      src: "http://partechgss.com" + this.props.product_img
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