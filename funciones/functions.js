"use strict";
(() => {
    const hero = 'Flash';
    // Tipo de dato de retorno
    //function returnName():string {
    function returnName() {
        return hero;
    }
    // siempre colocar el tipo de dato: string
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
