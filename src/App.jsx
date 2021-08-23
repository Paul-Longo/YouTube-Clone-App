import axios from 'axios';
import React, { Component } from 'react';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // videoId ='BNqeVsHyGKA',
            // relatedVideos: []

            // create a state variable for the current video id being watched 
            // (initialize this to a videod id of your choice)
        }
    }

    componentDidMount(){
    this.getComments();
 }
// create a function here that calls your YouTube API endpoint using axios.get request
// Take the response you get back from the API call and find the first video id then update your state video id variable

async getComments() {
     try{
        let response = await axios.get('');
        this.setState({
            comments: response.data
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
                {/* Embedded player here (In the embedded player's src URL use the videoId state variable as the video id in the URL) */}
                <iframe id="player" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/BNqeVsHyGKA?enablejsapi=1&origin=http://example.com"
                frameborder="0"></iframe>
            </div>
          );
    }
}
 
export default App;