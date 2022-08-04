"use strict";
(() => {
    /**
     * Regla de oro: Si se puede hacer en JS se puede hacer en TypeScrip
     */
    // Rest - Resto de argumento
    //const fullName = ( firstName: String,  ...restoDeNombres): string => {
    //const fullName = ( firstName: String,  ...restArgs:number[]): string => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph');
    console.log({ superman });
})();
