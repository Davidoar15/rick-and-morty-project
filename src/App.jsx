import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
// import characters from './data.js';

function App() {

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  let EMAIL = "davidoar15@gmail.com";
  let PASSWORD = "Prueba";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  function logout() {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const location = useLocation();

  const onSearch = id => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  };

  /*const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character/");
      const charactersData = response.data.results;
      setCharacters(charactersData);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };
  
  useEffect(() => {
    fetchCharacters();
  }, []);

  const addRandomCharacter = () => {
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];

      const isCharacterAlreadyAdded = characters.some(
        (character) => character.id === randomCharacter.id
      );

      if (!isCharacterAlreadyAdded) {
        setCharacters((oldChars) => [...oldChars, randomCharacter]);
      }
    }
  };*/

  function onClose(id) {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter(character => character.id !== parsedId);
    setCharacters(filteredCharacters);
  }

  return (
    <div className='App'>
        {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}></Nav>}
        <Routes>
          <Route path='/' element={<Form login={login}/>}></Route>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='detail/:id' element={<Detail/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        {/*<Cards characters={characters} onClose={onClose}/>*/}
    </div>
 );
}

export default App
