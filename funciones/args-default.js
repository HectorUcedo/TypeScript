"use strict";
(() => {
    //A required parameter cannot follow an optional parameter.
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastName'}`;
        }
    };
    //const name = fullName('Tony', 'Stark'); // -> Minúscula
    const name = fullName('Tony', 'Stark', true); // -> Capitalizado
    console.log(name);
})();
