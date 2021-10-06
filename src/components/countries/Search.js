import React, { useContext, useRef } from 'react'
import Dropdown from './Dropdown'
import countriesContext from '../context/countriesContext/countriesContext'

const Search = () => {
  const context = useContext(countriesContext)
  const { filterCountries, clearFilter } = context
  const filterText = useRef('')

  const onChange = (e) => {
      console.log(filterText.current.value)
    if (filterText.current.value !== '') {
      filterCountries(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <div className="search-styles">
      <form className="form">
        <input
          ref={filterText}
          type="text"
          autoComplete="off"
          placeholder="Search Country..."
          className="form-control"
          onChange={onChange}
        />
      </form>
      <Dropdown/>
    </div>
  )
}

export default Search
