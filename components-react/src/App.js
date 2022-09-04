import logo from './logo.svg';
import './App.scss';
import ButtonPraimary from './UI/components/buttons/ButtonPrimary/buttonPraimary';
import ButtonSecondary from './UI/components/buttons/ButtonSecondary/buttonSecondary'

function App() {
  const arr = [1,5,3,6,6]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonPraimary value='Add sth' tablica={arr}></ButtonPraimary>
        <ButtonSecondary value='Add sth'></ButtonSecondary>

      </header>
    </div>
  );
}

export default App;
