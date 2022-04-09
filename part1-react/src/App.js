import './App.css';
import Mensaje from './Mensaje';

const Descripcion = () => {
  return <p>Este es un mensaje desde un componente</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="yellow" msg="Hola"/>
      <Mensaje color="red" msg="esto es"/>
      <Mensaje color="green" msg="un prop"/>
      <Descripcion />
    </div>
  );
}

export default App;
