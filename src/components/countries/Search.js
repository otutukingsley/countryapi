import React, { useState } from 'react'
import Dropdown from './Dropdown'

const Search = (props) => {

const [text, setText] = useState('')

const onChange = (e) => {
  setText(e.target.value)
  props.filter(text.toLowerCase())
}

    return (
        <div style={SearchStyle}>
            <form className="form">
                <input type="text" autoComplete="off" name="text" placeholder="Search Country..." className="form-control" onChange={onChange}/>
            </form>
            <Dropdown />
        </div>
    )
}

const SearchStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: '15px',
    marginBottom: '15px'
}

export default Search