import React from "react";
import './Task.css'

class Task extends React.Component{

    render(){
        return(
            <li onClick={()=>{this.onHandleClick()}}>{this.props.value}</li>
        )
    }

    onHandleClick(){
        alert("Task : "+this.props.value);
    }
}

export default Task;
