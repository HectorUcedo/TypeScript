(()=>{

    // uppercamel case
    enum AudioLevel {
        min     = 1,
        medium , // 2
        medium2, // 3
        max     = 10
    } 

    // Utilizar siempre los valores parametrizados
    let currentAudio = AudioLevel.max; //let currentAudio: AudioLevel

    console.log( currentAudio);
    console.log( AudioLevel);

})()