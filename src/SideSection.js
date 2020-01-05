import React, {Component} from 'react'
import SideSection from './SideSection'
import InputForm from './InputForm'
class SideSecion extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections : [],
            sid : props.id
        };
    }
    render(){
        
        return(
            <div sid = {this.state.sid}>
                <InputForm
                name = "章" 
                putEnter = {(e) => this.props.putEnter(e)} 
                deleteElement = {() =>this.props.deleteElement(this.props.id)}
                />
            </div>
        )
    }
}

export default SideSecion