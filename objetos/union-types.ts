(()=>{

    type Hero = {
        name: string;
        age: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Héctor';

    myCustomVariable = 20
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        //powers: ['Ninguno'] //Type 'string' is not assignable to type 'number'
        powers: [1] //Type 'string' is not assignable to type 'number'
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})()