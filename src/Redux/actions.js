import { ApiCall } from '../ApiCall/ApiCall'

import {
    MIN_TEMP,
    MAX_TEMP,
    REQUEST_TEMPS_PENDING,
    REQUEST_TEMPS_SUCESS,
    REQUEST_TEMPS_FAILED,
   } from './constants'
  
  const urls = [ 'https://fcc-weather-api.glitch.me/api/current?lat=45&lon=45',
  'https://fcc-weather-api.glitch.me/api/current?lat=45&lon=110',
  'https://fcc-weather-api.glitch.me/api/current?lat=50&lon=115' ];

  const promises = [ApiCall(urls[0]), ApiCall(urls[1]), ApiCall(urls[2])];
 
  export const checkTempMin = (number,text) => ({
    type: MIN_TEMP,
    temperature: number,
    payload: text
  })

  export const checkTempMax = (number,text) => (
  {
    type: MAX_TEMP,
    temperature: number,
    payload: text
  }
  )

  export const requestTemps = () => (dispatch) => {
    dispatch({ type: REQUEST_TEMPS_PENDING })
    Promise.all(promises)
      .then(data =>  dispatch({ type: REQUEST_TEMPS_SUCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_TEMPS_FAILED, payload: error }))
  }

  