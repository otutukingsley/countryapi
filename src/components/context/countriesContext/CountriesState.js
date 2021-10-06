import React, { useReducer } from 'react'
import axios from 'axios'
import countriesContext from './countriesContext'
import countriesReducer from './countriesReducer'
import {
  GET_COUNTRIES,
  SINGLE_COUNTRIES,
  FILTER_COUNTRIES,
  CLEAR_FILTER,
  FILTER_DROPDOWN,
  SET_MODE,
} from '../types'

const CountriesState = ({ children }) => {
  const initialState = {
    country: null,
    filtered: null,
    loading: true,
    singleCountry: [],
    theme: 'light',
  }

  const [state, dispatch] = useReducer(countriesReducer, initialState)

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.com/v2/all')

    dispatch({
      type: GET_COUNTRIES,
      payload: response.data,
    })
  }

  const getSingleCountry = async (countryname) => {
    const response = await axios.get(`https://restcountries.com/v2/name/${countryname}
      `)

    console.log(response.data)
    dispatch({
      type: SINGLE_COUNTRIES,
      payload: response.data,
    })
  }

  const filterCountries = (text) => {
    dispatch({
      type: FILTER_COUNTRIES,
      payload: text,
    })
  }

  const filterDropdown = (text) => {
    dispatch({
      type: FILTER_DROPDOWN,
      payload: text,
    })
  }

  const clearFilter = (text) => {
    dispatch({
      type: CLEAR_FILTER,
      payload: text,
    })
  }

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)

    dispatch({
      type: SET_MODE,
      payload: mode,
    })
  }

  return (
    <countriesContext.Provider
      value={{
        country: state.country,
        filtered: state.filtered,
        loading: state.loading,
        singleCountry: state.singleCountry,
        theme: state.theme,
        getCountries,
        getSingleCountry,
        filterCountries,
        filterDropdown,
        clearFilter,
        setMode,
      }}
    >
      {children}
    </countriesContext.Provider>
  )
}

export default CountriesState
