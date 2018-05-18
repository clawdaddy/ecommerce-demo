import React, { Component } from 'react';
import axios from 'axios';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';


export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart:[],
        }
    }
    componentDidMount(){
        axios.get('/api/getcart').then( cart => {
            this.setState({cart:cart.data})
        })
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevState.cartecommer !== this.state.cart){
            
        }
    }
    

    render(){
        const { cart, total  } = this.state;
        let cartRender = cart.map( item => {
            return (
                <CartItem
                quantity = {item.quantity}
                memepic = {item.memepic}
                price = {item.price}
                description = {item.description}
                id = {item.id}
                key = {item.id}
                subTotalFn = {this.subTotal}/>
            )
        })
        return (

            <div>
                <h1>Cart</h1>
                {cartRender}
                <Total/>
            </div>
        )
    }
}