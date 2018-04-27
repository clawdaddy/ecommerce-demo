import React, { Component } from 'react';
import './CartItem.css';
import axios from 'axios';
export default class CartItem extends Component {
    constructor(){
        super();
        this.state= {
            quantity:0,
            memepic:'',
            price:0,
            description:'',
            subtotal: 0,
            id:0
        }
    }


    componentDidMount(){
        const { quantity, memepic, price, description, id } = this.props;
        this.setState({quantity, memepic, price, description, id})
    }
    increaseQuantity(){
        const { quantity, id } = this.state;
        let newQuantity = quantity + 1;
        this.setState({quantity:newQuantity})
        axios.post('/api/updatequantity', {quantity:newQuantity, id:id})
    }
    decreaseQuantity(){
        const {quantity, id } = this.state;
        let newQuantity = quantity -1;
        this.setState({quantity:newQuantity})
        axios.post('/api/updatequantity', {quantity:newQuantity, id:id})
    }

    render(){
        const { quantity, memepic, price, description, subtotal } = this.state; 
        return (
            <div className='item'>
                <img src={memepic} />
                <p>${price}</p>
                <p>{description}</p>
                
                <div className='quantity'>
                    <button onClick={() => this.decreaseQuantity()}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => this.increaseQuantity()}>+</button>
                </div>
                <p>Subtotal: ${quantity*price}</p>
            </div>
        )
    }
}