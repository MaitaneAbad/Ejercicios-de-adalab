import '../styles/App.scss';
import img from '../images/cardadas.png';

function App() {
  return (
    <div>
      <img src={img} title='cardadas' alt='Logo de Adalab' />
      <img
        src='https://beta.adalab.es/resources/images/adalab-logo-128x128.png'
        title='logo cogido de inet'
        alt='Logo de Adalab'
      />
    </div>
  );
}

export default App;
