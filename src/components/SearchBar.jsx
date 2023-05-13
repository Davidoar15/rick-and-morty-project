export default function SearchBar(props) {
   return (
      <div>
         <input type="search" placeholder="Search Character"></input>
         <button onClick={props.onSearch}>Add</button>
      </div>
   );
}
/* <input type='search' />
         <button onClick={}>Agregar</button> */