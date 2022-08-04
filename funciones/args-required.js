"use strict";
(() => {
    // acepta string ó buleano
    const fullName = (firstName, lastName) => {
        // Si no trabajamos en TypeScrip debemos poner el if()
        //if ( !firstName ) {
        //  throw new Error('Nombre Requerdo!');      
        //}
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName('Tony', 'Stark');
    //const name = fullName(noName,'Stark'); // Por más que sea Any aceptó pero no es correcto
    console.log(name);
})();
