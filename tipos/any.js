"use strict";
(() => {
    /**
     * NUNCA usar ANY
     */
    let avenger = 123;
    //let avenger: number = 123;
    //let avenger: string = 123;
    let exists;
    //const exists; // 'const' declarations must be initialized.
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0)); // sin la ayuda de propiedades podemos poner cualquier propiedad
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2)); // no tuvimos la ayuda
    console.log(exists); // undefined
    console.log(power); // undefined
})();
