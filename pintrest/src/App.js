import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/header';
import MainBoard from './components/mainboard';
import unsplash from './api/unsplash'
require("dotenv").config();

function App() {
  const [pins, setPins] = useState([])

  function getNewPins(){
    let promises = []
    let pinData = []
    let pins = ['ocean', 'sf', 'dogs', 'tigers', 'hello']
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results
          pinData = pinData.concat(results)
          pinData.sort(sortPins)
        })
      )
      Promise.all(promises).then(() => {
        setPins(pinData)
      })
    })
  }

  useEffect(() => {
    getNewPins()
  }, [])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    })
  }

  function sortPins(a,b){
    return 0.5 - Math.random()
  }

  const onSearchSubmit = (term) => {
    console.log(term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [ 
        ...results,
        ...pins,
      ]
      newPins.sort(sortPins);
      setPins(newPins);
    })
  }
  
  return (
    <div className="app">
     <Header onSubmit={onSearchSubmit}/>
     <MainBoard pins={pins}/>

    </div>
  );
}

export default App;
