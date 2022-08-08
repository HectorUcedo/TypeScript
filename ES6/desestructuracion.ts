(()=>{

    type Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500   
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers;

    // console.log(poder.toFixed(2), vision.toUpperCase() );

    // función que recibe los avengers
    // Operador REST -> Resto
    const printAvenger = ( {ironman, ...resto}: Avenger ) => {
        console.log( ironman, resto );
        // console.log( ironman, resto.activo );
    }

    //printAvenger( avengers );

    //const avengerArr: string[] = ['Cap. America', 'Iron Man', 'Hulk'];
    const avengerArr: [string, boolean, number] = ['Cap. America', true, 150.15];
    //const avengerArr: any[] = ['Cap. America', true, 150.15]; //Evitar usar ANY

    //const ironman = avengerArr[1];
    const [ capitan, ironman, seriaUnNumero] = avengerArr;
    //console.log( {ironman, capitan, seriaUnNumero} );

})()