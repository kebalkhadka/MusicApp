import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Login from './components/Login'


function App() {
  useEffect(()=>{
    const hash = window.location.hash;

    if(hash){
      const token = hash.substring(1).split('&')[0].split('=')[1]
      console.log(token);
      
    }
    
  })

  return (
    <>
   <Login/>
    </>
  )
}

export default App
