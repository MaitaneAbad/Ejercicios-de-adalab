import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log(ev.key);
  };
  const handleBotton = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form>
        <input type='text' name='email' id='email' onKeyUp={handleInput} />
        <button onClick={handleBotton}>Click me!</button>
      </form>
    </div>
  );
}

export default App;
