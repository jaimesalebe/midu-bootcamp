import ReactDOM from 'react-dom';
import {useState} from 'react';

const rootElement = document.getElementById('root');

const Counter = ({number}) =>  <h2>{number}</h2>;

const App = (props) => {
  const [contador, updateContador] = useState(0);

  const handleClick = (isTrue) => isTrue === true ? 
  updateContador(contador + 1) : updateContador(contador - 1);

  const handleClickReset = () =>{
    updateContador(0);
  }

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es par': 'Es impar';

  return (
    <div>
      <h1>El valor del contador es:</h1>
      <Counter number={contador}/>
      <p>{mensajePar}</p>
      <button onClick={() => handleClick(true)} //Solo se pasa el nombre de la función.  Sino se crea un loop infinito al pasar la funcion con parentesis
      >Imcrementar </button>
      <button onClick={() => handleClick(false)}>Decrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}

ReactDOM.render(<App />, rootElement)