(()=>{


    const hero: string = 'Flash';

                         // Tipo de dato de retorno
    //function returnName():string {
    function returnName():string {
        return hero;
    }

                                // siempre colocar el tipo de dato: string
    const activateBatisignal = ():string => {

        return 'Batiseñal activada!';

    }

    console.log(typeof activateBatisignal);

    const heroName = returnName();

})()