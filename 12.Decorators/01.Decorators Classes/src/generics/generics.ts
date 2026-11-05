

export const printObject = ( argument: any) => {
    console.log( argument )
}

//Podemos resolver los tipos usando '<>' 
export function genericFunction<T>(argument: T):T {
    return argument;
};


export const genericArrowFunction = <T>(argument: T): T => {
    return argument;
};
