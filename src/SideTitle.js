import React, {Component} from 'react'
import SideSection from './SideSection'
import InputForm from './InputForm'
class SideTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections : [0],
            tid : props.tid,
            isFocus : true
        };
        this.putEnter = this.putEnter.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
    }
    componentDidUpdate() {
        if( this.props.isEdit ) {
          this.refs[this.state.tid].focus();
        }
      }

    putEnter(e){
        //console.log(this.state.sections.slice(-1)[0])
        if (e.keyCode == 13){
            if (!this.state.sections.value){
                this.state.sections.push(e.target.value)
                this.setState({sections:this.state.sections})
            }
        }
    }
    deleteElement(titleId){
        if (this.state.sections.length > 1){
            delete this.state.sections[titleId];
            this.setState({sections:this.state.sections})
        }
    }

    render(){
        return(
        <div>
            <InputForm
                id = {this.state.tid}
                name = "タイトル" 
                isFocus = {this.state.isFocus}
                putEnter = {(e) => this.props.putEnter(e,this.state)} 
                deleteElement = {() =>this.props.deleteElement(this.props.id)}
            />
            {this.state.sections.map((section,i) => {
            return <SideSection
                id = {i}
                putSectionEnter ={this.putSectionEnter}
                putEnter = {(e) => this.putEnter(e,this.state)} 
                deleteElement = {this.deleteElement}
            />
            })}
        </div>
        )
    }
}

export default SideTitle