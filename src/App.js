import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';

const cs = console.log;

function App() {

  //useState
  const [pokemonGo, setpokemonGo] = useState([]);
  const [getNextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  //1. Poke API Call
  const apiCall = async () => {
    //Using of async function + then() only for the json transformation
    const result = await fetch(getNextUrl).then(async (res) => {
      res = await res.json();
      setNextUrl(() => res.next);
      return res.results;
    })

    //2. Using of all URL retrieved before to fetch again (API Call) and insert the requested data into an object for each, and in a Array for All
    result.forEach(element => {
      fetch(element.url)
        .then(res => {
          res.json()
            .then(res => {
              const obj = { picture: res.sprites.other.dream_world.front_default, name: res.name, type: res.types[0].type.name, ability: res.abilities[0].ability.name, version:res.game_indices[0].version.name, weight:res.weight}
              cs(obj)
              //3. Insertion of the requested data into a corresponding useState to be showing on screen
              cs(res)
              setpokemonGo((e) => [...e, obj]);
            })
        })
    })
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <div>
      <div className='flex flex-col items-center'>
        {/* Simple container for flexbox using: Each box got a fixed size to force the wrap */}
        <div className='h-full w-fit m-10 flex gap-5 gap-y-14 flex-wrap justify-around'>
          {pokemonGo.map((e, key) => <Cards {...e}  />)}
        </div>

        <div className='m-4'>
          <button className='w-fit font-bold bg-black text-white rounded-lg border-2 border-black shadow-2xl p-2 hover:scale-110 transition duration-300 ease-in-out' onClick={() => apiCall()}>More...</button>
        </div>

      </div>
    </div>
  );
}

export default App;
