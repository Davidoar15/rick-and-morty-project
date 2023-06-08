import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        type="search"
        name="search"
        id="search"
        placeholder="Search Character"
        value={id}
        onChange={handleChange}
      ></input>

      <button className={style.btnSearch} onClick={() => props.onSearch(id)}>
        Add
      </button>
    </div>
  );
}

/*const handleSearch = () => {
      if (id.trim() !== "") {
         props.onSearch(id);
         setId("");
      }
   };*/
