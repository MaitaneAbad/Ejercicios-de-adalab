import '../styles/App.css';

function App() {
  return (
    <div className='body'>
      <header className='header'>
        <h1>Adivina el número</h1>
      </header>
      <form>
        <label className='enterName'>
          Introduce aquí el número:
          <input
            className='input'
            id='num'
            type='text'
            name='num'
            placeholder=' Ej: 58'
            required
          />
        </label>
        <button className='buttonNum'>Prueba</button>
      </form>
      <div>
        <p className='paragraphTrack'>
          Pista: Escribe el número y dale a <span>prueba</span>
        </p>
        <p className='paragraphNum'>Número de intentos: 0</p>
      </div>
    </div>
  );
}

export default App;
