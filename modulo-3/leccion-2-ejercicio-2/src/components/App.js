import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  let counter = 0;
  const [number, setNumber] = useState(0);
  function increment() {
    counter = number + 1;
    return setNumber(counter);
  }
  function decrement() {
    counter = number - 1;
    return setNumber(counter);
  }
  function reset() {
    setNumber(0);
  }

  return (
    <div>
      <p>Contador: {number}</p>
      <button onClick={increment}>Suma!</button>
      <button onClick={decrement}>Resta!</button>
      <button onClick={reset}>Reset!</button>
    </div>
  );
};

export default App;
