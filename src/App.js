import React from 'react';
import './App.css';

import Logo from './components/Logo'
import Search from './components/Search'
import Favourites from './components/Favourites'
import FavouritesAdd from './components/FavouritesAdd';

function App() {

  const [favourites, setFavourites] = React.useState([])
  const [showAdd, setShowAdd] = React.useState(false)

  console.log(typeof setShowAdd)

  function addFavourite(url) { 
    const newFavs = [url, ...favourites]
    setFavourites(newFavs)
    return <Favourites urlOfSite={url} showAdd={setShowAdd}/>
  }

  return (
    <div id="container">
      <Logo />
      <Search />
      <FavouritesAdd visable={showAdd} addNewFavourite={addFavourite} hideAdd={setShowAdd}/>
      <div id="favourites-wrapper">
        <div id="favourites-inner">
          {
            favourites.length == 0 ? addFavourite('Add') : 
            favourites.map(
                (url) => {
                  return <Favourites urlOfSite={url} key={url} showAdd={setShowAdd} />
                }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App;
