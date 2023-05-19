import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            {character.name && <p>Name: {character.name}</p>}
            {character.status && <p>Status: {character.status}</p>}
            {character.species && <p>Species: {character.species}</p>}
            {character.gender && <p>Gender: {character.gender}</p>}
            {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
            {character.image && <img src={character.image} alt="Character" />}
        </div>
    );
}