import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Tooltip from '@material-ui/core/Tooltip'

import FavouritesAdd from './FavouritesAdd'

function Favourites({ urlOfSite, showAdd }) { 

    function setFavicon(urlToIcon){
        if(urlToIcon == 'Add') { 
            return <FaPlus />
        } else {
           return <img id='favicon' src={'https://plus.google.com/_/favicon?domain_url=' + urlToIcon}></img>
        }
    }

    function handleClick() {
        console.log('CLICK')
        if(urlOfSite == 'Add') {
            showAdd(true)
        } else { 
            window.location.href = ('http://' + urlOfSite)
        }
    }

    return (
        <Tooltip title={urlOfSite}>
        <div id='favourite'>
            <button id="favourite-button" onClick={handleClick}>
                {setFavicon(urlOfSite)}
                
            </button>
        </div>
        </Tooltip>
    )
}

export default Favourites