import React, { useState, useContext, useRef, useEffect } from 'react'
import countriesContext from '../context/countriesContext/countriesContext'

const Dropdown = () => {
  const context = useContext(countriesContext)
  const { filterDropdown, clearFilter } = context
  const [menu, setMenu] = useState(false)
  const outside = useRef('')

  const handleClickOutside = (e) => {
    if (outside.current && !outside.current.contains(e.target)) {
      setMenu(false)
    }else{
      setMenu(true)
    }
  }

  const innerText = (e) => {
    if (e.target.innerText === 'All') {
      clearFilter()
    } else {
      filterDropdown(e.target.innerText)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
    document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="filter-position" ref={outside}>
      <button
        className="btn btn-light btn-light-shadow"
        style={{ width: '100%' }}
        ref={outside}
      >
        Filter by region <i className="fas fa-chevron-down ml-3"></i>
      </button>
      {menu && (
        <ul className="menu btn-light-shadow">
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            All
          </li>
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            Africa
          </li>
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            America
          </li>
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            Asia
          </li>
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            Europe
          </li>
          <li id="region" style={{ cursor: 'pointer' }} onClick={innerText}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
