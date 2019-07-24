'use strict';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return  <div class="item">
                    <div class="image">
                        <img src={this.props.image} />
                    </div>
                    <div class="details">
                        <span>
                            <strong>{this.props.title}</strong><br />
                            {(this.props.stock > 0 ? "In Stock" : "Not In Stock")}
                        </span>
                        <span class="cost">${this.props.price}</span>
                    </div>
                </div>;
    }
}
