import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css"

export default function About() {
    return(
        <div className={style.aboutContainer}>

            <div className={style.firstRow}>
                <img className={style.imgProfile} src="Imagen Perfil LinkedIn.jpg" alt="Profile" />
                <div className={style.descriptions}>
                    <div className={style.description}>
                        <h3 className={style.descriptionH3}>Descripcion (Espanol)</h3>
                        <p>Joven venezolano de 21 años, residiendo en Argentina, con buena capacidad para la adaptación 
                            y el aprendizaje. Muy interesado en la adquisición de nuevos conocimientos. Aficionado a los
                            videojuegos y las tecnologías. Gusta de analizar minuciosamente las diferentes situaciones.</p>
                    </div>
                    <div className={style.description}>
                        <h3 className={style.descriptionH3}>Descripcion (Ingles)</h3>
                        <p>21 years old young venezuelan, living in Argentina, with good capacity to adapt and learn. 
                            Very interested in acquire new knowledge. Amateur in videogames and tecnologies. Like to analize
                            thoroughly different situations. 
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.secondRow}>
                <div className={style.box}>
                    <h3>Tech skills</h3>
                    <ul>
                        <li>Microsoft: Word, PowerPoint, Excel</li>
                        <li>C++, HTML, CSS, JavaScript, React</li>
                        <li>Matemáticas</li>
                    </ul>
                </div>
                <div className={style.box}>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Responsabilidad y Compromiso</li>
                        <li>Comunicación y Honestidad</li>
                        <li>Cooperativo, Amigable y Empático</li>
                    </ul>
                </div>
                <div className={style.box}>
                    <h3>Contacts (No funcional)</h3>
                    <ul>
                        <li><Link>LinkedIn</Link></li>
                        <li><Link>Facebook</Link></li>
                        <li><Link>Instagram</Link></li>
                        <li><Link>Discord</Link></li>
                        <li><Link>Whatsapp</Link></li>
                    </ul>
                </div>
                <div className={style.box}>
                    <img className={style.gifAbout} src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="gifcode"/>
                </div>
            </div>

        </div>
    )
}