
import { Component } from "react"
import { Link } from "react-router-dom"
export class Card extends Component {
    render() {
    return (
        <div className="card">
            <img className="card-img" height = {237.07} width = {219.61} src = {this.props.item.img} alt ="" />            
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <div className="favorite">
                        <h5>{this.props.item.title}</h5>
                        <img className="favoriteIcon" src = "/img/star.png" alt = ""/>
                    </div>           
                </div>
                <div className="d-flex flex-column price">   
                    <h5>{this.props.item.price}</h5>
                    <a onClick={() => this.props.onAdd(this.props.item)
                    }>Купить</a> 
                </div>
            </div>   
        </div>
        )
    }
}
export default Card