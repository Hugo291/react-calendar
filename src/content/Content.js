import React from "react";
import HeaderContent from './headerContent/HeaderContent';
import Day from "./day/Day";

class Content extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    createCalendar(){

        let list = [];

        for(let i=0; i<30; i++){
            list.push(<Day value={i} key={i}/>);
        }
        return list;
    }

    render(){
        return (
            <div>
                <HeaderContent/>
                <div>
                    <ul className="days">
                        {this.createCalendar()}
                    </ul>
                </div>
            </div>
        )

    }
}

    export default Content;