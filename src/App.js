import React, {useState, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Search from './components/countries/Search'
import Countries from './components/countries/Countries'
import axios from 'axios'
import './App.css'

 const App = () => {
   const [countries, setCountries] = useState([])
   const [loading, setLoading] = useState(false)


   const getCountries = async () => {
     setLoading(true)
     const response = await axios.get('https://restcountries.eu/rest/v2/all')

     setCountries(response.data)
     setLoading(false)
   }

   const filterCountries = (text) => {
    let searchedCountry = countries;
    
    searchedCountry = countries.filter((eachCountry) => eachCountry.name.toLowerCase().includes(text.toLowerCase()));
    setCountries(searchedCountry)
   }

  return (
    <Router>
      <div className="App">
       <Navbar />
        <div style={appStyle} className="container">
          <Switch>
            <Route exact path='/' render={
              (props) => (
                <Fragment>
                   <Search filter={filterCountries}/>
                   <Countries countries={countries} getCountries={getCountries} loading={loading}/>
                </Fragment>
              )
            } />
          </Switch>
        </div>
      </div>
    </Router>
  )
}


const appStyle ={
  background: "#F5F5F5", 
  height: 'auto'
}

export default App
