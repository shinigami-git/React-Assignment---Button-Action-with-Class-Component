import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.handleClick = this.handleClick.bind(this);
	   this.state={
	   renderPara:false,
	   };
    }
	handleClick() {
		this.setState({ renderPara: true });
	  }


    render() {
    	return(
    		<div id="main">
		 {this.state.renderPara && <p id="para">
          `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
        </p>}
    {!this.state.renderPara && <button id="click" onClick={this.handleClick}>
            click me
          </button>}
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

