import React from "react";
import './Day.css'

class Day extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:this.props.value,
            key:this.props.key
        }
    }

    render(){
        return(
            <li onClick={()=>{this.onHandleClick()}}>{this.props.value}</li>
        )
    }

    onHandleClick(){
        alert("oncliclickDay : "+this.props.value);
    }
}

export default Day;
