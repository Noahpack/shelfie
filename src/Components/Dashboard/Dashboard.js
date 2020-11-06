//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
    render() {
        const mappedInventory=this.props.inventory.map(product => {
            return (
                <Product url={product.url} name={product.name} price={product.price}/>
            )
        })
        return (
            <div className="Dash">
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard