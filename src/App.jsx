import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }

    componentDidMount(){
    this.getVideo();
 }
// create a function here that calls your YouTube API endpoint using axios.get request
// Take the response you get back from the API call and find the first video id then update your state video id variable

async getVideos(searchTerm) {
     try{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyAr75bgsZcB9ajYgOvq0qBjZKr0yBMAAyk`);
        this.setState({
            video: response.data
        });
     }
     catch(except){
         alert('Invalid Response')
     }
 }


    render() { 
        return ( 
            <div className='container'>
                <h1>YouToob</h1>
                <SearchBar searchTerm={getVideos}/>
                {/* Embedded player here (In the embedded player's src URL use the videoId state variable as the video id in the URL) */}
                <iframe id="player" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/BNqeVsHyGKA?enablejsapi=1&origin=http://example.com"
                frameborder="0"></iframe>
                {/* Add a component that displays the search results */}
            </div>
          );
    }
}
 
export default App;