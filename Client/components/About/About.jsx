import React from "react";
import style from "./About.module.css";

export default function About() {
  const handleOpenInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
      newWindow.location = url;
    }
  };

  return (
    <div className={style.aboutContainer}>
      <div className={style.firstRow}>
        <img
          className={style.imgProfile}
          src="Imagen Perfil LinkedIn.jpg"
          alt="Profile"
        />

        <div className={style.descriptions}>
          <div className={style.description}>
            <h3 className={style.descriptionH3}>
              David Olivo. Perfil (Español)
            </h3>
            <p className={style.pAbout}>
              Joven venezolano de 21 años, residiendo en Argentina, con buena
              capacidad para la adaptación y el aprendizaje. Interesado en la
              adquisición de nuevos conocimientos. Aficionado a los videojuegos
              y las tecnologías. Gusta de analizar minuciosamente las diferentes
              situaciones.
            </p>
          </div>

          <div className={style.description}>
            <h3 className={style.descriptionH3}>
              David Olivo. Profile (English)
            </h3>
            <p className={style.pAbout}>
              21 years old young venezuelan, living in Argentina, with good
              capacity to adapt and learn. Very interested in acquire new
              knowledge. Fan of videogames and tecnologies. Like to analize
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
            <li>Responsable y Comprometido</li>
            <li>Comunicativo y Honesto</li>
            <li>Cooperativo, Amigable y Empático</li>
          </ul>
        </div>

        <div className={style.box}>
          <h3>Contacts</h3>
          <ul>
            <li>
              <span
                onClick={() =>
                  handleOpenInNewTab(
                    "https://www.linkedin.com/in/david-olivo-rodr%C3%ADguez-401412239/"
                  )
                }
              >
                LinkedIn
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  handleOpenInNewTab("https://github.com/Davidoar15")
                }
              >
                GitHub
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  handleOpenInNewTab(
                    "https://instagram.com/davidoar15?igshid=MmIzYWVlNDQ5Yg=="
                  )
                }
              >
                Instagram
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  handleOpenInNewTab(
                    "https://www.facebook.com/david.olivo.1069"
                  )
                }
              >
                Facebook
              </span>
            </li>
            <li>
              <span>Discord: Davidoar15#6491</span>
            </li>
          </ul>
        </div>

        <div className={style.box}>
          <img
            className={style.gifAbout}
            src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
            alt="gifcode"
          />
        </div>
      </div>
    </div>
  );
}
