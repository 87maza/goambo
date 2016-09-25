import React, { Component } from 'react';
import Data from './tile/alpha'

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>
                <input
                    type = "text"
                    value = {this.state.term}
                    onChange = {this.updateSearch.bind(this)}
                    />
            </div>
        );
    }
}

export default SearchBar;


// onChange={event => this.setState( {term: event.target.value} )}
