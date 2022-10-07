// import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { KEY } from "../../localKey";
import './SearchResultsPage.css';

const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState();
    
  async function getSearchResults(search) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&maxResults=5&type=video`
    );
    console.log("Search results ", response.data.items);
    setSearchResults(response.data.items);
  }

  
const handleClick = (event, id, title, description) => {
  event.preventDefault();
  props.setCurrentVideo(id,title,description) 
  console.log('handleclick event was triggered');
}


  return (
    <div className='searchBar'>
      <SearchBar className= 'SearchBar' getSearchResults={getSearchResults} />
       <table>
        <tbody>
          {searchResults.map((searchResults, index)=> {
            return (
              <tr className="row" key={index}>
                <td>
                <input type="image" src={searchResults.snippet.thumbnails.default.url} alt="/" onClick={(event) => handleClick(event, searchResults.id.videoId, searchResults.snippet.title, searchResults.snippet.description)}/>               
                </td>
                <td>{searchResults.snippet.title}</td>
                <td>{searchResults.snippet.description}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;