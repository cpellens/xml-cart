import React from 'react'
import ReactDOM from 'react-dom'

import Item from './component.item'

export default class Catalog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
        this.reload();
    }

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

    render() {
        return  <section class="items list">
                    <div id="opaque-white">
                        <img class="spin" src="//cdn.charlespellens.com/ico/synchronize.svg" /> Please wait. Retrieving results...
                    </div>
                    <button id="refresh" onClick={() => this.reload()}>Retrieve New Inventory</button>
                    <section id="item-container" class="items list">
                        {
                            this.state.items.map(
                                    (item) => <Item key={item.product_id} onClick={() => this.props.onClick(item)} title={item.product_name} product_id={item.product_id} quantity_in_stock={item.quantity_in_stock} image={"http://partechgss.com" + item.product_img} price={item.unit_price}></Item>
                            )
                        }
                    </section>
                </section>;
    }
}