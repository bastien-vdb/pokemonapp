import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';

const cs = console.log;

function App() {
  useEffect(()=>{
    const apiCall = async() => {
      const result = await fetch('https://pokeapi.co/api/v2/pokemon/').then(async(res)=>{
        res = await res.json();
        return res.results;
      })
      result.forEach(element=>{
        fetch(element.url)
          .then(res=>{
            res.json()
            .then(res=>{
              cs(res);
            })
          })
      })
    }
    apiCall();
  },[])
  
  return (
    <div className=''>
      <Cards/>
    </div>
  );
}

export default App;
