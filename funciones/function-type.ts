(()=>{

    const addNumber = ( a:number, b: number) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado`;

    //*let myFunction;
    //*let myFunction: (y: number, z: number) => number;
    //*let myFunction: (y: string) => string;
    let myFunction: () => string;

    //!myFunction = 10; //Type 'number' is not assignable to type 'Function'
    //*console.log(myFunction);
    
    // Estoy pasando por referencia
    // myFunction = addNumber; //Type '(a: number, b: number) => number' is not assignable to type '() => number'.
    // console.log(myFunction(1,2));

    //? myFunction = greet;
    //? console.log(greet('Héctor'));

    myFunction = saveTheWorld;
    console.log(saveTheWorld());




})()