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

//  handleSubmit = 
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
                <h1>Youtube Clone</h1>
                <iframe id="player" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/9b4cm45cfJY?enablejsapi=1&origin=http://example.com"
                frameborder="0"></iframe>
            </div>
         );
    }
}
export default App;