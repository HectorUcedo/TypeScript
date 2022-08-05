"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    //*let myFunction;
        ** let;
    myFunction: (y, z) => number;
    let myFunction;
    //!myFunction = 10; //Type 'number' is not assignable to type 'Function'
    //*console.log(myFunction);
    // Estoy pasando por referencia
    myFunction = addNumber; //Type '(a: number, b: number) => number' is not assignable to type '() => number'.
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('Héctor'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
