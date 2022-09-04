import logo from './logo.svg';
import './App.scss';
// import ButtonPraimary from './UI/components/buttons/ButtonPrimary/buttonPraimary';
// import ButtonSecondary from './UI/components/buttons/ButtonSecondary/buttonSecondary'
// import ButtonLink from './UI/components/buttons/ButtonLink/buttonLink';
import { ButtonPraimary, ButtonSecondary, ButtonLink }  from './UI/components/buttons/index'
import Paragraf from './UI/components/typograf/paragraf/paragraf';
import Header from './UI/components/typograf/headers/header';
import InputText from './UI/components/inputsGrup/inputText/inputText';
import ListaUl from './UI/components/lista/ListaUl/listaUL'

function App() {
  const arr = [1,5,3,6,6]
  const auta = ["Adudi", "Opel", "Fiat"]
  const users = ["Ania", "Dymitr", "Andrzej", "Marcin", "Michał"]
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
        <ButtonPraimary value='Add sth' tablica={arr} disabled={false}></ButtonPraimary>
        <ButtonSecondary value='Add sth'></ButtonSecondary>
        <ButtonLink value="Dokumntacja HTML" link='https://www.w3schools.com/tags/tag_doctype.asp'></ButtonLink>
        <Paragraf text="his example countsom"></Paragraf>
        <Header level={1} text="Jestem h1"/>
        <Header  text="Jestem h1"/>
       <h2 className='tilte2'>jakiś tekst</h2>
       <InputText idandFor='5-xd' placeholder="jakiś randomowy napis" text="Opis inputa"></InputText>
      </header>

      <ListaUl items={auta}></ListaUl>
      <ListaUl items={users}></ListaUl>
      <ListaUl ></ListaUl>
    </div>
  );
}

export default App;
