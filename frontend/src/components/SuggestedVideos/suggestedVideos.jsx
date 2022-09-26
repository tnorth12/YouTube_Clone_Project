import { Button } from 'bootstrap';
import React from 'react';
import './suggested.css'

function SuggestedVideos(props) {

    return (
        <div class= "SuggestedVideos" >
            <h1>Recomended</h1>
            { 
            props.recomendedVideos.map((video)=> {
                return (
                    <div type={Button} class="snippet" >
                        <img class="thumbnail" src={video.thumbnails.medium.url} alt="thumbnail"/>
                    <div class="VideoInfo">
                        <h5 display="grid">{video.title}</h5><br/>
                    </div>
                    
                    </div>

                )}
            )} 

        </div>
    );
}
export default SuggestedVideos;