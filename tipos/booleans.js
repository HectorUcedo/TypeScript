"use strict";
// Función  anónima autoinvocada
(() => {
    let isSuperman = true;
    let isBatman = false;
    //isSuperman = undefined;
    //console.log({ isBatman }); //Variable 'isSuperman' is used before being assigned
    isSuperman = true && false;
    console.log({ isSuperman });
})();
