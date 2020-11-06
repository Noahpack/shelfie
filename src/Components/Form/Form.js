import Axios from 'axios';
import React, {Component} from 'react';

export default class Form extends Component{
 constructor(){
     super()
     this.state = {
        
        url: "",
         name: "",
         price: 0
    }}

handleUrl = (e) => {
    this.setState({
        url: e.target.value
    })
}
handleName = (e) => {
    this.setState({
        name: e.target.value
    })
}
handlePrice = (e) => {
    this.setState({
        price: e.target.value
    })
}
addProduct = () => {
    Axios.post('/api/product', this.state)
    .then(res => {
        res.status(200);
    }).catch(err => console.log(err))
    this.props.getInventory()

    this.setState({
        name:'',
        url: '',
        price: 0
    })
}

render() {
    return (
        <div className="form">
            <h1>Form</h1>
            <input value={this.state.url} onChange={this.handleUrl} placeholder="URL..."/>
            <input value={this.state.name} onChange={this.handleName} placeholder="Name..."/>
            <input value={this.state.price} onChange={this.handlePrice} placeholder="Price..."/>
            <div className="buttons">
                <button onClick={() => {
                    this.setState({
                        url: '',
                        name: '',
                        price: 0
                    })
                }}>
                    Cancel
                </button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        </div>
    )
}
}