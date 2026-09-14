(()=>{

    enum AudioLevel{
        min = 0,        // 0
        medium = 5,     // 1
        max = 10,        // 2
    }
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio); // Output: 5
})();