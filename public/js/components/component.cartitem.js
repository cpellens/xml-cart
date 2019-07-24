'use strict';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", {
      class: "item"
    }, React.createElement("div", {
      class: "image"
    }, React.createElement("img", {
      src: "https://www.partechgss.com/images/inventory/3.png"
    })), React.createElement("div", {
      class: "info"
    }, React.createElement("strong", null, "Title"), React.createElement("br", null), "Qty: ", this.props.quantity), React.createElement("div", {
      class: "right"
    }, React.createElement("button", null, "Remove"), React.createElement("span", {
      class: "cost"
    }, "$2.00")));
  }

}