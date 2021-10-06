import React, { useEffect, useContext } from 'react'
import countriesContext from '../context/countriesContext/countriesContext'
import { Link } from 'react-router-dom'

const SingleCountry = ({ match }) => {
  const context = useContext(countriesContext)

  const { singleCountry, getSingleCountry } = context

  useEffect(() => {
    getSingleCountry(match.params.name)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {singleCountry.map((singleCon) => (
        <div key={singleCon.alpha3Code} className="details">
          <div className="button">
            <Link to="/" className="btn btn-light btn-light-shadow mb-4">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back
            </Link>
          </div>
          <div className="details-section">
            <div className="details-img-container">
              <img
                src={singleCon.flag}
                alt="FLAG"
                style={{ height: '450px' }}
              />
            </div>
            <div className="country-details-container">
              <h2>{singleCon.name}</h2>
              <div className="country-details-details">
                <div className="native-names">
                  <p>
                    <strong>Native Name:</strong> <span>{singleCon.nativeName}</span>
                  </p>
                  <p>
                    <strong> Population:</strong>{' '}
                    <span>{singleCon.population}</span>
                  </p>
                  <p>
                    <strong>Region:</strong> <span>{singleCon.region}</span>
                  </p>
                  <p>
                    <strong>Sub Region:</strong>{' '}
                    <span>{singleCon.subregion}</span>
                  </p>
                  <p>
                    <strong>Capital:</strong> <span>{singleCon.capital}</span>
                  </p>
                </div>
                <div className="top-level-domain">
                  <p>
                    <strong>Top Level Domain:</strong>{' '}
                    <span>{singleCon.topLevelDomain}</span>
                  </p>
                  <p>
                    <strong>Currencies:</strong>{' '}
                    <span>
                      {singleCon.currencies.map((eachCurrency) => (
                        <span>{eachCurrency.name}</span>
                      ))}
                    </span>
                  </p>
                  <p>
                    <strong>Languages:</strong>{' '}
                    <span>
                      {singleCon.languages.map((eachLang) => (
                        <span>{eachLang.name}, </span>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-countries">
                <p>
                  <strong>Border Countries:</strong>
                  <span>
                    {singleCon.borders.map((border) => (
                      <span className="btn btn-light btn-light-shadow btn-margin">
                        {border}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleCountry
