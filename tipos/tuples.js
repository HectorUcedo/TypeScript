"use strict";
(() => {
    /**
     * En las Tuplas se puede controlar el tipo de datos
     * en JS la tupla es considerado solo como un Array
     */
    const hero = ['Dr Strange', 100, true];
    //hero[0] = 50; // Type 'number' is not assignable to type 'string'
    //hero[1] = 'Iron man'; // Type 'string' is not assignable to type 'number'.
    //hero[2] = 2; //Type 'number' is not assignable to type 'boolean'.
    hero[0] = 'Iron man';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
