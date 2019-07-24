'use strict';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return React.createElement("div", {
      class: "item"
    }, React.createElement("div", {
      class: "image"
    }, React.createElement("img", {
      src: this.props.image
    })), React.createElement("div", {
      class: "details"
    }, React.createElement("span", null, React.createElement("strong", null, this.props.title), React.createElement("br", null), this.props.stock > 0 ? "In Stock" : "Not In Stock"), React.createElement("span", {
      class: "cost"
    }, "$", this.props.price)));
  }

}