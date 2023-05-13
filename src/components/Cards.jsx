import React from 'react';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const cardsStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    };

   return (
      <div style={cardsStyles}>
         {characters.map(character => (
            <Card key = {character.id}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            image = {character.image}/>
         ))}
      </div>
   );
}
