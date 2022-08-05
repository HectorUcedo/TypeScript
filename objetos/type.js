"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        //powers: ['Super velocidad', 'Viajar en el tiempo']
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark kent',
        age: 24,
        //powers: ['Super velocidad', 'Viajar en el tiempo'],
        powers: [1, 2],
        /**
         * Type '() => void' is not assignable to type '() => string'.
         * Acostumbrarse a leer los errores
         */
        getName() {
            return this.name;
        },
    };
})();
