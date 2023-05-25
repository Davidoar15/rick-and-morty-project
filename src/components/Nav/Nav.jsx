import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"


export default function Nav(props){
    return (
        <div className={style.navContainer}>
            <NavLink to={'/about'} className={style.navLink}>
                <button className={style.navLinkBtn}>About</button>
            </NavLink>
            <NavLink to={'/home'} className={style.navLink}>
                <button className={style.navLinkBtn}>Home</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <NavLink to={'/favorites'} className={style.navLink}>
                <button className={style.btnFavorites}>Favorites</button>
            </NavLink>
            <button className={style.logoutButton} onClick={props.logout}>Log Out</button>
        </div>
    )
}