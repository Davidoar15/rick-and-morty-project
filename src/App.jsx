import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Form from "../Client/components/Form/Form";
import Cards from "../Client/components/Cards/Cards";
import Nav from "../Client/components/Nav/Nav";
import About from "../Client/components/About/About";
import Detail from "../Client/components/Detail/Detail";
import Error from "../Client/components/Error/Error";
import Favorites from "../Client/components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // let EMAIL = 'davidoar15@gmail.com';
  // let PASSWORD = 'Prueba';

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { access } = (
        await axios(URL + `?email=${email}&password=${password}`)
      ).data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const characterId = characters.filter((character) => character.id === id);
      if (characterId.length) return alert("The character already Exist!");
      if (id < 1 || id > 826)
        return alert("Only exists 826 characters to search");
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  function onClose(id) {
    // const parsedId = parseInt(id);
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  }

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }

    const validRoutes = ["/home", "/about", "/detail", "/favorites"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logout}></Nav>
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:id/*" element={<Detail />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
