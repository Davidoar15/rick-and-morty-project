import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  let EMAIL = 'davidoar15@gmail.com';
  let PASSWORD = 'Prueba';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  function logout() {
    setAccess(false);
    navigate('/');
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (id) => {
    const characterId = characters.filter(character => character.id === Number(id));

    if(characterId.length) return alert("The character already Exist!")
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  function onClose(id) {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter((character) => character.id !== parsedId);
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      return; 
    }

    const validRoutes = ['/home', '/about', '/detail', '/favorites']; 
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    if (!isValidRoute) {
      navigate('/error'); 
    }
  }, [location.pathname, navigate]);

  return (
    <div className="App">

      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}></Nav>}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:id/*" element={<Detail />} />
        <Route path="/error" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
