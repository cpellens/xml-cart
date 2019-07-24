import React from 'react'

// this class is used to represent an instance of an available item for purchase
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    // once again, output the structure
    render() {
        return  <div onLoad={() => $(this).draggable()} draggable onTouchStart={this.props.onDragStart} onTouchEnd={this.props.onDragStop} onDragEnd={this.props.onDragStop} onDragStart={this.props.onDragStart} style={{pointerEvents: this.state.active ? "all" : "none"}} onMouseDown={() => this.state.active = false} id={this.props.product_id} onMouseUp={this.props.onDrop} key={this.props.product_id} onClick={this.props.onClick} className="item">
                    <div className="image">
                        <img src={this.props.product_img} />
                    </div>
                    <div className="details">
                        <span>
                            <strong>{this.props.title}</strong><br />
                            {(this.props.quantity_in_stock > 0 ? "In Stock" : "Not In Stock")}
                        </span>
                        <span className="cost">${this.props.price}</span>
                    </div>
                </div>;
    }
}
