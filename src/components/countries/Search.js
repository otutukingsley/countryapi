import React, { useState } from 'react'
import Dropdown from './Dropdown'

const Search = ({filter, filterRegion}) => {

const [text, setText] = useState('')

const onChange = (e) => {
  setText(e.target.value)
  filter(text.toLowerCase())
}

    return (
        <div className="search-styles">
            <form className="form">
                <input type="text" autoComplete="off" name="text" placeholder="Search Country..." className="form-control" onChange={onChange}/>
            </form>
            <Dropdown dropFilter={filterRegion}/>
        </div>
    )
}

export default Search