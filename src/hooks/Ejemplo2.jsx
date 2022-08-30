import React, { useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // vamos a crear dos contadores distintos
    // cada uno en un estado diferente

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1+1)
    }
    function incrementar2(){
        setcontador2(contador2+1)
    }
    /**
     * Trabajando con useEffect
     */
    /**
     * ? Caso 1:Ejecutar Siempre un snippet de código
     * cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useEffect()
     */
useEffect(() => {
    
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    console.log('Mostrando referencia a elemento del DOM');
    console.log(miRef);
});

    return (
        <div>
            <h1>** Ejemplo de useState(), useRef, useEffect **</h1>
             <h2>CONTADOR: {contador1}</h2>
             <h2>CONTADOR2: {contador2}</h2>
             {/* Elemento referenciado */}
             <h4 ref={miRef}>
                Ejemplo de elemento referenciado
             </h4>
             <div>
                {/* Botones para cambiar los contadores */}
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
             </div>
        </div>
    );
}

export default Ejemplo2;
