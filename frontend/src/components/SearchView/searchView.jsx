import React from 'react';
import SearchBar from '../SearchBar/searchbar';
import './searchView.css';
//import './suggested.css'

function SearchView(props) {


    return (
        <div>
         <div class="searchView">
           <div class="searchbar" style={{background: "teal"}}>
             <SearchBar id="search" />
           </div>
           <div class="body" style={{background: "white"}}>
               <div>
             <h4>Results</h4>
               </div>
            
            <div class="searchGrid">
            {props.searchResults.map((video)=> {
                return (
                    <div class="VideoBlock"  onClick={() => props.selectVideo(video.id.videoId)}>
                        <img class="img" src={video.snippet.thumbnails.medium.url} alt="thumbnail"/><br/>
                    <div class="title">
                        <h5 display="grid">{video.snippet.title}</h5><br/>
                    </div>
                    
                    </div>

                )}
            )} 
            </div>
            </div>

           </div>
           <div class="Footer" style={{background: "brown"}}>
            Footer
           </div>
           <div>
           </div>          
        </div>
    );
}
export default SearchView;