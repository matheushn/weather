import React from 'react';
import '../Containers/styles.css'

const InfoCard = ({ main, index }) => {
  
  return (
    <div className='card'>
        <p>Local: {main[index].data.name}</p>
        <p>Temperatura Atual: {main[index].data.main.temp}</p>
        <p>Temperatura Máxima: {main[index].data.main.temp_max}</p>
        <p>Temperatura Mínima: {main[index].data.main.temp_min} </p>
        <p><img src={main[index].data.weather[0].icon} alt='ícone'/></p>
        </div>
  )
}
export default InfoCard;