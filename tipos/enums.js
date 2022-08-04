"use strict";
(() => {
    // uppercamel case
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium2; //let currentAudio: AudioLevel
    console.log(currentAudio);
    console.log(AudioLevel);
})();
