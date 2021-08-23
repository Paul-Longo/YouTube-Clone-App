import React, { Component } from 'react';
import './SearchBar.css';

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
        this.props.filter(this.state.searchTerm)
    }



    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className='search' >
                    <input name='searchBar' type="text" placeholder="Search" onChange={(event) => this.handleChange(event)} />
                    <button type="submit">Let's Go</button>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;

