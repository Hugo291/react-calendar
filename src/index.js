import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Product extends React.Component{

    state = {
        quantity:0
    };

    addToCart(){
        this.setState({
            quantity : this.state.quantity+1
        });
        console.log('add'+this.state.quantity);
    }

    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>Quantity : {this.state.quantity}</p>
                <button onClick={()=> {
                    this.addToCart();
                }} >Add to cart</button>
            </div>
        )
    }

}

class App extends React.Component{

    state = {

    };

    render() {
        return (
            <div>
                <Product name="First"/>
                <Product name="Second"/>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);