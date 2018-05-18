import React, { Component } from 'react';
import axios from 'axios';

export default class Product extends Component{
    constructor(){
        super();
        this.state= {
            disableButton: false,
            memeid:0,
            dbid:0
        }
    }
    addItem(){
        const { id } = this.props;
        axios.post('/api/addtocart', {id}).then( result => {
            console.log(result)
            this.setState({
                disableButton:true,
                memeid:result.data.memeid,
                dbid:result.data.cartid
            })
        })
    }
    removeItem(){
        const { dbid } = this.state;
        axios.delete(`/api/removefromcart/${dbid}` ).then( result => {
            this.setState({disableButton:false})
            }
        )
    }
    render(){
        const { pic, price, description, id, i, productDetailFn} = this.props;
        return(
            <div key = {`meme ${i}`}>
                <img src={pic} onClick={() => productDetailFn(id)}/>
                <p>${price}</p>
                <p>{description}</p>
                <button onClick={ () => this.addItem()} disabled={this.state.disableButton}>
                Add to Cart
                </button>
                <button onClick={ () => this.removeItem()} disabled={!this.state.disableButton}>
                    Delete from Cart
                </button>
            </div>
        )
    }
}