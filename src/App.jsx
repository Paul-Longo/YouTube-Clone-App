import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import key from './components/apikey';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoResults : [],
            // create a state variable for the current video id being watched 
            // (initialize this to a videod id of your choice)
        }
    }

    componentDidMount(){
    this.getVideos();
 }
// create a function here that calls your YouTube API endpoint using axios.get request
// Take the response you get back from the API call and find the first video id then update your state video id variable

async getVideos(searchTerm) {
     try{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${key}&part=snippet`); //change "q" field to input whatever is searched
        let relatedVideos = response.data.items
        let videos = []
        for(let i = 0; i < relatedVideos.length; i++) {
            videos.push(relatedVideos[i].id.videoId)
        }
        this.setState({videoResults: videos})
    }
     catch(except){
         console.log(except)
    }
}

handleSearch = async (searchTerm) =>{
    const response = await 
    this.setState({
        searchTerm: searchTerm,
        view: 'search',
    })
    console.log(response)
} 

    render() { 
        return ( 
            <div className='container'>
                <h1>YouToob</h1>
                <VideoPlayer />
                <SearchBar searchTerm={this.getVideos} />
                {/* Embedded player here (In the embedded player's src URL use the videoId state variable as the video id in the URL) */}
                <RelatedVideos videos={this.state.videoResults} />
                
            </div>
        );
    }
}
 
export default App;