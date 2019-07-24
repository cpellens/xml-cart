'use strict';

import React from 'react';
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    return React.createElement("div", {
      onLoad: () => $(this).draggable(),
      draggable: true,
      onTouchStart: this.props.onDragStart,
      onTouchEnd: this.props.onDragStop,
      onDragEnd: this.props.onDragStop,
      onDragStart: this.props.onDragStart,
      style: {
        pointerEvents: this.state.active ? "all" : "none"
      },
      onMouseDown: () => this.state.active = false,
      id: this.props.product_id,
      onMouseUp: this.props.onDrop,
      key: this.props.product_id,
      onClick: this.props.onClick,
      className: "item"
    }, React.createElement("div", {
      className: "image"
    }, React.createElement("img", {
      src: this.props.product_img
    })), React.createElement("div", {
      className: "details"
    }, React.createElement("span", null, React.createElement("strong", null, this.props.title), React.createElement("br", null), this.props.quantity_in_stock > 0 ? "In Stock" : "Not In Stock"), React.createElement("span", {
      className: "cost"
    }, "$", this.props.price)));
  }

}