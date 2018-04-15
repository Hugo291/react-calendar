import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./header/Header";
import Content from "./content/Content";
import MenuSide from "./Menu/Menu"
import './index.css'

class App extends Component {

  render() {

        const height = {height:'100%'};

        return (
            <div id={"outer-container"} style={height}>

                <MenuSide/>
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