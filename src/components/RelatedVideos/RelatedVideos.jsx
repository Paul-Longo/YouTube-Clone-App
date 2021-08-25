import React, { Component } from 'react';

class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: "PXzuDXZwZtI"
        }
    }
    
    render() {
        return (
            <div>
            <ul><iframe title="relatedVideos" id="ytplayer" type="text/html" width="160" height="90"
            src={`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.video_Id}&type=video&maxResults=5`}
            frameborder="0"></iframe></ul>
            </div>
        );
    }
}
//     constructor(props) {
//         super(props);
//         this.state = {
//             video_id: "PXzuDXZwZtI"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//             <ul><iframe title="relatedVideos" id="ytplayer" type="text/html" width="160" height="90"
//             src={`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.video_Id}&type=video&maxResults=5`}
//             frameborder="0"></iframe></ul>
//             </div>
//         );
//     }
// }

export default RelatedVideos;