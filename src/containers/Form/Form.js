import React, { Component  } from 'react'

import { connect } from 'react-redux'

import Input from '../../components/UI/Input/Input'
import classes from './Form.module.sass'
import TotalCard from '../Checkout/TotalCard/TotalCard'


class Form extends Component{
    render(){
        let vh = window.innerHeight * 0.01;
        //console.log('[vh]', vh)
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
        console.log('el state', this.props.orderState)
        return(
            <div className={classes.bigContainer}>
                <div className={classes.formContainer}>
                    <Input type="name"/>
                    <Input type="email"/>
                    <Input type="adress"/>
                    <Input type="card"/>
                </div>
                <TotalCard 
                    quantity={this.props.orderState.quantity}
                    tPrice={this.props.orderState.totalPrice} 
                    type="form"/>
            </div>
            

        )
    }
} 
const mapState = state => ({
    orderState: state.orderState
})

export default connect(mapState)(Form)
