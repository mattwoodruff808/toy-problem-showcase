import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{name: 'Matt', age: 27, birthday: 'January'}, {name: 'Kaela', age: 26}, {name: 'Bernard', age: 35, birthday: 'June'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterObjects(prop){
        let unfiltered = this.state.unFilteredArray;
        let filtered = [];

        for (let i = 0; i < unfiltered.length; i++){
            if (unfiltered[i].hasOwnProperty(prop)){
                    filtered.push(unfiltered[i]);
            }
        }
        this.setState({filteredArray: filtered});
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.filterObjects(this.state.userInput)}}>FILTER</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;