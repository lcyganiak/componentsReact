import logo from './logo.svg';

import './App.scss';
// import ButtonPraimary from './UI/components/buttons/ButtonPrimary/buttonPraimary';
// import ButtonSecondary from './UI/components/buttons/ButtonSecondary/buttonSecondary'
// import ButtonLink from './UI/components/buttons/ButtonLink/buttonLink';
// import { ButtonPraimary, ButtonSecondary, ButtonLink }  from './UI/components/buttons/index'
// import Paragraf from './UI/components/typograf/paragraf/paragraf';
// import Header from './UI/components/typograf/headers/header';
// import InputText from './UI/components/inputsGrup/inputText/inputText';
// import ListaUl from './UI/components/lista/ListaUl/listaUL'
// import Select from './UI/components/select/Select';
import InputRadio from './UI/components/inputsGrup/inputRadio/InputRadio';
import InputRadioOrCheckbox from './UI/components/inputsGrup/InputRadioOrCheckbox/InputRadioOrCheckbox';
import Tabel from './UI/components/table/Tabel'

function App() {
//   const arr = [1,5,3,6,7, 4, 2]
//   const auta = ["Adudi", "Opel", "Fiat"]
//   const users = ["Ania", "Dymitr", "Andrzej", "Marcin", "Michał"]
//   const onlyEven = arr.filter(item => item % 2 === 0);
//   const usersOnlyEven = users.filter(item => item.length % 2 === 0)

//   const carsOptions = [
//      {
//         name: "Audi",
//         id: 1,
//         value: 250000
//     }, 
//     {
//       name: "BMW",
//       id: 2,
//       value: 200000
//   }, 
//   ]

//   const sdaOptions = [
//     {
//       name: "Frontend",
//       id: 1,
//       value: 7200
//   }, 
//   {
//     name: "Beckend",
//     id: 2,
//     value: 6000
// }, 
// {
//   name: "testing",
//   id: 3,
//   value: 5000
// }, 
//   ]
const legendText = 'Lista sosów do wybrania: '
const nameRadioInput = 'sosy'
const listRadio = [
  {
    value: "pomidorowy",
    checked: false,
    labelText: "Pomidorowy"
},
{
  value: "czosnkowy",
  checked: false,
  labelText: "Czosnkowy"
},
{
  value: "duński",
  checked: false,
  labelText: "Duński"
}
]
const tHead = ["Imie", "Nazwisko", "Podstawa pensji", "prowizje", "Kwoata Łącznie"]

const tData = [
  {
      name: "Jan",
      nazwisko: "Kowalski",
      podstawa: 2500,
      premia: 1000,
      kwotaLaczna: 3500,
      wiek: 40,
      stanowisko: 'Handlowiec',
      staz: 5,
      urlop: 15,
      przelozony: "Nowak, Adam",
      email: "j.kowalski@sthspzpoo.pl",
      telefon: "4568294269"
  },
  {
    name: "Adam",
    nazwisko: "Nowak",
    podstawa: 4500,
    premia: 2000,
    kwotaLaczna: 6500,
    wiek: 20,
    stanowisko: 'kierownik',
    staz: 0,
    urlop: 25,
    przelozony: "Krzysztof Jarzyna",
    email: "a.nowak@sthspzpoo.pl",
    telefon: "856859658"
}
]

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
        {/* <ButtonPraimary value='Add sth' tablica={onlyEven} ></ButtonPraimary>
        <ButtonPraimary value='Add sth' tablica={usersOnlyEven}></ButtonPraimary>
        <ButtonSecondary value='Add sth'></ButtonSecondary>
        <ButtonLink value="Dokumntacja HTML" link='https://www.w3schools.com/tags/tag_doctype.asp'></ButtonLink>
        <Paragraf text="his example countsom"></Paragraf>
        <Header level={1} text="Jestem h1"/>
        <Header  text="Jestem h1"/>
       <h2 className='tilte2'>jakiś tekst</h2>
       <InputText idandFor='5-xd' placeholder="jakiś randomowy napis" text="Opis inputa" required={true}></InputText> */}
      </header>

      {/* <ListaUl items={auta}></ListaUl>
      <ListaUl items={users}></ListaUl>
      <ListaUl ></ListaUl>


      <Select labelText="Lista samochodów do sprzedaży" options={carsOptions}></Select>


      <Select labelText="Lista Kursów SDA" options={sdaOptions}></Select> */}
      <InputRadio legendText={legendText} nameRadioInput={nameRadioInput} listRadio={listRadio}></InputRadio>
      <InputRadioOrCheckbox legendText={legendText}  listRadio={listRadio}></InputRadioOrCheckbox>
      <InputRadioOrCheckbox legendText={legendText}  listRadio={listRadio} checkBoxOrRadio="radio"></InputRadioOrCheckbox>

      <Tabel tHead={tHead} tData={tData}></Tabel>

    </div>
  );
}

export default App;
