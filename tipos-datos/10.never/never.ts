(()=>{

    
    const error = (message: string) : never =>{
        throw new Error(message);
    }
    
    error('Auxilio');
    console.log('Hola Mundo');

    const error1 = (message: string) : (never | number) =>{
            
        if (false){
           throw new Error(message)}

            return 1;
        }
        
        error('Auxilio');
        console.log('Hola Mundo');


})();