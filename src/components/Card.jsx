import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.cardContainer}>
         <button className={styles.btnBienvenida} onClick={ props.onClose }>X</button>
         <h2>Name: { props.name }</h2>
         <h2>Status: { props.status }</h2>
         <h2>Species: { props.species }</h2>
         <h2>Gender: { props.gender }</h2>
         <h2>{ props.origin.name }</h2>
         <img src={ props.image } alt="Imagen"/>
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