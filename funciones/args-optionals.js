"use strict";
(() => {
    /**
     * En JavaScript es todo opcional, por eso es bueno usar TypeScript
     */
    // ? es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
