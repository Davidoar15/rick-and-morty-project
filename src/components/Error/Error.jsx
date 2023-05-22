import React from 'react';
import style from './Error.module.css'

export default function Error() {
    return (
        <div className={style.divError}>
            <div className={style.divErrorText}>
                <h1 className={style.errorH1}>Error 404: Página no encontrada</h1>
                <p className={style.errorP}>Lo sentimos, la página que estás buscando no existe.</p>
            </div>
            <div className={style.errorGift}>
                <img src='https://media.tenor.com/NidJyk78iAkAAAAd/rick-and-morty-crying.gif' alt="Gift Error"></img>
            </div> 
        </div>
    )
}

{/*            <div className={style.errorGift}>
                <img src='https://media.tenor.com/NidJyk78iAkAAAAd/rick-and-morty-crying.gif'></img>
            </div> */}