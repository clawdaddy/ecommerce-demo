import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

export default class Products extends Component {
    constructor(){
        super();
        this.state = {
            memes:[]
        }
        this.productDetail = this.productDetail.bind(this);
    }


    componentDidMount(){
        axios.get('/api/memes').then( memes => {
            this.setState({memes: memes.data})
            
        })
    }
    productDetail(id){
        this.props.history.push(`/product/detail/${id}`)
    }

    render(){
        const { memes } = this.state;
        const memeSet = memes.map( (meme, i) => {
            return (
                <section>
                    <Product
                    pic = {meme.memepic}
                    price = {meme.price}
                    description = {meme.description}
                    key = {`meme ${i}`}
                    id = {meme.id}
                    productDetailFn = {this.productDetail}/>
                    
                </section>
            )
        })
        return(
            <div>
                <h1>Products:</h1>
                <div>
                    {memeSet}
                </div>
            </div>
        )
    }
}