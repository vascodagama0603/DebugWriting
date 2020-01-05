import React, {Component} from 'react'
import SideSection from './SideSection'
const InputForm = (props) =>{
    //{console.log("prop.di " +props.id)}
    if(true){
        let content = props.value;
        return(
            <div>
                <input
                    type= "text"
                    ref={props.tid}
                    placeholder={props.name}
                    onKeyDown = {(e) => props.putEnter(e)} 
                />
                <input 
                    type="button" 
                    value="×"
                    tabindex="-1"
                    onClick={(e) => props.deleteElement(e)}
                />
            </div>   
        )        
    }
    else{
        return(
            <div>
                <p
                    value={props.name}
                />
            </div>   
        )
    }

}

export default InputForm