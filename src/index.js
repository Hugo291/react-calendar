import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header/Header";
import Content from "./Components/Content/Content";
import SideMenu from "./Menu/SideMenu"
import './index.css'

class App extends Component {

  render() {

        const height = {height:'100%'};

        return (
            <div id={"outer-container"} style={height}>

                <SideMenu/>
                <main id={"page-wrap"} >
                    <div className='blank'/>
                    <Header/>
                    <Content/>
                </main>
            </div>
        );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);