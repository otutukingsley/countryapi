import React, {useState, Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Search from './components/countries/Search'
import SingleCountry from './components/countries/SingleCountry';
import Countries from './components/countries/Countries'
import axios from 'axios'
import './App.css'

 const App = () => {
   const [countries, setCountries] = useState([])
   const [loading, setLoading] = useState(false)
   const [filteredCountry, setFilter] = useState([])
   const [singleCountry, setSingleCountry] = useState([])



   const getCountries = async () => {
     setLoading(true)
     const response = await axios.get('https://restcountries.eu/rest/v2/all')

     setCountries(response.data)
     setFilter(response.data)
     setLoading(false)
   }


   const getSingleCountry = async(countryName) => {
     setLoading(true)

     const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)

     setSingleCountry(response.data)
     setLoading(false)
   }


   const filterCountries = (text) => {
    let searchedCountry = countries;
    
    searchedCountry = countries.filter((eachCountry) => eachCountry.name.toLowerCase().includes(text.toLowerCase()));

    setFilter(searchedCountry)
   }

   const filterDropdown = (regionText) => {
      let searchedRegion  = countries;

      searchedRegion = countries.filter((eachRegion) => (
        eachRegion.region.toLowerCase().includes(regionText.toLowerCase())
      ))
      setFilter(searchedRegion)
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
                   <Search filter={filterCountries} filterRegion={filterDropdown}/>
                   <Countries countries={countries} getCountries={getCountries} loading={loading} filteredCountry={filteredCountry}/>
                </Fragment>
              )
            } />
            <Route exact path='/name/:name' render={(props) => (
              <SingleCountry {...props} singleCountry={singleCountry} getSingleCountry={getSingleCountry}/>
            )}/>
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
