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

    printAvenger( avengers );

})()