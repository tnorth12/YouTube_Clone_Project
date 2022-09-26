import React, { Component} from 'react';
import './searchbar.css'
import axios from 'axios';
import { KEY } from "./localKey";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search:'base',
            searchResults: [],
        }
    }
    
     handleSubmit = async(event) =>{
        console.log('Triggered');
        event.preventDefault();
        const search  = this.state.search
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params: {
            key: KEY,
            q:search,
            maxResults: 20,
            part:'snippet' }})
        console.log("search results:")
        console.log(response.data.items)
        this.setState({
            searchResults: response.data.items,
        })
        this.props.handleSearch(response.data.items)
        
        }

    handleChange = (event) =>{
        
        this.setState({
        search: event.target.value
        });
        console.log(this.state.search)
        }

    render() { 
        return (
            <div>
                <form class="Navigationbar" onSubmit={this.handleSubmit}>
                <input class="search" type="text" name="searchbar" placeholder="Search.." onChange={(event) => this.handleChange(event)}>
            </input>
            <button type="submit">Search</button>
                </form>

            </div>
        );
    }
}
 
export default SearchBar;



// async componentDidMount(){
    //           const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q={superhero}&key=AIzaSyCRqFOe1lGNltYuiupQWPkVwBtxYrk2rsg")
    //           console.log(response.data.items)
    //          }