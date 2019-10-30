import React from 'react'
import Button from '@material-ui/core/Button'

function FavouritesAdd( { visable, addNewFavourite, hideAdd }) { 

    const [urlOfSite, setUrlOfSite] = React.useState('url')

    function handleSubmit () {
        addNewFavourite(urlOfSite)
        hideAdd(false)
    }

    if (visable) { return (
            <div id="favourites-add-container">
                <div id="favourites-add-image">
                    <img src={'https://plus.google.com/_/favicon?domain_url=' + urlOfSite} id="favourites-add-icon"></img>
                </div>
                <input id="favourites-add-url" 
                    placeholder="  Type URL to website..." 
                    onChange={(e) => setUrlOfSite(e.target.value)} >
                    </input>
                    <Button id='favourites-add-submit' onClick={handleSubmit} varient='outlined' color="defualt" size='small'>Add</Button>
                {/* <button id="favourites-add-submit" onClick={handleSubmit}>Add</button> */}
            </div>
        )
    } else {
        return null
    }
}

export default FavouritesAdd