import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
    <LoadCountries></LoadCountries>
    </div>
  );
}


function LoadCountries(){
const [Countries,setCountries] = useState([]);
useEffect(()=>{
  fetch ('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data =>  setCountries(data))
},[])
  return(
    <div>
      <h1>Visiting every Countries</h1>
      <h1>availanle counries {Countries.length}</h1>
     {
      Countries.map(country => <Country Name = {country.name.common} Populations= {country.population}></Country>)
     }
    </div>
  )
}

function Country(Props){
  return(
    <div className='Country'>
      <h2>Name : {Props.Name}</h2>
      <h2>Population : {Props.Population}</h2>
    </div>
  )
}

export default App;
