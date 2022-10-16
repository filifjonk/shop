import Header from './Header'
import {Footer} from './Footer'
import React, {Component} from 'react';
import Items from './Items'
 class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          orders: [],
          items: [
            {   
                id: 1,
                img: "/img/1.png",
                title: "Apple BYZ S852I",
                price: 2997,
                rate: 4.7,
            },
            {   
                id: 2,
                img: "/img/2.png",
                title: "Apple EarPods",
                price: 2327,
                rate: 4.5,
            },
            { 
                id: 3,
                img: "/img/3.png",
                title: "Apple BYZ S852I",
                price: "2327 ₽",
                rate: 4.5,
            },
            {   
                id:4,
                img: "/img/1.png",
                title: "Apple BYZ S852I",
                price: "2997 ₽",
                rate: 4.7,
            },
            {
                id:5,
                img: "/img/2.png",
                title: "Apple EarPods",
                price: "2327 ₽",
                rate: 4.5,
            },
            {
                id:6,
                img: "/img/3.png",
                title: "Apple BYZ S852I",
                price: "2327 ₽",
                rate: 4.5,
            }
          ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render(){
        return (
            <>
            <Header />
            <div className="d-flex flex-wrap m-w">
            <Items items={this.state.items} onAdd={this.addToOrder}/>
            </div>
            <Footer />
            </>   
        );
    }

    addToOrder(item){
        let isInArray = false
            this.state.orders.forEach(el => {
                if(el.id === item.id)
                    isInArray = true
            })
        if (!isInArray)
            this.setState({orders:[...this.state.orders, item]}, () => {
            console.log(this.state.orders)
            localStorage.setItem('orders', JSON.stringify(this.state.orders))
            console.log('added')
        })
        
    }
}
export default Home