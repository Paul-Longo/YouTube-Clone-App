import React from 'react';


const RelatedVideos = (props) => {
    let renderedVideos = props.videos.map(video => {
        return( 
        <div key={video.id.videoId} className="related">
            <iframe 
                title="videoPlayer" 
                id="player" 
                type="text/html" 
                width="300" 
                height="300"
                src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://example.com`}
                frameborder="0">
            </iframe>
        </div>
        );
    });
    return <div>{renderedVideos}</div>
}

export default RelatedVideos;