(() => {

    /*
    || El never es Never
    || A function returning 'never' cannot have a reachable end point
    */ 
    const error = (message: string):(never|number) => {

        //if ( false ){
            
            throw new Error(message);

      //  }

        return 1; 

    }

    // Luego de llamar a esta función va a reventar
    error('Auxilio!');

    console.log('Hola mundo'); // Ya no se va a ejecutar

})()