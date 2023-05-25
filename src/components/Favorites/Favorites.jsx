import React, { useState } from 'react';
import Card from '../Card/Card';
import style from './Favorite.module.css';
import { filterCards, orderCards } from '../../Redux/actions';
import { connect, useDispatch } from 'react-redux';

function Favorites({myFavorites, onClose}) {

   const [aux, setAux] = useState(false);
   const dispatch = useDispatch();

   function handleOrder(e) {
      dispatch(orderCards(e.target.value))
      aux ? setAux(false) : setAux(true);
   };

   function handleFilter(e) {
      dispatch(filterCards(e.target.value));
   };

   return (
      <div className={style.generalContainer}>

         <div className={style.selectsFavorites}>

            <select name="order" onChange={handleOrder} className={style.order}>
               <option value="A">Ascendent</option>
               <option value="D">Descendent</option>
            </select>

            <select name="filter" onChange={handleFilter} className={style.filter}>
               <option value="ALL">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">Unknown</option>
            </select>
            
         </div>
         
         <div className={style.favoritesContainer}> 

            {myFavorites.map((character) => (
               <Card key = {character.id} character={character} onClose={onClose}/>
            ))}

         </div>
         
      </div>
   );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps, null)(Favorites);