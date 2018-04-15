import React from "react";
import './Task.css'
class ListTask extends React.Component{

    render(){
        return(
            <ul className="listTask">
                {this.props.list}
            </ul>
        )
    }
}

export default ListTask;
