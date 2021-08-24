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
        console.log (event.target.value)
        this.setState({
            
            searchPhrase: event.target.value
        });
       
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getVideosFunction(this.state.searchPhrase);
       
    };



    render() { 
        return ( 
            <div>
                <form onSubmit= {(event) => this.handleSubmit(event)} >
                    <input name='searchBar' type="text" value={this.state.searchPhrase} onChange={this.handleChange} />
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