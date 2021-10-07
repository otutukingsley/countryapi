import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Search from './components/countries/Search'
import SingleCountry from './components/countries/SingleCountry'
import Countries from './components/countries/Countries'
import CountriesState from './components/context/countriesContext/CountriesState'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

const App = () => {
  const [theme, setTheme] = useState('light')

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme ? setTheme(localTheme) : setMode('light')
  }, [])

  const themeToggler = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  return (
    <CountriesState>
      <Router>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyles />
          <div className="App">
            <Navbar toggler={themeToggler} theme={theme} />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Fragment>
                      <Search />
                      <Countries />
                    </Fragment>
                  )}
                />
                <Route
                  exact
                  path="/name/:name"
                  render={(props) => <SingleCountry {...props} />}
                />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </CountriesState>
  )
}
export default App
