import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId : [],
            relatedVideos: [],
            searchTerm: " ",

            // create a state variable for the current video id being watched 
            // (initialize this to a videod id of your choice)
        }
    }

    componentDidMount(){
    this.getVideo();
 }
// create a function here that calls your YouTube API endpoint using axios.get request
// Take the response you get back from the API call and find the first video id then update your state video id variable

async getVideo() {
     try{
<<<<<<< HEAD
        let response = await axios.get(''); // add to .get() remove empty string
=======
        let response = await axios.get("https:ww.googleapis.com/youtube/v3/search?q=Incubuspardonme&key=AIzaSyAr75bgsZcB9ajYgOvq0qBjZKr0yBMAAyk");
>>>>>>> bc6aee16079abd71bba2493a8ec10d55e65361ff
        this.setState({
            comments: response.data
        }); 
        this.setState({getComments: videos})
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
                <SearchBar filter={this.handleSearch} />
                {/* Embedded player here (In the embedded player's src URL use the videoId state variable as the video id in the URL) */}
                <iframe id="player" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/2S24-y0Ij3Y?enablejsapi=1&origin=http://example.com"
                frameborder="0"></iframe>
                <RelatedVideos videos={this.state.getComments} />
                
            </div>
          );
    }
}
 
export default App;