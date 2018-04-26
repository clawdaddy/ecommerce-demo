import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            stuff:''
        }
    }



    render(){

        return (
            <div>
                <Link to='/'><button>Home</button></Link>
                <Link to='/products'><button>Products</button></Link>
                <Link to='/cart'><button>Cart</button></Link>
            </div>
        )
    }
}