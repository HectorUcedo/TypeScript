(()=>{


    //const numbers = [1,2,3,4,5,6,7,8,9,10]; // [] arreglos de números
    //const numbers = [1,2,3,4,5,'6',7,8,9,10]; //const number: (string | number)[]
    //const numbers: (string | number | boolean )[] = [1,2,3,4,5,'6',7,8,9,10]; // (String o number o buleano)
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]; 
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    //numbers.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
    //numbers.push(11); 
    //numbers.push(true); 

    //console.log(numbers);

    // call back function
    //numbers.forEach( v => console.log( v.toUpperCase() ) ); // error
    villians.forEach( v => console.log( v.toUpperCase() ) ); //(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void


})()