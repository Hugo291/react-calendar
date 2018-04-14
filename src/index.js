import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./header/Header";
import Content from "./content/Content";

class App extends Component {

  render() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);