import React , { useState, useEffect } from 'react';
import Card from './components/Card.js'
import Pagination from './components/Pagination.js'
import Navbar from './components/Navbar.js'

function App() {
  
  const [pokemonData , setPokemonData] = useState([]);
  const [nextUrl , setNextUrl] = useState('');
  const [prevUrl , setPrevUrl] = useState('');
  const [loading , setLoading] = useState(true);
  const [intialUrl , setInitailUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
  async function pokemonResponse(){
    const res = await fetch(intialUrl);
    const data = await res.json();
    await loadPokemons(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  pokemonResponse();
  }, [intialUrl])


 const loadPokemons = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await new Promise((resolve, reject) => {
        fetch(pokemon.url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

 function gotoNextPage(){
  setLoading(true);
 setInitailUrl(nextUrl);
}

 function gotoPrevPage(){
  setLoading(true);
  setInitailUrl(prevUrl);
}


return (
  <div>
    <Navbar />
    {loading ? <h1 style={{ textAlign: 'center' , margin: '80px'}}>Loading... </h1> : 
    (<>
      <Pagination
        gotoPrevPage={prevUrl ? gotoPrevPage : null }
        gotoNextPage={nextUrl ? gotoNextPage : null}
      />
      
      <div className="grid-container">
        {
          pokemonData.map((pokemon,i)=>{
            return (<Card key={i} pokemon={pokemon}/>);
          })
        }
      </div>
     </>
    )
  }</div>
  );
}

export default App;
