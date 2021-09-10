import React, {useEffect} from 'react'
import CountryItem from './CountryItem'
import Spinner from '../layouts/Spinner'

const Countries = (props) => {

const {getCountries, loading, filteredCountry} = props

    useEffect(() => {
        getCountries()
        // eslint-disable-next-line
        }, [])

        if(loading) {
            return <Spinner/>
        }else{
            return (
                <div className="grid-4 mt-4">
                    {filteredCountry.map(eachCountry => (
                       <CountryItem key={eachCountry.alpha3Code} country={eachCountry}/> 
                    ))}
                </div>
            )
        }
}
export default Countries