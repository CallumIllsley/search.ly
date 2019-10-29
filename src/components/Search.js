import React from 'react' 
import { FaSearch } from 'react-icons/fa'


function Search() { 

    const homeUrl = 'http://www.google.com/search?q='

    const [userSearch, setUserSearch] = React.useState('google')

    function search() { 
        console.log(userSearch)
        window.location.href = (homeUrl + userSearch)
    }

    return(
        <div id="search-wrapper">
            <div id='search'>
                <button id='search-enter' onClick={() => search()}><FaSearch/></button>
                <input type="text" 
                       placeholder="Search.ly or type a URL..." 
                       id="search-input" 
                       onChange={(e) => setUserSearch(e.target.value)}
                       onKeyPress={(e) => {if(e.key === "Enter") {search()}}}>
                </input>
            </div>
        </div>
    )
}

export default Search