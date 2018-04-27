import React, { Component } from 'react';
import axios from 'axios';
import CartItem from '../CartItem/CartItem';


export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart:[]
        }
    }
    componentDidMount(){
        axios.get('/api/getcart').then( cart => {
            this.setState({cart:cart.data})
        })
    }

    componentDidUpdate(){
        axios.get('/api/getcart')
    }

    render(){
        const { cart  } = this.state;
        let cartRender = cart.map( item => {
            return (
                <CartItem
                quantity = {item.quantity}
                memepic = {item.memepic}
                price = {item.price}
                description = {item.description}
                id = {item.id}
                key = {item.id}/>
            )
        })
        return (

            <div>
                <h1>Cart</h1>
                {cartRender}
            </div>
        )
    }
}