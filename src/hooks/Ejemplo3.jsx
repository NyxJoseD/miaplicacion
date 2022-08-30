/**
 * Ejemplo Hooks
 */
 import React, {useState, useContext} from "react";


 /**
      * @return Componente 1
      * Dispone de un contexto que va a  tener un valor, que recibe desde el padre
      */
     // Inicializamos un estado vacio que va a rellenarse con los datos del contexto padre
  const miContexto = React.createContext(null)
     
 const Componente1 = () => {
     
     const state = useContext(miContexto);
     
     return (
         <div>
             <h1>El Token es: {state.token}</h1>
             {/* Pintamos el componente 2 */}
             <Componente2></Componente2>
         </div>
     );
 }
 
 
 const Componente2 = () => {
     
     return (
         <div>
             <h2>La sesión es: {state.sesion}</h2>
         </div>
         
     );
 }
 
 
 
 export default function miComponenteConContexto() {
 
     const estadoInicial = {
         token: '1234567',
         sesion: 1
     }
     // Creamos el estado de este componente 
     const [sesionData, setsesionData] = useState(estadoInicial);
 
     function actualizarSesion(){
         sesionData({
             token:'JWT123456789',
             sesion:sesionData.sesion+ 1
         });
     }
   return (
     <miContexto.Provider value={sesionData}>
         {/* Todo lo que esta aqui adentro puede leer los datos de sesionData, ademas si se actualiza los componentes de aqui, tambien lo actualizan */}
         <h1>** Ejemplo de uso de useState() y useContext()**</h1>
         <Componente1></Componente1>
         <button onClick={actualizarSesion}>Actualizar sesion</button>
     </miContexto.Provider>
   )
 }
 
 
 