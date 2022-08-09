import React, { useEffect } from 'react'
import './styles.css';
import { useSelector } from 'react-redux';
import TempsCheck from '../Components/TempsCheck'
import { useNavigation} from '@react-navigation/native';

function TempsCalled() {

const maxTemp = useSelector(state => state.checkTempMax)
const navigation = useNavigation();

useEffect(() => {
   
}, []);

 return(
   <div>
   { maxTemp.temp !== -200 ?
    <TempsCheck />
    : (
    <div> <h1> <button className='botao' title="Next Screen" onClick={() => navigation.navigate('Home')}> Home </button></h1>
    Necessário input para exibição
    </div>)
   }
  </div> 
  )
    
}

export default TempsCalled;