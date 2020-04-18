import React,{Component} from 'react'
import SideTitle from './SideTitle'
const TESTA=()=>{
    localStorage.setItem('myCat', 'Tom');
    var cat = localStorage.getItem("myCat");
    console.log(cat)
  }
class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            indexs : [0],
            titles : [""]
        };
        this.putEnter = this.putEnter.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
    }

    putEnter(e,props){
        if (e.keyCode == 13){
            
         console.log('id ' +props.tid)
         if (this.state.titles.indexs > 1 ){
            this.state.indexs.splice(this.state.indexs.indexOf(props.tid)+1, 0, this.state.titles.length);
            this.state.titles.splice(this.state.indexs.indexOf(props.tid), 0, e.target.value);
         }
         else{
            this.state.indexs.push(this.state.indexs.length);
            this.state.titles.push(e.target.value);
         }
         
          console.log('ids ' +this.state.indexs.indexOf(props.tid)+1)
          console.log('props.id ' +props.tid)
          console.log('this.state.titles ' +this.state.indexs)
          console.log('this.state.titles ' +this.state.titles)
          this.setState({titles:this.state.titles})
          localStorage.setItem(this.state.indexs, this.state.titles);
          console.log(localStorage)
        }
    }
    deleteElement(titleId){
        if (this.state.titles.length > 1){
            delete this.state.titles[titleId];
            this.setState({titles:this.state.titles})
        }
    }
    render(){
        return(
            <div>
                {this.state.titles.map((title,i) => {
                return <SideTitle
                    tid = {title}
                    putEnter = {this.putEnter}
                    deleteElement = {this.deleteElement}
                    OnFocus = {true}
                    OnBlur = {false}
                />
                })}
            </div>
        )
    }
}

export default SideBar