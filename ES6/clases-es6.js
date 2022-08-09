(()=> {


    class Avenger {
        // name;
        // power;

        constructor( name = 'No name', power = 123 ){
            this.name = name;
            this.power = power;


            //this.otraPropiedad = true; //!no es bueno
        }

    }

    class FlyingAvenger extends Avenger{
        flying;

        //* En el constructor no pide nada
        constructor ( name, power ){
            super(name, power); //*Avenger(name?: string, power?: number): Avenger
            this.flying = true;
        }

    }

    const hulk = new Avenger('Hulk', 9001);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    console.log(falcon);




})()








