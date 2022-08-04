/**
 || Creamos nuestra función anonima autoinvocada con el objetivo
 || de que no choquen nuestros códigos en caso que declaremos variables 
 || que tengan el mismo nombre.
 || Esto se va a encargar de encapsular nuestro código
*/

(()=> {

    const batman: string = 'Batman'; // Es más preferible y ligero.
    const batman1: any = 'Bat\'man1'; // Escapamos el ' con \ 
    const linterVerde: string = "Linterna's Verde"; // Preferible para agregar ' dentro del texto
    const volvanNegro: string = `Héroe: Volcan Negro`; // Alt + 96

    const abc = 123;

    console.log( `I'm ${ batman }, ${ abc.toString() } `);

    //console.log( batman.toUpperCase() );

    // null check
    console.log( batman[10]?.toUpperCase() || 'No está presente'); //string.js:16 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

})()