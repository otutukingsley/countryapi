import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = (prop) => {

    const {name, flag, capital, population, region} = prop.country
    return (
        <div className="country-card">
            <Link to={`/name/${name}`} className="country">
                <div className="img-container">
                    <img src={flag} alt="FLAG" />
                </div>
                <div className="country-details">
                    <h3 className="country-name">{name}</h3>
                    <p className="population">
                        <strong>Population:</strong> <span>{population}</span>
                    </p>
                    <p className="region">
                    <strong>Region:</strong> <span>{region}</span>
                    </p>
                    <p className="capital">
                    <strong>Capital:</strong> <span>{capital}</span>
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default CountryItem