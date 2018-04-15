import React from "react";
import './Task.css'
import FontAwesome from "react-fontawesome"

class Task extends React.Component{

    render(){
        return(
            <li onClick={()=>this.onHandleClick()}>{this.props.value}<FontAwesome name="times-circle "/></li>
        )
    }

    onHandleClick(){
        alert("Task : "+this.props.value);
    }
}

export default Task;
