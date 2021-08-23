import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: "",
        }
    }    
    
    handleChange =(event) => {
        this.setState({
            searchPhrase: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchTerm(this.state.searchPhrase)
    };



    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className='search' >
                    <input name='searchBar' type="text" placeholder="Search" onChange= {this.handleChange} />
                    <button type="submit">Let's Go</button>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;

//post man used for testing only
//use dot notation to get response.data.""
//map function only works on arrays so get to array or convert it
// so itterate over it by using a for loop.