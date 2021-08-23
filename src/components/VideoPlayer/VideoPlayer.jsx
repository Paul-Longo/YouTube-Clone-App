import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: "PXzuDXZwZtI"
        }
    }
    render() { 
        return (
            <div>
                <iframe title="videoPlayer" id="player" type="text/html" width="640" height="390"
                src={`http://www.youtube.com/embed/${this.state.video_id}?enablejsapi=1&origin=http://example.com`}
                frameborder="0"></iframe>
            </div>
        );
    }
}
 
export default VideoPlayer;