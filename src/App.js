import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Card from "./components/card/card"
import stay from "./stays.json"




function App() {

  const [search, setSearch] = useState('');
  const [number, setNumber] = useState(0);
  const [num, setNum] = useState(0);
  const [result, setResult] = useState([]);

  const lugares = stay

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
  }

// al hacer click en sear redericciona la busqueda automaticamente y muestra en pantalla.
  let results = []
  // let beds=[]
  if (!results) {
    results = lugares
  } else {
    results = lugares.filter(item =>
      item.city.toLocaleLowerCase().includes(search)
    );
  }


  const sumarAdult = () => {
    const numero = number + 1;
    if (number >= 10) {
      return number
    }

    setNumber(numero)
  }



  const restarAdult = () => {
    const numb = number - 1;

    if (number <= 0) {
      return number
    }
    setNumber(numb)
  }

  const sumarChild = () => {
    const newNumber = num + 1;
    if (num >= 10) {
      return num
    }

    setNum(newNumber)
  }

  const restarChild = () => {
    const newNumb = num - 1;

    if (num <= 0) {
      return number
    }
    setNum(newNumb)
  }

// resultado de la sumas de childs and adult
  const resultado = () => {
    let re = number + num;

    if (re >= 11) {
      return re
    }
    if (re < 0) {
      return re
    }

    setResult(re)
  }


  useEffect(() => {
    resultado()
  })



  return (
    <Fragment>
      <Nav handleSearch={handleSearch} search={search} sumarAdult={sumarAdult} sumarChild={sumarChild} restarAdult={restarAdult} restarChild={restarChild} num={num} number={number} result={result} />
      <div className='container flex-grid '>
        {
          results.map((lugar) => {
            return <Card city={lugar.city} country={lugar.country} superHost={lugar.superHost} title={lugar.title} rating={lugar.rating} guests={lugar.maxGuests} type={lugar.type} beds={lugar.beds} img={lugar.photo} />
          })

        }
      </div>


    </Fragment>
  );
}

export default App;
