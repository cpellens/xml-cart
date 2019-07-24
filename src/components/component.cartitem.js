'use strict';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div class="item">
                    <div class="image">
                        <img src="https://www.partechgss.com/images/inventory/3.png" />
                    </div>
                    <div class="info">
                        <strong>Title</strong>
                        <br />
                        Qty: {this.props.quantity}
                    </div>
                    <div class="right">
                        <button>Remove</button>
                        <span class="cost">$2.00</span>
                    </div>
                </div>;
    }
} 