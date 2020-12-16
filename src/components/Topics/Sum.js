import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirstChange(val){
        this.setState({number1: parseInt(val, 10)})
    }

    handleSecondChange(val){
        this.setState({number2: parseInt(val, 10)})
    }

    add(num1, num2){
        this.setState({sum: num1 + num2})
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleFirstChange(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.handleSecondChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>CALCULATE</button>
                <span className="resultsBox">Result: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;