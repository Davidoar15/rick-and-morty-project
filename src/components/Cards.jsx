import React from 'react';
import Card from './Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className={style.cardsContainer}>
         {characters.map(character => (
            <Card key = {character.id}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            image = {character.image}
            onClose = {()=> window.alert('Emulamos que se cierra la Card')}/>
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