import React, {useState, Fragment, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Search from './components/countries/Search'
import SingleCountry from './components/countries/SingleCountry';
import Countries from './components/countries/Countries'
import axios from 'axios'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles  } from './themes';

 const App = () => {
   const [countries, setCountries] = useState([])
   const [loading, setLoading] = useState(false)
   const [filteredCountry, setFilter] = useState([])
   const [singleCountry, setSingleCountry] = useState([])
   const [theme, setTheme] = useState('dark')


   const setMode = mode => {
     window.localStorage.setItem('theme', mode)
     setTheme(mode)
   }

   useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setTheme(localTheme) : setMode('dark');
   },[])


  const themeToggler = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  }

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
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
       <GlobalStyles/>
        <div className="App">
          <Navbar toggler={themeToggler} theme={theme}/>
         <div className="container">
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
      </ThemeProvider>
    </Router>
  )
}
export default App
