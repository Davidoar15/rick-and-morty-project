import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [], // QUE RENDERIZO
  allCharacters: [], // LOS FAVORITOS
  errors: false,
};

export default function reducer(
  state = initialState,
  { type, payload } // action = { type, payload }
) {
  switch (type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors: false,
      };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload, errors: false };

    case "ERROR":
      return { ...state, errors: payload };

    case FILTER:
      // EXTRA: => Caso "All"
      if (payload === "ALL")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      let orderedCharacters = [...state.allCharacters];
      if (payload === "A") {
        orderedCharacters = state.allCharacters.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        orderedCharacters = state.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderedCharacters,
      };

    default:
      return { ...state };
  }
}
