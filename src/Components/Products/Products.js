import React, {Component} from 'react';
import axios from 'axios';

export default class Products extends Component {
    constructor(){
        super();
        this.state = {
            memes:[]
        }
    }


    componentDidMount(){
        axios.get('/api/memes').then( memes => {
            this.setState({memes})
        })
    }

    render(){


        return(
            <div>Products</div>
        )
    }
}