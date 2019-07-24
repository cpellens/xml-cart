import React from 'react'
import ReactDOM from 'react-dom'
import Cart from './components/component.cart.js';

// the heart of it all - the cart is our "root" node to follow React's 'interesting' scheme...
ReactDOM.render(<Cart></Cart>, document.getElementById("cart"))
