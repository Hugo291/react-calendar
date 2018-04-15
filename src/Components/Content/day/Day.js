import React from "react";
import './Day.css'

class Day extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:this.props.value,
            list:this.props.list
        }
    }

    render(){
        return(
            <li className="day" onClick={()=>{this.onclickDay()}}>
                {this.props.value}
                {this.props.list}
            </li>
        )
    }

    onclickDay(){
        //alert("onclickDay : "+this.props.value);
    }
}

export default Day;
