(()=>{
    interface Hero{
        name: string;
        age?: number;
        powers: number[];
        getName?:() => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 21,
        powers: [1, 3]

    }
})();