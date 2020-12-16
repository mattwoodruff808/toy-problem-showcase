import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray = [{name: 'Matt', age: 27}, {name: 'Kaela', age: 26}],
            userInput = '',
            filteredArray = []
        }
    }

    handleChange(val){
        this.setState = ({userInput: val})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={}></button>
                <span className="resultsBox filterObjectRB"></span>
            </div>
        )
    }
}

export default FilterObject;