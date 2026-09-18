(()=>{
     
    const hero : string = 'Flash';

    function returnName(): string {

        return hero;
    }
    console.log(returnName);

    // Con una función de flecha
    const activateBatisignal = () : string =>{

        return 'Batiseñal Activada';
    }
    console.log(typeof activateBatisignal)

    const heroName = returnName();
    

})();