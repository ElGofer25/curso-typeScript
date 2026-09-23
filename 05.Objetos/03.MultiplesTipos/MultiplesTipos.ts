

(()=>{

    type Hero ={
        name : string;
        age?: number;
        powers: string[];
    }
    //Forma 1
    //let myVar : string | number | Hero = 'Diego';
    //Forma 2
    let myVar : (string | number | Hero) = 'Diego';
    myVar ={
        name : 'Bruce',
        age : 23,
        powers : ['None'],
    }
    
})();