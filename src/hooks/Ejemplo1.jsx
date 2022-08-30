/**
 * Crear un componente de tipo funcion y acceder a su estado privado a través de un hook y , además, poder modificarlo
 */ 
import React, { useState } from 'react';

const Ejemplo1 = () => {
    // Valor inicial para un contador
    const valorInicial =0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email:'martin@gmail.com'
    }
    /**
     * Quueremos que el VALORINICIAL y PERSONAINICIAL
     * parte del estado del componente para asi poder gestionar su cambio y que éste se vea reflejado en la vista del componente.
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
/**
 * funcion para actualizar el estado privado que contiene el contador
 */

    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador+10)
    }
/**
 * 
 */
    function actualizarPersona(){
        setPersona({
            nombre:'Pepe',
            email:'pepe@gmail.com'
        })
    }
    return (
        <div>
            <h1>** Ejemplo de useState() **</h1>
            <h2>CONTADOR: {contador}</h2>
            <h3>DATOS DE LA PERSONA: {persona}</h3>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
