(()=>{
    
    type Avenger = {
        name: string,
        weapon: string,
    }
    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }
    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield',
    }
    const hulk: Avenger = {
        name: 'Hulk',
        weapon: 'Gamma Rays',
    }
    const anvergers : Avenger[] = [ironman, captainAmerica, hulk];
    
    //
    for(const avenger of anvergers){
        console.log(avenger.name, avenger.weapon)
    } 


})();
