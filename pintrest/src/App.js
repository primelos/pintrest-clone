import React from 'react'
import './App.css';
import Header from './components/header';
import MainBoard from './components/mainboard';
import unsplash from './api/unsplash'
import { CardActions } from '@material-ui/core';

function App() {

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  const onSearchSubmit = (term) => {
    getImages(term)
  }
  console.log(onSearchSubmit('bali'))
  console.log('APP');

  return (
    <div className="app">
     <Header />
     <MainBoard />

    </div>
  );
}

export default App;
