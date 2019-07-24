import React from 'react'
import Item from './component.item'

// This is the class that is responsible for showing all the Item instances and containing them
export default class Catalog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.reload();
    }

    // clear the current shown items, show a blank white screen, load the items, uncover the items.
    reload() {
        $("#opaque-white").addClass('opaque')
        $.ajax({
            url: "http://xml.charlespellens.com/inventory.php",
            success: function(e) {
                var items = [];

                for (var i in e) {
                    if (isNaN(i))
                        continue;
                    
                    items.push(e[i]);
                }

                this.setState({items: items});

                $("#opaque-white").removeClass('opaque')
            }.bind(this)
        })
    }

    // used to pass up the drag events...
    onDragStart(item) {
        this.props.onDragStart(item);
    }

    // used to pass up the drag events
    onDragStop() {
        this.props.onDragStop();
    }

    // output the structure
    render() {
        return  <section className="items list">
                    <div id="opaque-white">
                        <img className="spin" src="//cdn.charlespellens.com/ico/synchronize.svg" /> Please wait. Retrieving results...
                    </div>
                    <button id="refresh" onClick={() => this.reload()}>Retrieve New Inventory</button>
                    <section id="item-container" className="items list">
                        {
                            this.state.items.map(
                                    (item) => <Item onDragStop={this.onDragStop.bind(this)} onDragStart={() => this.onDragStart.bind(this)(item)} key={item.product_id} onClick={() => this.props.onClick(item)} title={item.product_name} product_id={item.product_id} quantity_in_stock={item.quantity_in_stock} product_img={"http://partechgss.com" + item.product_img} price={item.unit_price}></Item>
                            )
                        }
                    </section>
                </section>;
    }
}