// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [InputValue, setInputValue] = useState('');

  // useEffect

  useEffect(() => {
    callToApi(InputValue).then((response) => {
      setCharacters(response);
    });
  }, [InputValue]);

  // Eventos

  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setInputValue(ev.target.value);
  };

  // Renderizado

  const renderCharacters = () => {
    // Pintamos el listado de personajes respondido por el API
    return characters.map((character, index) => {
      // El API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return <li key={index}>Nombre: {character.name}</li>;
    });
  };

  return (
    <div>
      <h1>Llamar al API de series:</h1>

      <form>
        <label htmlFor='name'>Busca por tu serie favorita:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={InputValue}
          onChange={handleSearchName}
        />
      </form>

      <h2>Título: {InputValue}</h2>
      <ul>{renderCharacters()}</ul>
    </div>
  );
};

export default App;
