import React from 'react';
import './App.css';

import Logo from './components/Logo'
import Search from './components/Search'
import Favourites from './components/Favourites'
import FavouritesAdd from './components/FavouritesAdd'

function App() {

  const [favourites, setFavourites] = React.useState({})

  return (
    <div id="container">
      <Logo />
      <Search />
      <div id="favourites-wrapper">
        <div id="favourites-inner">
          <Favourites urlOfSite="add"/>
        </div>
      </div>
    </div>
  );
}

export default App;
