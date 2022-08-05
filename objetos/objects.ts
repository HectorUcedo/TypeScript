(()=> {

    /**
     * No confundir con un objeto de JS
     */

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        //name2 = 'Otro nombre' // Type '{ name2: string; }' is not assignable to type '{ name: "Barry Allen"; age: 24; powers: ["Super velocidad", "Viajar en el tiempo"]; }'.
        name: 'Clark Kent',
        //age: 60,
        powers: ['Súper fuerza'],
        getName(){
            return this.name;
        }
    }



    console.log(flash.getName());


})()