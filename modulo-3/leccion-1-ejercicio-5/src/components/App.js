import '../styles/App.scss';

function App() {
  return (
    <div>
      <header id='header' className='header'>
        <div className='hamburguer' title='Ir a la home de adalab'>
          <a className='img' href='https://adalab.es/'></a>
        </div>
        <div className='box-title'>
          <h1 className='title'>Anonymous proxy</h1>
        </div>
        <section>
          <p className='subtitle'>In hac habitasse platea dictumst.</p>
        </section>
        <section className='button_img'>
          <div className='button'>
            <a title='Ir a 3 reasons to purchase' href='./index.html#section-2'>
              {/*<img
              className='img'
              title='Ir a 3 reasons to purchase'
              src='./assets/images/ico-scroll-down.jpg'
              alt='Flecha hacia bajo'
            />*/}
            </a>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
