(()=>{

    //Podemos restringir una funcion
    interface addTwoNumbers{
        (a: number, b: number): number;
    }

    let addTwoNumbersFunction: addTwoNumbers;

    addTwoNumbersFunction = (a: number, b:number) =>{
        return 10;
    }



})();