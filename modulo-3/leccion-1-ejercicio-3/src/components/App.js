import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>Adivina el número</h1>
      </header>
      <main className='main js-main'>
        <form className='form'>
          <label className='enterName' for='enterName'>
            Introduce aquí el número:
            <input
              className='input js-input'
              id='num'
              type='text'
              name='num'
              placeholder=' Ej: 58'
              required
            />
          </label>
          <button className='buttonNum js-button'>Prueba</button>
        </form>
        <div>
          <p className='paragraphTrack js-textTrack'>
            Pista: Escribe el número y dale a <span>prueba</span>
          </p>
          <p className='paragraphNum js-numberAttempts'>
            Número de intentos: 0
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
