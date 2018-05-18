import React, { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {
    constructor(){
        super();
        this.state = {
            pic:'',
            price:0,
            description:''
        }
    }

    componentDidMount(){
        const {productid} = this.props.match.params;
        axios.get(`/api/getMeme/${productid}`).then( response => {
            this.setState({
                pic:response.data.memepic,
                price:response.data.price,
                description:response.data.description
            })
        })
    }
    
    render(){
        const { pic, price, description } = this.state;
        return(
            <div>
                <img src={pic} alt='product'/>
                <p>${price}</p>
                <p>{description}</p>
            </div>
        )
    }
}
export default ProductDetail;