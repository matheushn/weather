import React, { useEffect , useState } from 'react'
import { useNavigation} from '@react-navigation/native';
import './styles.css';
import { useSelector , useDispatch } from 'react-redux';
import { requestTemps, checkTempMin, checkTempMax } from '../Redux/actions'
import InfoCard from '../Components/InfoCard';

function Temps() {
    
    const [hasInput, updateInput] = useState(false);
    const [index, updateIndex] = useState(null);
  
    const main = useSelector(state => state.requestTemps.main)
    const checkMin = useSelector(state => state.checkTempMin)
    const checkMax = useSelector(state => state.checkTempMax)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(requestTemps());
    }, [dispatch]);
    
    
    const compareTemps = (index) => {
      if ( main[index].data && main[index].data.main.temp_min < checkMin.temp)
      {
        dispatch(checkTempMin(main[index].data.main.temp_min, main[index].data.name))
      }
      if (main[index].data && main[index].data.main.temp_max > checkMax.temp){
        dispatch(checkTempMax(main[index].data.main.temp_max, main[index].data.name))
      }
    }

      const updateInfo = (index) => {
        updateInput(true);
        updateIndex(index);
        compareTemps(index);
    }

    
    console.log(main)
    const navigation = useNavigation();
    return(

        <div className='App'> 
        <h1> <button className='botao' title="Next Screen" onClick={() => navigation.navigate('Details')}> Mostrar Min/Max </button></h1>
        <h2>
           <button className='botao' onClick={() => updateInfo(0)}> Cidade 1</button>
           <button className='botao' onClick={() => updateInfo(1)}> Cidade 2</button>
           <button className='botao' onClick={() => updateInfo(2)}> Cidade 3</button>
        </h2>
      { 
        hasInput ?
        <InfoCard index={ index } main={ main } />
        : ( <div className='card'> Escolha uma cidade </div>)
      }

      </div>
    )
    
}

export default Temps
