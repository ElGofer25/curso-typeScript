namespace Validations {

    // Para poder usar correctamente las constantes, previamente debemos poner 'export'
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? false : true;
    }

    export const validateNumber = (myDate: Date): boolean =>{
        return( isNaN(myDate.valueOf()))
        ? false
        : true;
    }


} export {}; //Esta partícula se agrega por que la configuración actual de TS da error, el cuál viene de "verbatimModuleSyntax": true en tu configuración: impide usar namespaces en archivos que TypeScript considera scripts globales.

console.log( Validations.validateText('Fer'))