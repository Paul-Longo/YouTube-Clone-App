import React, { Component } from 'react';

class SearchBar extends Component {
    state = { 
        term: 'Default text'
     };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit= (event) => {
    this.setState({
        term: event.target.value
    });
    }

  render(){
    return (
        <div className='search-bar ui segment'>
            <form onSubmit={this.handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="video-searc">Video Search</label>
                    <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>

                </div>
            </form>
        </div>
   )}
 
}
    
export default SearchBar;