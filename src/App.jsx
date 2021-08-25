import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import key from './components/apikey';
import CommentBox from './components/CommentsBox/CommentsBox';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoResults : [],
            comments: [],
            searchTerm: "",
            // create a state variable for the current video id being watched 
            // (initialize this to a videod id of your choice)
        }
    }

// create a function here that calls your YouTube API endpoint using axios.get request
// Take the response you get back from the API call and find the first video id then update your state video id variable

getVideos = async (searchTerm) => {
    console.log("You hit me!", searchTerm)
     try{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${key}&part=snippet`); //change "q" field to input whatever is searched
        let relatedVideos = response.data.item;
        let videos = response.data.item
        for(let i = 0; i < relatedVideos.length; i++) {
            videos.push(relatedVideos[i].id.videoResults)
        }
        this.setState({
            videoResults: videos})
    }
      catch(except){
      console.log('error')
         
    }
}

    render() { 
        console.log(this.state)
        return ( 
            <div className='container '>
                <h1>YouToob</h1>
                <SearchBar getVideosFunction={this.getVideos} />
                <VideoPlayer />
                <RelatedVideos videos={this.state.videoResults}/>
                <CommentBox />
               {/* Embedded player here (In th<RelatedVideos videos={this.state.videoResults} />e embedded player's src URL use the videoId state variable as the video id in the URL) */}
                {/*  */}
                
            </div>
        );
    }
}
 
export default App;