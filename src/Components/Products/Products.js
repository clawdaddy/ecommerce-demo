import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

export default class Products extends Component {
    constructor(){
        super();
        this.state = {
            memes:[]
        }
    }


    componentDidMount(){
        axios.get('/api/memes').then( memes => {
            this.setState({memes: memes.data})
            
        })
    }

    render(){
        const { memes } = this.state;
        console.log(memes)
        const memeSet = memes.map( (meme, i) => {
            return (
                <div>
                    <Product
                    pic = {meme.memepic}
                    price = {meme.price}
                    description = {meme.description}
                    key = {i}/>
                </div>
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