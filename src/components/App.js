import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	   this.state={
	   renderPara:false,
	   }
	    this.handleClick=()=> {
	    this.setState({
	    renderPara:true,
	    });
	    };
	};

    render() {
    	return(
    		<div id="main">
		 {renderPara && <p id="para">
          {text}
        </p>}
    {!renderPara && <button id="click" onClick={this.handleClick}>
            click me
          </button>}
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;

