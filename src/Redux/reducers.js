import {
    MIN_TEMP,
    MAX_TEMP,
    REQUEST_TEMPS_PENDING,
    REQUEST_TEMPS_SUCESS,
    REQUEST_TEMPS_FAILED,
   } from './constants';
  
const initialMin = {
      temp: 200,
      location: ''
    }

const initialMax = {
      temp: -200,
      location: ''
    }


export const checkTempMin = (state=initialMin, action={}) => {
  switch(action.type) {
    case MIN_TEMP:
      return Object.assign({}, state, { temp: action.temperature, location: action.payload })
    default: 
    return state
  }
}

export const checkTempMax = (state=initialMax, action={}) => {
  switch(action.type) {
      case MAX_TEMP: 
      return Object.assign({}, state, { temp: action.temperature, location: action.payload })
      default: 
      return state
    }
  }


const initialStateTemps = {
    main: [],
    isPending: true
  }
  
export const requestTemps = (state=initialStateTemps, action={}) => {
    switch (action.type) {
      case REQUEST_TEMPS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_TEMPS_SUCESS:
        return Object.assign({}, state, {main: action.payload, isPending: false})
      case REQUEST_TEMPS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }