La sección se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json)

Puntualmente:

Aprenderemos el ¿por qué siempre compila a JavaScript?
Para que nos puede servir el archivo de configuración de TypeScript
Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
Removeremos todos los comentarios en nuestro archivo de producción.
Restringiremos al compilador que sólo vea ciertos archivos o carpetas
Crearemos un archivo final de salida
Aprenderemos a cambiar la version de JavaScript de salida
Adicionalmente tendrán el conocimiento necesario para compilar automáticamente cualquier archivo que se vaya creando al momento de ser insertado a nuestro proyecto.

¿Para que sirve el archivo? 
Básicamente es el archivo de configuración de TS, le dice como debe de funcionar. Si queremos que funcione de alguna forma en especial hay que modificar los valores por defecto.

¿Cómo evitamos que ts traspile los comentarios a js?
Se quita en el tsconfig, declaramos 
    "removeComments": true,

Incluir o excluir carpetas
Declaramos algo así en el ts:
"exclude":{
    "objetos/*.ts"
  }