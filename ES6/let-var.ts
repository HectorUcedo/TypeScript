(()=>{

    //console.log(a); // Block-scoped variable 'a' used before its declaration
    //var a = 'Héctor';
    //let a = 'Héctor';

    /**
     * Se recomienda trabajar con const hasta que sepamos que eso va a cambiar
     * Por eso las funciones de flecha son utilizadas
     */

    //* Función anónima
    const getName = (): void  => {
        console.log('viejo getName');
    }
    
    
    //getName = () => { console.log('viejo getName') } // Cannot assign to 'getName' because it is a constant
    //getName()


    const NOMBRE = 'Héctor';

    const heroe = {
        a: 1,
        b: 2
    }


    //heroe = {}; //Cannot assign to 'heroe' because it is a constant

    heroe.b = 100; // esto es permitido

})()