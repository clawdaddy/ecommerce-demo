import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTotalFn } from '../../ducks/reducer';

class Total extends Component {
    constructor(){
        super();
        this.state = {
            cart:[],
            total:0
        }

    }
    componentDidMount(){
        axios.get('/api/getcart').then( cart => {
            this.setState({cart:cart.data})
            this.subTotal();
        })
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.updateTotal !== this.props.updateTotal){
            axios.get('/api/getcart').then( cart => {
                this.setState({cart:cart.data})
                this.subTotal();
                // this.props.updateTotalFn(!this.props.updateTotal)
            })
            

        }
    }
    subTotal( ){
        const {cart} = this.state;
        let total = cart.map( item => {
           return( ((item.quantity*100)*(item.price*100))/10000)
        }).reduce( (total, subtotal) => {
            return total+ subtotal
        }, 0)
        console.log(total)
        this.setState({total})
    }
    render() {
        const {total} = this.state;
        return (
            <div>
                <h2>Total: ${total}</h2>
            </div>
        )
    }
}

function mapStateToProps ( state ){
    return ({
        updateTotal:state.updateTotal
    })
}
export default connect(mapStateToProps, { updateTotalFn })(Total)