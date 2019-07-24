import React from 'react';
import Item from './component.item';
export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.reload();
  }

  reload() {
    $("#opaque-white").addClass('opaque');
    $.ajax({
      url: "http://xml.charlespellens.com/inventory.php",
      success: function (e) {
        var items = [];

        for (var i in e) {
          if (isNaN(i)) continue;
          items.push(e[i]);
        }

        this.setState({
          items: items
        });
        $("#opaque-white").removeClass('opaque');
      }.bind(this)
    });
  }

  onDragStart(item) {
    this.props.onDragStart(item);
  }

  onDragStop() {
    this.props.onDragStop();
  }

  render() {
    return React.createElement("section", {
      className: "items list"
    }, React.createElement("div", {
      id: "opaque-white"
    }, React.createElement("img", {
      className: "spin",
      src: "//cdn.charlespellens.com/ico/synchronize.svg"
    }), " Please wait. Retrieving results..."), React.createElement("button", {
      id: "refresh",
      onClick: () => this.reload()
    }, "Retrieve New Inventory"), React.createElement("section", {
      id: "item-container",
      className: "items list"
    }, this.state.items.map(item => React.createElement(Item, {
      onDragStop: this.onDragStop.bind(this),
      onDragStart: () => this.onDragStart.bind(this)(item),
      key: item.product_id,
      onClick: () => this.props.onClick(item),
      title: item.product_name,
      product_id: item.product_id,
      quantity_in_stock: item.quantity_in_stock,
      product_img: "http://partechgss.com" + item.product_img,
      price: item.unit_price
    }))));
  }

}