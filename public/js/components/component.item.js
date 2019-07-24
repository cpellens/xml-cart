'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item(props) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Item, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "item" },
                React.createElement(
                    "div",
                    { "class": "image" },
                    React.createElement("img", { src: this.props.image })
                ),
                React.createElement(
                    "div",
                    { "class": "details" },
                    React.createElement(
                        "span",
                        null,
                        React.createElement(
                            "strong",
                            null,
                            this.props.title
                        ),
                        React.createElement("br", null),
                        this.props.stock > 0 ? "In Stock" : "Not In Stock"
                    ),
                    React.createElement(
                        "span",
                        { "class": "cost" },
                        "$",
                        this.props.price
                    )
                )
            );
        }
    }]);

    return Item;
}(React.Component);