(()=> {

    // No se visualiza en JS
type Hero = {
    name: string;
    age: number;
    //powers: string[];
    powers: number[];
    getName?: () => string;
}

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        //powers: ['Super velocidad', 'Viajar en el tiempo']
        powers: [1,2]
    }

    let superman: Hero = {
        name: 'Clark kent',
        age: 24,
        //powers: ['Super velocidad', 'Viajar en el tiempo'],
        powers: [1,2],
        
        /**
         * Type '() => void' is not assignable to type '() => string'.
         * Acostumbrarse a leer los errores 
         */
        getName() {
            return this.name;
        },
    }



})()