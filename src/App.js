import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactoAComponents from './components/pure/contactoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* Componente propio Greeting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="ENDER"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ContactoAComponents></ContactoAComponents>
      </header>
    </div>
  );
}

export default App;
