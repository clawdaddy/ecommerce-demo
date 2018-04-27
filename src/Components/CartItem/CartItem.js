import React, { Component } from 'react';
import './CartItem.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTotalFn } from '../../ducks/reducer';
class CartItem extends Component {
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
        let subtotal = quantity*price;
        this.setState({quantity, memepic, price, description, id, subtotal})
    }
    changeQuantity(num){
        const { quantity, id, price } = this.state;
        let newQuantity = quantity + num;
        let subtotal = 0
        axios.patch('/api/updatequantity', {quantity:newQuantity, id:id}).then( res => {
            subtotal = res.data.quantity * price
            this.setState({quantity:res.data.quantity, subtotal:subtotal})
            this.props.updateTotalFn(!this.props.updateTotal);
        })
    }

    render(){
        const { quantity, memepic, price, description, subtotal } = this.state;
        
        return (
            <div className='item'>
                <img src={memepic} />
                <p>${price}</p>
                <p>{description}</p>
                
                <div className='quantity'>
                    <button onClick={() => this.changeQuantity(-1)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => this.changeQuantity(1)}>+</button>
                </div>
                <p>Subtotal: ${quantity*price}</p>
            </div>
        )
    }
}

function mapStateToProps ( state ){
    return ({
        updateTotal:state.updateTotal
    })
}
export default connect(mapStateToProps, { updateTotalFn })(CartItem)