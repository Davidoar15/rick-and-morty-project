import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"


export default function Nav(props){
    return (
        <div className={style.navContainer}>
            <NavLink to={'/about'}>
                <button>About</button>
            </NavLink>
            <NavLink to={'/home'}>
                <button>Home</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <button className={style.logoutButton} onClick={props.logout}>Log Out</button>
        </div>
    )
}