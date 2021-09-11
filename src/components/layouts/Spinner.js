import React from 'react'
import spinner from './spinner.gif'

 const Spinner = () => {
    return (
        <div style={spinnerStyle}>
            <img src={spinner} alt="Loading..." />
        </div>
    )
}

const spinnerStyle = {
    width: '200px',
    margin: '2rem auto',
    display: 'block',
    backgroundColor: 'inherit'
}

export default Spinner;