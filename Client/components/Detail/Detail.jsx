import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.divText}>
        {character.name && (
          <h2 className={styles.detailH2}>Name: {character.name}</h2>
        )}
        {character.status && (
          <h2 className={styles.detailH2}>Status: {character.status}</h2>
        )}
        {character.species && (
          <h2 className={styles.detailH2}>Species: {character.species}</h2>
        )}
        {character.gender && (
          <h2 className={styles.detailH2}>Gender: {character.gender}</h2>
        )}
        {character.origin && character.origin.name && (
          <h2 className={styles.detailH2}>Origin: {character.origin.name}</h2>
        )}
      </div>

      <div className={styles.divImg}>
        {character.image && (
          <img
            className={styles.imgDetail}
            src={character.image}
            alt="Character"
          />
        )}
      </div>
    </div>
  );
}
