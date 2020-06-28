import React from 'react';
import './Card.css';
import typeColors from './typeColors.js'

const Card = ({pokemon}) =>{
   return(
     <div className ='Card'>
       <div className = 'Card__img'>
       			<img src={pokemon.sprites.front_shiny} alt="pokemon"/>
       </div>
       <div className="Card__name">
               	 {pokemon.name}
       </div>
       <div className='Card__types'>
       {
		         pokemon.types.map(eachType=>{
		         	return (
		                <div key={eachType.type.name} className='Card__type' style={{backgroundColor : typeColors[eachType.type.name]}}>
		                  {eachType.type.name}
		                </div> 
		         		);
		         })
       }
       </div>
       <div className="Card__info">
	                <div className="Card__data Card__data--weight">
	                    <p className="title">Weight</p>
	                    <p>{pokemon.weight}</p>
	                </div>
	                <div className="Card__data Card__data--weight">
	                    <p className="title">Height</p>
	                    <p>{pokemon.height}</p>
	                </div>
	                <div className="Card__data Card__data--ability">
	                    <p className="title">Ability</p>
	                    <p>{pokemon.abilities[0].ability.name}</p>
	                </div>
            </div>
     </div>
   	);

}

export default Card;