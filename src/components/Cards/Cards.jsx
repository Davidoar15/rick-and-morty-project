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
};