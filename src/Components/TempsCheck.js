import React, { useEffect } from 'react'
import { useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

function TempsCheck() {

    const minTemp = useSelector(state => state.checkTempMin)
    const maxTemp = useSelector(state => state.checkTempMax)
    
    useEffect(() => {
    }, []);
     
    const navigation = useNavigation();

    return(
        <div className='App'> 
        <h1> <button className='botao' title="Next Screen" onClick={() => navigation.navigate('Home')}> Home </button></h1>
        <div className='card'>
        <p>Local de temperatura mais alta: {maxTemp.location}</p>
        <p>Temperatura: {maxTemp.temp}</p>
        <p></p>
        <p>Local de temperatura mais baixa: {minTemp.location}</p>
        <p>Temperatura: {minTemp.temp}</p>
        </div>
        </div>
    )
}

export default TempsCheck;