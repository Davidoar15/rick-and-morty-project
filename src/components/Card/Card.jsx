import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({character, onClose}) {
   const { id, name, status, species, gender, origin, image } = character;

   return (
      <div className={styles.cardContainer}>
         <button className={styles.btnErase} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h3 className={styles.cardH3}>{ name }</h3>
         </Link>
         <h4 className={styles.cardH4}>Status: { status }</h4>
         <h4 className={styles.cardH4}>Species: { species }</h4>
         <h4 className={styles.cardH4}>Gender: { gender }</h4>
         <h4 className={styles.cardH4}>Origin: { origin.name }</h4>
         <div className={styles.divImgCard}>
         <img className={styles.imgCard} src={ image } alt={name}/>
         </div>
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