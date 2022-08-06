(()=> {

    /**
     * No confundir con un objeto de JS
     */

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark kent',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    console.log(flash);

})()