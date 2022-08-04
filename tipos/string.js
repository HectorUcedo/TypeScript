"use strict";
/**
 || Creamos nuestra función anonima autoinvocada con el objetivo
 || de que no choquen nuestros códigos en caso que declaremos variables
 || que tengan el mismo nombre.
 || Esto se va a encargar de encapsular nuestro código
*/
(() => {
    var _a;
    const batman = 'Batman'; // Es más preferible y ligero.
    const batman1 = 'Bat\'man1'; // Escapamos el ' con \ 
    const linterVerde = "Linterna's Verde"; // Preferible para agregar ' dentro del texto
    const volvanNegro = `Héroe: Volcan Negro`; // Alt + 96
    const abc = 123;
    console.log(`I'm ${batman}, ${abc.toString()} `);
    //console.log( batman.toUpperCase() );
    // null check
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente'); //string.js:16 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
})();
