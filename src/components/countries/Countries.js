import React, { useEffect, useContext } from 'react'
import CountryItem from './CountryItem'
import Spinner from '../layouts/Spinner'
import countriesContext from '../context/countriesContext/countriesContext'

const Countries = () => {
  const context = useContext(countriesContext)

  const { country, getCountries, loading, filtered } = context

  useEffect(() => {
    getCountries()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="grid-4 mt-4">
        {filtered !== null
          ? filtered.map((eachCountry) => (
              <CountryItem key={eachCountry.alpha3Code} country={eachCountry} />
            ))
          : country.map((eachCountry) => (
              <CountryItem key={eachCountry.alpha3Code} country={eachCountry} />
            ))}
      </div>
    )
  }
}
export default Countries
