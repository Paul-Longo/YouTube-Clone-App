import axios from 'axios';
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searhTerm: ""
        }
    }    
    
    handleChange =(event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.searchTerm)
    }



    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className='Search' >
                    <input name='searchBar' type="text" placeholder="Search" onChange={this.handleChange} searchTerm={this.state.term} />
                    <button type="submit">Let's Go</button>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;

