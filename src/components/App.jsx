import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments:[
                
            ]
         }
    }

 componentDidMount(){
    this.getComments();
 }

 async getSong() {
    try {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            comments: response.data
        });
    }
    catch (except) {
        alert('Not Valid')
    }
}

filterResults = (field, searchTerm) => {
    console.log(field)
    console.log(searchTerm)
    let results = this.state.songs.filter(function (el) {
        if (el[field] === searchTerm) {
            return true
        }
    })
    this.setState({
        songs: results
    })
}





    render() { 
        return (  );
    }
}
 
export default App;