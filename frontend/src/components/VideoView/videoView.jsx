import React, { Component } from 'react';
import './videoView.css';
import VideoPlayer from '../VideoPlayer/videoPlayer';
import SearchBar from '../SearchBar/searchbar';
import SuggestedVideos from '../SuggestedVideos/suggestedVideos';
import Comment from '../Comment/comments';
import axios from 'axios';
import { KEY } from "./localKey";




class VideoView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            AllVideos: [] ,
            videoById:'kre8q9r8xFI',
            View: 'search', // or search,
            RecomendedVideos : [],
            searchResults: [],
            recomendationSnippets: [],
            thumbnail: ""
            
        }
    }

  async getRecomdations(){
    const currentVideo = this.state.videoById
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params: {
              key: KEY,
              type: "video",
              relatedToVideoId: this.state.videoById,
              maxResults: 10,
              part: 'snippet',
             }})
    console.log("recomended list: (populated on startup)")
    console.log(response.data.items);
    console.log('succesfully obtained the list')
    const recomendedVideoID= response.data.items.map((video) => {return video.id.videoId});
    const recomendationSnippets= response.data.items.map((video) => {return video.snippet});
    const thumbnail= recomendationSnippets.map((video) => {return video.thumbnails.default.url});
    console.log("the list of recomended vids. filtered by snippit")
    console.log(recomendationSnippets)
    this.setState({
      RecomendedVideos: recomendedVideoID,
      recomendationSnippets: recomendationSnippets,
      thumbnail: thumbnail,
    });
    console.log(this.state.recomendationSnippets)
    console.log(thumbnail)
     }

componentDidMount(){
  this.getRecomdations()
}

handleSearch(data){
    this.props.handleSearch(data)
}

selectVideo(data){
    this.props.selectVideo(data)
}


    render() { 
      // maybe adda nother render view called SearchView and dio some logic to be able to flip between the two. propbably on the onsubmit functinality to change the state. view in th main pp. propbably throuigh passing a function down with with rops.
      
        return ( 
          <div>
        <div class= "VideoView" style={{color: "white"}}>
          <div class="NavigationBar"  style={{background: "teal"}}>
            <SearchBar handleSearch={(data)=>this.handleSearch(data)} id="search"/>
          </div>
          <div class="VideoPlayer" style={{background: "black"}}>
              <VideoPlayer videoId={this.props.videoId}/>
          </div>
          <div className="AddComment" style={{background: "white"}}>
            <Comment videoId={this.state.videoById}/>
          </div>
          <div class="Recomended" style={{background: "rgb(31, 31, 31)"}}>
            <SuggestedVideos selectVideo={(data)=>this.selectVideo(data)} recomendedVideos={this.state.recomendationSnippets} thumbnail={this.state.thumbnail} videoID={this.state.videoById} />
          </div>
          <div class="Footer" style={{background: "brown"}}>
            Footer
          </div>
          </div>
          
        
        </div>
         );
    }
}
 
export default VideoView;