import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [], // QUE RENDERIZO
    allCharacters: [], // LOS FAVORITOS
};

export default function reducer(
    state = initialState,
    { type, payload } // action = { type, payload }
) {
    switch (type){

        case ADD_FAV: 
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            }

        case REMOVE_FAV: 
            const filteredFavs = state.allCharacters.filter(
                fav => fav.id !== Number(payload)
            );
            return {
                ...state,
                myFavorites: filteredFavs,
                allCharacters: filteredFavs,
            }

        case FILTER: 
            // EXTRA: => Caso "All"
            if(payload === "ALL") return {
                ...state,
                myFavorites: state.allCharacters,
            }
            const allCharactersCopy = [...state.allCharacters];
            const filteredCharacters = allCharactersCopy.filter(
                character => character.gender === payload 
            );
            return {
                ...state,
                myFavorites: filteredCharacters,
            }

        case ORDER: 
            let orderedCharacters = [...state.allCharacters];
            if (payload === "A"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id
                )
            } else if  (payload === "D"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => b.id - a.id
                )
            }
            return {
                ...state,
                myFavorites: orderedCharacters,
            }

        default:
            return {...state};
    }
};