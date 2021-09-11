import React from 'react'
import spinner from './spinner.gif'

 const Spinner = () => {
    return (
        <div className="spinner-style">
            <img src={spinner} alt="Loading..." className="spinner-gif"/>
        </div>
    )
}


export default Spinner;