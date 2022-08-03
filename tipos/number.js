"use strict";
(() => {
    //let avengers = 10;
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) { //let avengers: undefined
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    //avengers = 123;
    avengers = Number('55A'); //{avengers: NaN} => es considerado un número
    console.log({ avengers });
})();
