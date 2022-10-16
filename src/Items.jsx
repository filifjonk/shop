import React, {Component} from 'react'
import  Card  from './Card'

export class Items extends Component{
    render() {

        return(
            <>
            {this.props.items.map(el => (
                <Card key={el.id} item = {el}
                onAdd={this.props.onAdd}/>
                
                ))}
            </>
        )
    }

}
export default Items