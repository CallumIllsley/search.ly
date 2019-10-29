import React from 'react'
import { FaPlus } from 'react-icons/fa'

function Favourites({ urlOfSite }) { 

    const url = urlOfSite

    function setFavicon(urlToIcon){
        if(urlToIcon === 'add') { 
            return <FaPlus />
        } else {
           return <img src={'https://plus.google.com/_/favicon?domain_url=' + urlToIcon}></img>
        }
    }

    return (
        <div id='favourite'>
            <button id="favourite-button">{setFavicon(url)}</button>
        </div>
    )
}

export default Favourites