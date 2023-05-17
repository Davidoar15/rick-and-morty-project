import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.searchContainer}>
         <input className={style.searchInput} type="search" placeholder="Search Character"></input>
         <button className={style.btnSearch} onClick={props.onSearch}>Add</button>
      </div>
   );
}
/* <input type='search' />
         <button onClick={}>Agregar</button> */