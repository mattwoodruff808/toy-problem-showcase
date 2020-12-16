import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['Cake', 'Candy', 'Apple Beer', 'Gravy', 'Burger', 'Fries'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterArr(userInput){
        let arr = this.state.unfilteredArray;
        let filtered = [];

        for (let i = 0; i < arr.length; i++){
            if (arr[i].includes(userInput)){
                filtered.push(arr[i]);
            }
        }
        this.setState({filteredArray: filtered})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArr(this.state.userInput)}>FILTER</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;