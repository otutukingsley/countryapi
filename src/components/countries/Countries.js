import React, {useEffect} from 'react'
import CountryItem from './CountryItem'
import Spinner from '../layouts/Spinner'

const Countries = (props) => {

const {countries, getCountries, loading} = props

    useEffect(() => {
        getCountries()
        // eslint-disable-next-line
        }, [])

        if(loading) {
            return <Spinner/>
        }else{
            return (
                <div className="grid-4">
                    {countries.map(eachCountry => (
                       <CountryItem key={eachCountry.alpha3Code} country={eachCountry}/> 
                    ))}
                </div>
            )
        }
}
export default Countries