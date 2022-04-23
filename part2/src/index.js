import ReactDOM from 'react-dom';
import {useState} from 'react';
import './index.css'

const WarningNotUsed = () => <h1>Todavía no se ha usado el contador</h1>
const ListOfClicks = ({clicks}) => {
    
    return <p>{clicks.join(", ")}</p>;
}

const INITIAL_COUNTER_STATE = {
    left :0,
    right: 0,
    mensaje: 'Mensaje desde estado incial'
}
    

const App = () => {
    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCounterStates ={
            ...counters, //Spread operator para tomar todos los campos del objeto
            left: counters.left + 1,
        }
        setCounters(newCounterStates);
        setClicks(prevClicks => [...prevClicks, 'L']) //Spread operator para no mutar el array
    };

    
    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        });
        setClicks(prevClicks => [...prevClicks, 'R'])
    }

    const handleReset = () => {
        setCounters(INITIAL_COUNTER_STATE);
        setClicks([])
    }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
      <p><button onClick={handleReset}>Reset</button></p>
      <p>Clicks totales = {clicks.length}</p>
      {clicks.length === 0 ? 
        (<WarningNotUsed/>):
         (<ListOfClicks clicks={clicks}/>) //Renderizado condicional
        }
    </div>
    
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
