import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions.js";
import styles from "./Card.module.css";

function Card({character, onClose, addFav, removeFav, myFavorites }) {
   const { id, name, status, species, gender, origin, image } = character;
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(character);
      }
   };

   return (
      <div className={styles.cardContainer}>

         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}

         <button className={styles.btnErase} onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
            <h3 className={styles.cardH3}>{ name }</h3>
         </Link>

         <h3>ID: { id }</h3>
         <h4 className={styles.cardH4}>Status: { status } </h4>
         <h4 className={styles.cardH4}>Species: { species }</h4>
         <h4 className={styles.cardH4}>Gender: { gender }</h4>
         <h4 className={styles.cardH4}>Origin: { origin.name }</h4>
         <div className={styles.divImgCard}>
            <img className={styles.imgCard} src={ image } alt={name}/>
         </div>
         
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Card);