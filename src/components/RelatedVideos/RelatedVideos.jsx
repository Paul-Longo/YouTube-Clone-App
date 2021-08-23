import React from 'react';

const RelatedVideos = (props) => {
    return (
        <div>
            <h1>Related Videos</h1>
            <button onClick={() => console.log(props.videos)}></button>
        </div>
    )
}

export default RelatedVideos;