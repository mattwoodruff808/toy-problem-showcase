import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    palinator(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if (forwards === backwards){
            this.setState({palindrome: 'True'})
        } else {
            this.setState({palindrome: 'False'})
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.palinator(this.state.userInput)}>PALINATE</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;