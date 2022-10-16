import Header from './Header'
import {Footer} from './Footer'
import {Content} from './Content'
import {Order} from './Order'
import React, {Component} from 'react';

class Basket extends Component {
  

constructor(props){
        super(props)
        this.state = {
          orders: JSON.parse(localStorage.getItem('orders')),
        }
  }
  render(){
    return(
        <>
            <Header />
            <div className='d-flex justify-between m-w'>
                <div className="d-flex flex-wrap m-w">
                    {this.state.orders.map((obj) => (
                        <Content title = {obj.title} price = {obj.price} 
                            rate = {obj.rate} img = {obj.img} />
                        
                    ))}
                </div>
                <Order />
            </div>
            
            <Footer />
        </>
    )
  }
}

export default Basket