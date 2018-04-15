import React from "react";
import HeaderContent from './headerContent/HeaderContent';
import Day from "./day/Day";
import '../index.css'
import ListTask from "../Task/ListTask";
import Task from "../Task/Task";

class Content extends React.Component{

    static createCalendar(){

        let listTask = <ListTask list={[<Task value="premier"/>,<Task value="deuxieme"/>]}/>;

        let list = [];

        for(let i=1; i<=30; i++){
            list.push(<Day value={i} list={listTask}/>);
        }

        return list;
    }

    render(){
        return (
            <div>

                <HeaderContent/>

                <div>
                    <ul className="days">
                        {Content.createCalendar()}
                    </ul>
                </div>
            </div>
        )

    }
}

    export default Content;