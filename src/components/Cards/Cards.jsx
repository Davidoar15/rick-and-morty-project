import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {

   return (
      <div className={style.cardsContainer}>
         {characters.map((character) => (
            <Card key = {character.id} character={character} onClose={onClose}/>
         ))}
      </div>
   );
}
/*
export default function Cards({characters}) {
   <div>
      {
         characters.map(character => (
            <Card key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin}
               image = {character.image}
               onClose = {()=> window.alert('Emulamos que se cierra la Card')}
            />
         ))
      }
   </div>
}
*/