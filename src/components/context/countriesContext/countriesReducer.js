import {
  GET_COUNTRIES,
  SINGLE_COUNTRIES,
  FILTER_COUNTRIES,
  CLEAR_FILTER,
  FILTER_DROPDOWN,
  SET_MODE,
} from '../types'

const countriesReducer = (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        country: action.payload,
        loading: false,
      }

    case SINGLE_COUNTRIES:
      return {
        ...state,
        singleCountry: action.payload,
        loading: false,
      }

    case SET_MODE:
      return {
        ...state,
        theme: action.payload,
      }

    case FILTER_COUNTRIES:
      return {
        ...state,
        filtered: state.country.filter((eachCountry) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return eachCountry.name.match(regex)
        }),
      }

    case FILTER_DROPDOWN:
      return {
        ...state,
        filtered: state.country.filter((eachCountry) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return eachCountry.region.match(regex)
        }),
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }

    default:
      return state
  }
}

export default countriesReducer
