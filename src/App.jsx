import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments:[]
        }
    }

 componentDidMount(){
    this.getComments();
 }

 handleSubmit = async () =>{

 }

    render() { 
        return ( 
            <div className='container'>
                <h1>Youtube Clone</h1>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0">
                </iframe>
            </div>
         );
    }
}
export default App;