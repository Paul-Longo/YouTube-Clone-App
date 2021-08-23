import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:'base',
            searchResults: [],
        }
    }
    render() { 
        return ( 
            <div>
                <form className='Search' onSubmit={}>
                    <input name='field' onChange={} />
                </form>
            </div>
         );
    }
}
 
export default SearchBar;

