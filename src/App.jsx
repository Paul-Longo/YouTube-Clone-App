import axios from 'axios';
import React, { Component } from 'react';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // create a state variable for the current video id being watched 
            // (initialize this to a videod id of your choice)
        }
    }

    // create a function here that calls your YouTube API endpoint using axios.get request
        // Take the response you get back from the API call and find the first video id then update your state video id variable

    render() { 
        return (
            <div>
                {/* Embedded player here (In the embedded player's src URL use the videoId state variable as the video id in the URL) */}
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/{state variable here}?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe>
                    <div id="root"></div>
            </div>
          );
    }
}
 
export default App;