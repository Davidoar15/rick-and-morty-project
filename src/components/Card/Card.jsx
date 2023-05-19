import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({character, onClose}) {
   const { id, name, status, species, gender, origin, image } = character;

   return (
      <div className={styles.cardContainer}>
         <button className={styles.btnBienvenida} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>Name: { name }</h2>
         </Link>
         <h2>Status: { status }</h2>
         <h2>Species: { species }</h2>
         <h2>Gender: { gender }</h2>
         <h2>Origin: { origin.name }</h2>
         <img src={ image } alt={name}/>
      </div>
   );
}
/* <button onClick={}>X</button>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <img src={} alt='' /> */