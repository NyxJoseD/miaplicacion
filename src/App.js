import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactoAComponents from './components/pure/contactoA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* Componente propio Greeting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="ENDER"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactoAComponents></ContactoAComponents> */}
        {/* Ejemplo de uso de HOOKS */}
        <Ejemplo1></Ejemplo1>
        <miComponenteConContexto></miComponenteConContexto>
        <Ejemplo4 nombre="Martin"></Ejemplo4>
        {/* Todo lo que hay aqui adentro es tratado como props.children */}
        <h3>
          Contenido del props.children
        </h3>
      </header>
    </div>
  );
}

export default App;
