"use strict";
(() => {
    /**
     *  VOID significa vacío
     */
    //function callBatman() {
    function callBatman() {
        //return 1; //Type 'number' is not assignable to type 'void'
        return;
    }
    const callSuperman = () => {
        //return true; //Type 'boolean' is not assignable to type 'void'.
        //return null;  //TType 'null' is not assignable to type 'void'
        return;
    };
    const a = callBatman();
    console.log(a);
})();
