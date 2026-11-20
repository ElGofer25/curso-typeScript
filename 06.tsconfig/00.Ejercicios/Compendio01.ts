/*
COMPENDIO 01 — TSCONFIG
Ejercicios 01–50, de menos a más difíciles. Cada tramo añade un tema de la sección 06
y lo mezcla con lo anterior. La sección 06 no tiene archivos .ts: se ejercita su
Apuntes.md (tsconfig.json) junto con el código de las secciones 01, 03, 04 y 05.

SUBSECCIONES EJERCITADAS
  06 · 1 tsconfig.json ........ compilerOptions, tsc --init
  06 · 2 Opciones principales . target, module, strict, removeComments
  06 · 3 Archivos auxiliares .. sourceMap, declaration, declarationMap
  06 · 4 Entrada y salida ..... rootDir, outDir, include, exclude (y la importación que vence a exclude)
  06 · 5 Compilación .......... tsc, tsc --watch
  Repaso previo ............... 01 const/let · 03 null y undefined, boolean, number, string, arrays,
                                tuplas, enum · 04 parámetros opcionales, por defecto y rest, tipo
                                función · 05 objetos tipados, métodos y this, type, uniones

PROGRESIÓN
  01–04  rootDir y outDir ................ strings, arrays, undefined como rechazo
  05–10  include y exclude ............... decisiones en orden, tuplas
  11–15  sourceMap, declaration,
         declarationMap, removeComments .. type, rest, comprobación de opciones incompatibles
  16–18  tsc y tsc --watch ............... parámetro por defecto, objeto con this
  19–28  strict en código de 03, 04, 05 .. null, opcionales, any implícito, funciones, uniones, enum
  29–38  configuración + código .......... salida + archivos generados, importaciones, leer texto
  39–50  proyecto completo ............... leer, validar, generar, comparar, vigilar y auditar

CÓMO TRABAJAR CADA EJERCICIO
  1. Lee SITUACIÓN: te dice qué se modela.
  2. Sigue QUÉ DEBES HACER en orden, paso por paso. Cada paso es una acción concreta.
  3. Escribe las instrucciones de COMPRUEBA con console.log. Cada línea trae el
     resultado esperado después de //. Antes de ejecutar, predice qué saldrá.
  4. Si hay líneas en ESTO DEBE FALLAR, pruébalas una por una: descomenta, comprueba
     que TypeScript marca error y vuelve a comentarla. Las que empiezan con «tsconfig:»
     no son código: son líneas de configuración que tsc rechaza; pruébalas en el banco
     de pruebas.
  5. Responde EXPLICA en un comentario bajo tu solución.

DOS TIPOS DE PASO
  · Función: código TypeScript que modela lo que hace tsc o lo que depende de strict.
  · Fragmento: texto de tsconfig.json que escribes en líneas // dentro de tu solución
    (así el archivo sigue compilando). Respeta la estructura del Apuntes: las opciones
    del compilador van dentro de compilerOptions; include y exclude van fuera, al
    mismo nivel que compilerOptions; los arreglos se escriben con corchetes.

BANCO DE PRUEBAS (opcional, recomendado para los fragmentos)
  Crea una carpeta fuera del curso, por ejemplo banco/, ejecuta tsc --init dentro,
  crea las carpetas y archivos .ts que pida el ejercicio y pega tu fragmento en su
  tsconfig.json. Ejecuta tsc y mira el resultado con ls -R. tsc --listFilesOnly
  muestra qué archivos entran en el proyecto sin generar nada (ignora los de
  node_modules). Borra el banco al terminar; no lo guardes en el repositorio.

VOCABULARIO DE LOS ENUNCIADOS
  «ruta» = texto con / como separador, relativo a la carpeta del tsconfig.json y
  sin ./ al inicio: 'src/app.ts'. En un fragmento de tsconfig sí se escribe ./src.
  «carpeta» = ruta de una carpeta, sin / al final: 'src'.
  «patrón de include» = el de la sección 4 del Apuntes aplicado a una carpeta: la
  carpeta, una /, dos asteriscos, una /, un asterisco y .ts. Significa: cualquier
  archivo .ts dentro de esa carpeta, a cualquier profundidad. (No se escribe aquí
  completo porque dos asteriscos seguidos de una barra cerrarían este comentario;
  lo escribes tú en tus fragmentos.)
  «entrada de exclude» = ruta de una carpeta o de un archivo. Excluye esa ruta y todo
  lo que cuelga de ella. Siempre se compara desde el inicio de la ruta completa.
  «rechazo» = devolver undefined; no se lanzan errores ni se imprime nada.
  «supón» = el dato ya es válido; no lo compruebes.
  Modelo simplificado: en los ejercicios que devuelven errores y archivos, una
  configuración con errores no genera ningún archivo; y tsc --watch compila una vez
  al arrancar y una vez por cada guardado de un archivo del proyecto. tsc real
  puede dejar archivos aunque muestre ciertos errores y agrupar o repetir
  recompilaciones; aquí se simplifica para poder comprobar los resultados.
  {llaves} en un texto = valor que sustituyes; las llaves no se escriben.
  En los textos de prueba de los ejercicios 08 y 45 al 50, include lista solo la
  carpeta (["src"]); tsc también lo acepta y equivale a todo lo que cuelga de ella.

REGLAS COMUNES
  - Cada ejercicio va dentro de su función autoinvocada; son independientes. Si un
    ejercicio pide una función de otro, cópiala a tu solución (el enunciado resume
    su regla). Los datos de prueba que aparecen en COMPRUEBA también se copian.
  - Pon tipo a parámetros, retornos y propiedades. No uses any. El proyecto se
    compila con strict.
  - Una consulta no modifica sus argumentos: devuelve arrays y objetos nuevos.
    Imprimir no sustituye a devolver.
  - Usa los nombres de funciones, tipos y propiedades tal como aparecen.
  - Puedes usar if/else, for clásico, while, forEach, length, lista[i], slice,
    indexOf, lastIndexOf, startsWith, endsWith, includes, push, join, split, trim,
    plantillas con comillas invertidas, ||, typeof y toUpperCase. Con
    lista[i] TypeScript puede tratar el elemento como T | undefined: compruébalo con
    un if. Para terminar un recorrido antes con return usa un for clásico (forEach
    no permite salir con return).
  - Prohibido por no haberse visto: for...of, for...in, desestructuración, spread,
    map/filter/reduce/find, clases, interfaces, genéricos, namespaces, import/export,
    decoradores, try/catch, any, expresiones regulares y JSON.parse/JSON.stringify.
  - No hay soluciones incluidas.
*/

// TRAMO 1 — ROOTDIR Y OUTDIR: EJERCICIOS 01 AL 04

// !EJERCICIO 01 — Dónde cae cada archivo compilado
/*
SITUACIÓN
  tsc guarda cada archivo .js dentro de outDir y conserva las subcarpetas que el
  archivo tenía dentro de rootDir. Vas a calcular esa ruta de salida y a escribir
  la configuración que la produce.

QUÉ DEBES HACER
  1. Crea la función rutaDeSalida(origen: string, rootDir: string, outDir: string): string.
     Supón que origen empieza con '{rootDir}/' y termina en '.ts'.
  2. Dentro de rutaDeSalida:
     a) quita de origen el prefijo '{rootDir}/' con slice(rootDir.length + 1);
     b) quita las tres últimas letras ('.ts') del resultado con slice y añade '.js'
        (no uses replace: el nombre 'tstats' contiene 'ts');
     c) devuelve '{outDir}/{resultado}'.
  3. Escribe en líneas // un fragmento de tsconfig.json con las dos opciones que
     producen la salida del primer COMPRUEBA ('src/app.ts' pasa a 'dist/app.js').
     Los valores llevan ./ delante.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(rutaDeSalida('src/app.ts', 'src', 'dist'));        // 'dist/app.js'
  console.log(rutaDeSalida('src/util/fecha.ts', 'src', 'dist')); // 'dist/util/fecha.js'
  console.log(rutaDeSalida('app/main.ts', 'app', 'build'));      // 'build/main.js'
  console.log(rutaDeSalida('src/tstats.ts', 'src', 'dist'));     // 'dist/tstats.js'

ESTO DEBE FALLAR
  // rutaDeSalida('src/app.ts', 'src');     → falta el argumento obligatorio outDir.
  // rutaDeSalida('src/app.ts', 'src', 5);  → outDir debe ser string.

EXPLICA
  ¿Por qué la subcarpeta 'util' aparece también dentro de dist, y qué opción de tu
  fragmento le dice a tsc dónde empieza esa subcarpeta?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 02 — De qué archivo viene este .js
/*
SITUACIÓN
  Encuentras un archivo dentro de la carpeta de salida y quieres saber qué archivo
  .ts lo generó. Es el cálculo inverso del ejercicio anterior, y puede no tener
  respuesta.

QUÉ DEBES HACER
  1. Crea la función rutaDeOrigen(salida: string, rootDir: string, outDir: string):
     string | undefined.
  2. Dentro de rutaDeOrigen, en este orden:
     a) si salida no empieza con '{outDir}/', rechaza;
     b) si salida no termina en '.js', rechaza;
     c) quita el prefijo '{outDir}/', cambia el '.js' final por '.ts' (slice de las
        tres últimas letras y añade '.ts') y devuelve '{rootDir}/{resultado}'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(rutaDeOrigen('dist/util/fecha.js', 'src', 'dist')); // 'src/util/fecha.ts'
  console.log(rutaDeOrigen('dist/app.js', 'src', 'dist'));        // 'src/app.ts'
  console.log(rutaDeOrigen('dist/app.js.map', 'src', 'dist'));    // undefined
  console.log(rutaDeOrigen('build/app.js', 'src', 'dist'));       // undefined
  console.log(rutaDeOrigen('distribucion/app.js', 'src', 'dist')); // undefined

ESTO DEBE FALLAR
  // const ruta: string = rutaDeOrigen('dist/app.js', 'src', 'dist');  → puede devolver undefined.
  // rutaDeOrigen('dist/app.js', 'src', 'dist').length;                 → el resultado puede ser undefined.

EXPLICA
  ¿Por qué se compara con 'dist/' y no solo con 'dist'? ¿Qué devolvería tu función
  para 'dist/app.d.ts'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 03 — Varios archivos y un límite
/*
SITUACIÓN
  rootDir debe contener todos los archivos fuente del proyecto. Si tsc encuentra
  uno fuera de rootDir, muestra el error TS6059. Vas a modelar ese comportamiento y
  a escribir la configuración correcta.

QUÉ DEBES HACER
  1. Crea la función rutasDeSalida(origenes: string[], rootDir: string, outDir: string):
     string[] | undefined.
  2. Dentro de rutasDeSalida:
     a) crea un array vacío de strings para acumular;
     b) recorre origenes en orden con un for clásico;
     c) si un origen no empieza con '{rootDir}/', devuelve undefined en ese momento
        (representa el error TS6059);
     d) en otro caso añade al array su ruta de salida: sin el prefijo '{rootDir}/',
        con '.ts' cambiado por '.js' y con el prefijo '{outDir}/';
     e) al terminar devuelve el array (vacío si origenes estaba vacío).
  3. Escribe en líneas // un fragmento completo de tsconfig.json con rootDir './src',
     outDir './dist' y un include que deje entrar solo la carpeta src (usa el
     patrón de include del vocabulario). Include va fuera de compilerOptions.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(rutasDeSalida(['src/app.ts', 'src/util/fecha.ts'], 'src', 'dist')); // ['dist/app.js', 'dist/util/fecha.js']
  console.log(rutasDeSalida(['src/app.ts', 'otros/libre.ts'], 'src', 'dist'));    // undefined
  console.log(rutasDeSalida([], 'src', 'dist'));                                  // []
  console.log(rutasDeSalida(['srcx/a.ts'], 'src', 'dist'));                       // undefined
  const entradas: string[] = ['src/b.ts'];
  console.log(rutasDeSalida(entradas, 'src', 'dist'));                            // ['dist/b.js']
  console.log(entradas);                                                          // ['src/b.ts']

ESTO DEBE FALLAR
  // rutasDeSalida('src/app.ts', 'src', 'dist');  → el primer argumento debe ser un arreglo de strings.
  // tsconfig: con rootDir './src', añadir a include el archivo 'otros/libre.ts'  → tsc da TS6059.

EXPLICA
  ¿Qué diferencia hay entre que 'otros/libre.ts' no esté en include y que esté en
  include pero fuera de rootDir?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 04 — Las carpetas que crea tsc
/*
SITUACIÓN
  Al compilar, tsc crea dentro de outDir una carpeta por cada subcarpeta que tenga
  algún archivo de salida. Recibes la lista de archivos de salida y quieres saber
  qué carpetas distintas hay, sin repetir ninguna.

QUÉ DEBES HACER
  1. Crea la función carpetasDeSalida(rutas: string[]): string[].
     Supón que cada ruta contiene al menos una '/'.
  2. Dentro de carpetasDeSalida:
     a) crea un array vacío de strings;
     b) recorre rutas en orden;
     c) la carpeta de una ruta es lo que hay antes de su última '/'
        (usa lastIndexOf y slice);
     d) añade esa carpeta al array solo si todavía no está en él;
     e) devuelve el array, en el orden en que aparecieron las carpetas.
  3. Escribe en una línea // la opción de tsconfig.json que decide cuál es la
     carpeta raíz de salida 'dist'.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(carpetasDeSalida(['dist/app.js', 'dist/util/fecha.js', 'dist/util/hora.js', 'dist/models/user.js']));
  // ['dist', 'dist/util', 'dist/models']
  console.log(carpetasDeSalida(['dist/util/a.js', 'dist/b.js'])); // ['dist/util', 'dist']
  console.log(carpetasDeSalida(['dist/a.js', 'dist/b.js']));      // ['dist']
  console.log(carpetasDeSalida([]));                              // []

ESTO DEBE FALLAR
  // carpetasDeSalida('dist/app.js');          → se espera un arreglo, no un string.
  // const total: number = carpetasDeSalida([]);  → devuelve string[], no number.

EXPLICA
  ¿Por qué 'dist/util' y 'dist' cuentan como carpetas distintas aunque una contenga
  a la otra?
*/
(() => {
    // Tu solución.
})();

// TRAMO 2 — INCLUDE Y EXCLUDE: EJERCICIOS 05 AL 10

// !EJERCICIO 05 — ¿Entra en include?
/*
SITUACIÓN
  include indica qué archivos forman el proyecto. Con el patrón de include de una
  carpeta, entran los .ts que cuelgan de ella y se quedan fuera los demás.

QUÉ DEBES HACER
  1. Crea la función entraEnInclude(ruta: string, carpeta: string): boolean.
     Representa el patrón de include de esa carpeta.
  2. Dentro de entraEnInclude, en este orden:
     a) si ruta no empieza con '{carpeta}/', devuelve false;
     b) si ruta no termina en '.ts', devuelve false;
     c) en otro caso devuelve true.
  3. Escribe en líneas // la parte de tsconfig.json que hace entrar la carpeta src
     con ese patrón. Recuerda: include es un arreglo y va fuera de compilerOptions.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(entraEnInclude('src/app.ts', 'src'));        // true
  console.log(entraEnInclude('src/util/hora.ts', 'src'));  // true
  console.log(entraEnInclude('src/leeme.md', 'src'));      // false
  console.log(entraEnInclude('src/app.js', 'src'));        // false
  console.log(entraEnInclude('srcx/app.ts', 'src'));       // false
  console.log(entraEnInclude('test/app.ts', 'src'));       // false

ESTO DEBE FALLAR
  // entraEnInclude('src/app.ts');       → falta el argumento obligatorio carpeta.
  // entraEnInclude('src/app.ts', 5);    → carpeta debe ser string.
  // tsconfig: include escrito como texto, sin corchetes (un solo string en lugar de un arreglo)  → tsc da TS5024.

EXPLICA
  ¿Por qué 'srcx/app.ts' no entra aunque empiece con las letras 'src'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 06 — ¿Está excluido?
/*
SITUACIÓN
  exclude saca archivos del proyecto. Cada entrada es una ruta (carpeta o archivo)
  y se compara desde el inicio de la ruta completa del archivo.

QUÉ DEBES HACER
  1. Crea la función estaExcluida(ruta: string, exclude: string[]): boolean.
  2. Dentro de estaExcluida:
     a) recorre exclude en orden con un for clásico;
     b) para cada entrada: si ruta es igual a la entrada, devuelve true;
     c) si ruta empieza con '{entrada}/', devuelve true;
     d) si ninguna entrada coincide, devuelve false (también cuando exclude está vacío).
  3. Escribe en líneas // la parte de tsconfig.json que excluye node_modules y dist.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(estaExcluida('node_modules/x/index.ts', ['node_modules', 'dist'])); // true
  console.log(estaExcluida('src/app.ts', ['node_modules', 'dist']));              // false
  console.log(estaExcluida('src/pruebas/t1.ts', ['src/pruebas']));                // true
  console.log(estaExcluida('src/pruebas', ['src/pruebas']));                      // true
  console.log(estaExcluida('src/pruebas2/t2.ts', ['src/pruebas']));               // false
  console.log(estaExcluida('src/pruebas/t1.ts', ['pruebas']));                    // false
  console.log(estaExcluida('src/app.ts', []));                                    // false

ESTO DEBE FALLAR
  // estaExcluida('src/app.ts', 'dist');  → exclude es un arreglo de strings, no un string.
  // tsconfig: exclude escrito como objeto, con llaves, por ejemplo { "dist": true }  → tsc da TS5024.

EXPLICA
  ¿Por qué 'pruebas' no excluye 'src/pruebas/t1.ts'? ¿Qué entrada sí lo haría?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 07 — Los archivos del proyecto
/*
SITUACIÓN
  El proyecto lo forman los archivos que entran por include y no quedan excluidos.
  Dada la lista de todos los archivos de una carpeta de trabajo, quieres saber
  cuáles compilará tsc.

QUÉ DEBES HACER
  1. Crea la función archivosDelProyecto(rutas: string[], carpeta: string,
     exclude: string[]): string[].
  2. Dentro de archivosDelProyecto:
     a) crea un array vacío de strings;
     b) recorre rutas en orden;
     c) una ruta se acepta si: empieza con '{carpeta}/' y termina en '.ts' (patrón de
        include) y además no es igual a ninguna entrada de exclude ni empieza con
        '{entrada}/';
     d) las aceptadas se añaden al array, conservando el orden de rutas;
     e) devuelve el array.
  3. Escribe en líneas // un tsconfig.json completo para la primera comprobación:
     rootDir './src', outDir './dist', include con el patrón de la carpeta src y
     exclude con 'node_modules' y 'src/pruebas'.
  4. Crea el array rutas y ejecuta COMPRUEBA.

COMPRUEBA
  const rutas: string[] = ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts',
      'src/pruebas2/t2.ts', 'src/leeme.md', 'otros/libre.ts', 'node_modules/x/index.ts'];
  console.log(archivosDelProyecto(rutas, 'src', ['node_modules', 'src/pruebas']));
  // ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas2/t2.ts']
  console.log(archivosDelProyecto(rutas, 'src', []));
  // ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts', 'src/pruebas2/t2.ts']
  console.log(archivosDelProyecto(rutas, 'otros', ['otros'])); // []
  console.log(rutas.length);                                   // 7

ESTO DEBE FALLAR
  // archivosDelProyecto(rutas, 'src', 'node_modules');  → exclude debe ser un arreglo.
  // const cuantos: number = archivosDelProyecto(rutas, 'src', []);  → devuelve string[], no number.

EXPLICA
  En la primera comprobación, ¿qué archivo queda fuera solo por exclude y cuáles
  quedan fuera por no cumplir el patrón de include?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 08 — Revisar listas mal escritas
/*
SITUACIÓN
  include y exclude son arreglos: se escriben con corchetes. Recibes pares
  [clave, valorEscrito] copiados de un tsconfig.json y quieres detectar los que no
  son arreglos. Cada par es una tupla de dos strings.

QUÉ DEBES HACER
  1. Crea la función revisarListas(entradas: [string, string][]): string[].
     El valor viene tal como se escribió y sin espacios al inicio.
  2. Dentro de revisarListas:
     a) crea un array vacío de strings para los errores;
     b) recorre entradas en orden;
     c) si el valor no empieza con '[', añade el error '{clave} debe ser un arreglo';
     d) devuelve los errores, en el orden de entradas (vacío si no hay ninguno).
  3. Escribe en líneas // las dos líneas correctas de tsconfig.json para el caso en
     que no habría errores: include para la carpeta src (patrón de include) y
     exclude para dist.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(revisarListas([['include', '["src"]'], ['exclude', '["dist"]']]));  // []
  console.log(revisarListas([['include', '["src"]'], ['exclude', '{}']]));        // ['exclude debe ser un arreglo']
  console.log(revisarListas([['exclude', '"dist"'], ['include', '{"src": 1}']]));
  // ['exclude debe ser un arreglo', 'include debe ser un arreglo']
  console.log(revisarListas([]));                                                 // []

ESTO DEBE FALLAR
  // revisarListas([['include']]);      → la tupla necesita dos elementos.
  // revisarListas([['include', 5]]);   → el segundo elemento debe ser string.

EXPLICA
  ¿En qué se diferencia una tupla [string, string] de un arreglo string[]?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 09 — Cuando no entra nada
/*
SITUACIÓN
  Si include no encuentra ningún archivo, tsc muestra el error TS18003:
  «No inputs were found». Vas a producir el resumen que mostraría tsc.

QUÉ DEBES HACER
  1. Crea la función resumenEntrada(rutas: string[], carpeta: string,
     exclude: string[]): string.
  2. Dentro de resumenEntrada:
     a) obtén los archivos del proyecto con la regla del ejercicio 07 (escríbela
        de nuevo: include de la carpeta y no excluidos, en el orden de rutas);
     b) si no hay ninguno, devuelve 'No inputs were found';
     c) si hay, devuelve '{n} archivo(s): {lista}', con n la cantidad y la lista
        unida con ', '.
  3. Escribe en una línea // el include que provocaría ese error para el proyecto de
     COMPRUEBA (una carpeta que no existe, por ejemplo 'nada', con el patrón de include).
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const rutas: string[] = ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts', 'otros/libre.ts'];
  console.log(resumenEntrada(rutas, 'src', ['src/pruebas']));  // '2 archivo(s): src/app.ts, src/util/fecha.ts'
  console.log(resumenEntrada(rutas, 'src', ['src']));          // 'No inputs were found'
  console.log(resumenEntrada(rutas, 'nada', []));              // 'No inputs were found'
  console.log(resumenEntrada([], 'src', []));                  // 'No inputs were found'
  console.log(resumenEntrada(['src/a.ts'], 'src', []));        // '1 archivo(s): src/a.ts'

ESTO DEBE FALLAR
  // resumenEntrada(rutas, 'src');  → falta el argumento obligatorio exclude.
  // tsconfig: include con el patrón de la carpeta 'nada' (que no existe)  → tsc da TS18003.

EXPLICA
  ¿Qué dos situaciones distintas producen 'No inputs were found' en tu función?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 10 — ¿Por qué no se compila este archivo?
/*
SITUACIÓN
  Un archivo no aparece en la salida y quieres saber el motivo. La respuesta
  depende del orden en que se evalúan las reglas: primero include y después exclude.

QUÉ DEBES HACER
  1. Crea la función diagnostico(ruta: string, carpeta: string, exclude: string[]): string.
  2. Dentro de diagnostico, en este orden:
     a) si la ruta no cumple el patrón de include de la carpeta (empieza con
        '{carpeta}/' y termina en '.ts'), devuelve '{ruta}: fuera de include';
     b) recorre exclude en orden; con la primera entrada que sea igual a la ruta o
        con la que la ruta empiece como '{entrada}/', devuelve '{ruta}: excluido por {entrada}';
     c) si ninguna entrada coincide, devuelve '{ruta}: se compila'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(diagnostico('otros/libre.ts', 'src', ['dist']));
  // 'otros/libre.ts: fuera de include'
  console.log(diagnostico('src/pruebas/t1.ts', 'src', ['dist', 'src/pruebas']));
  // 'src/pruebas/t1.ts: excluido por src/pruebas'
  console.log(diagnostico('src/app.ts', 'src', ['dist', 'src/pruebas']));
  // 'src/app.ts: se compila'
  console.log(diagnostico('src/pruebas/t1.ts', 'src', ['src', 'src/pruebas']));
  // 'src/pruebas/t1.ts: excluido por src'
  console.log(diagnostico('otros/libre.ts', 'src', ['otros']));
  // 'otros/libre.ts: fuera de include'
  console.log(diagnostico('src/notas.md', 'src', []));
  // 'src/notas.md: fuera de include'

ESTO DEBE FALLAR
  // diagnostico('src/app.ts', ['src'], []);  → carpeta debe ser string, no un arreglo.
  // const motivo: number = diagnostico('src/app.ts', 'src', []);  → devuelve string.

EXPLICA
  Si 'otros/libre.ts' está en exclude pero no en include, ¿qué motivo da tu función
  y por qué?
*/
(() => {
    // Tu solución.
})();

// TRAMO 3 — ARCHIVOS GENERADOS: EJERCICIOS 11 AL 15

// !EJERCICIO 11 — Mapas y declaraciones
/*
SITUACIÓN
  Además del .js, tsc puede crear archivos auxiliares. sourceMap crea un .js.map que
  relaciona el JavaScript ejecutado con el TypeScript original para depurar.
  declaration crea un .d.ts con las declaraciones de tipos, útil al publicar librerías.
  Por defecto ninguna de las dos está activa.

QUÉ DEBES HACER
  1. Crea la función archivosGenerados(nombre: string, sourceMap: boolean,
     declaration: boolean): string[]. nombre no lleva extensión ('app').
  2. Dentro de archivosGenerados:
     a) crea un array que ya contenga '{nombre}.js' (siempre se genera);
     b) si sourceMap es true, añade '{nombre}.js.map';
     c) si declaration es true, añade '{nombre}.d.ts';
     d) devuelve el array (ese es el orden de salida).
  3. Escribe en líneas // un fragmento de tsconfig.json con las dos opciones activadas,
     dentro de compilerOptions.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(archivosGenerados('app', false, false)); // ['app.js']
  console.log(archivosGenerados('app', true, false));  // ['app.js', 'app.js.map']
  console.log(archivosGenerados('app', false, true));  // ['app.js', 'app.d.ts']
  console.log(archivosGenerados('app', true, true));   // ['app.js', 'app.js.map', 'app.d.ts']

ESTO DEBE FALLAR
  // archivosGenerados('app', 'si', false);  → sourceMap debe ser boolean.
  // archivosGenerados('app', true);         → falta el argumento obligatorio declaration.

EXPLICA
  ¿Cuál de los dos archivos auxiliares ayuda a depurar y cuál es útil al publicar
  una librería?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 12 — declarationMap necesita declaration
/*
SITUACIÓN
  declarationMap crea un .d.ts.map que permite navegar desde una declaración hasta su
  fuente. Solo tiene sentido si también se generan los .d.ts: sin declaration, tsc
  muestra el error TS5069.

QUÉ DEBES HACER
  1. Crea el tipo Opciones con tres propiedades obligatorias, todas boolean:
     sourceMap, declaration y declarationMap.
  2. Crea la función archivosGenerados(nombre: string, opciones: Opciones):
     string[] | undefined.
  3. Dentro de archivosGenerados, en este orden:
     a) si declarationMap es true y declaration es false, rechaza (es el error TS5069);
     b) crea un array con '{nombre}.js';
     c) añade '{nombre}.js.map' si sourceMap es true;
     d) añade '{nombre}.d.ts' si declaration es true;
     e) añade '{nombre}.d.ts.map' si declarationMap es true;
     f) devuelve el array.
  4. Escribe en líneas // el fragmento de compilerOptions que produce los cuatro
     archivos de la primera comprobación.
  5. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(archivosGenerados('app', { sourceMap: true, declaration: true, declarationMap: true }));
  // ['app.js', 'app.js.map', 'app.d.ts', 'app.d.ts.map']
  console.log(archivosGenerados('app', { sourceMap: false, declaration: true, declarationMap: true }));
  // ['app.js', 'app.d.ts', 'app.d.ts.map']
  console.log(archivosGenerados('app', { sourceMap: false, declaration: false, declarationMap: true }));
  // undefined
  console.log(archivosGenerados('app', { sourceMap: true, declaration: false, declarationMap: false }));
  // ['app.js', 'app.js.map']

ESTO DEBE FALLAR
  // archivosGenerados('app', { sourceMap: true, declaration: true });  → falta declarationMap en el objeto.
  // tsconfig: solo "declarationMap": true, sin declaration  → tsc da TS5069.

EXPLICA
  ¿Qué dos opciones debes activar juntas para que existan los archivos .d.ts.map?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 13 — Deducir las opciones a partir de los archivos
/*
SITUACIÓN
  Tienes la lista de archivos que dejó tsc en la carpeta de salida y quieres saber
  qué opciones auxiliares estaban activas para un archivo concreto.

QUÉ DEBES HACER
  1. Crea la función deducirOpciones(archivos: string[], nombre: string): string[].
     nombre no lleva extensión ('app').
  2. Dentro de deducirOpciones:
     a) crea un array vacío de strings;
     b) si archivos contiene '{nombre}.js.map', añade 'sourceMap';
     c) si contiene '{nombre}.d.ts', añade 'declaration';
     d) si contiene '{nombre}.d.ts.map', añade 'declarationMap';
     e) devuelve el array en ese orden. Los archivos de otros nombres no cuentan.
  3. Escribe en líneas // el fragmento de compilerOptions que debió usarse para que
     la tercera comprobación diera ['declaration', 'declarationMap'].
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(deducirOpciones(['app.js'], 'app'));                               // []
  console.log(deducirOpciones(['app.js', 'app.js.map'], 'app'));                 // ['sourceMap']
  console.log(deducirOpciones(['app.d.ts', 'app.js', 'app.d.ts.map'], 'app'));   // ['declaration', 'declarationMap']
  console.log(deducirOpciones(['otro.js.map', 'app.js'], 'app'));                // []
  console.log(deducirOpciones([], 'app'));                                       // []

ESTO DEBE FALLAR
  // deducirOpciones('app.js', 'app');         → archivos debe ser un arreglo.
  // const hay: boolean = deducirOpciones([], 'app');  → devuelve string[], no boolean.

EXPLICA
  Si encuentras 'app.js.map' pero no 'app.d.ts', ¿qué opciones estaban activas y
  cuáles no?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 14 — removeComments
/*
SITUACIÓN
  removeComments evita trasladar los comentarios al JavaScript generado. En este
  modelo solo existen comentarios de línea completa: líneas que empiezan con '//'
  (ninguna línea tiene espacios al inicio).

QUÉ DEBES HACER
  1. Crea la función quitarComentarios(lineas: string[], removeComments: boolean): string[].
  2. Dentro de quitarComentarios:
     a) crea un array vacío de strings para el resultado;
     b) recorre lineas en orden;
     c) si removeComments es true y la línea empieza con '//', no la añadas;
        en cualquier otro caso añádela;
     d) devuelve el resultado, que es siempre un array nuevo, también cuando
        removeComments es false.
  3. Escribe en una línea // la opción de tsconfig.json que activa este comportamiento.
  4. Crea el array js y ejecuta COMPRUEBA.

COMPRUEBA
  const js: string[] = ['// saludo', 'const a = 1;', 'const url = "http://x.com";', '// fin'];
  console.log(quitarComentarios(js, true));   // ['const a = 1;', 'const url = "http://x.com";']
  console.log(quitarComentarios(js, false));  // ['// saludo', 'const a = 1;', 'const url = "http://x.com";', '// fin']
  console.log(quitarComentarios(js, false) === js); // false
  console.log(quitarComentarios(['// a', '// b'], true)); // []
  console.log(quitarComentarios([], true));   // []
  console.log(js.length);                     // 4

ESTO DEBE FALLAR
  // quitarComentarios(js);            → falta el argumento obligatorio removeComments.
  // quitarComentarios(js, 'true');    → removeComments debe ser boolean.

EXPLICA
  ¿Por qué la línea con 'http://x.com' se conserva aunque contenga '//'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 15 — Elegir las opciones según la necesidad
/*
SITUACIÓN
  Cada necesidad se resuelve con una opción de tsconfig.json: depurar → sourceMap;
  publicar una librería → declaration; navegar de un tipo a su fuente → declaration
  y declarationMap (declarationMap exige declaration); código limpio → removeComments.
  Recibes cualquier cantidad de necesidades.

QUÉ DEBES HACER
  1. Crea la función opcionesPara(...necesidades: string[]): string[] con un
     parámetro rest.
  2. Dentro de opcionesPara:
     a) crea un array vacío de strings;
     b) recorre necesidades en orden y aplica la que corresponda:
        'depurar' → 'sourceMap'; 'publicar' → 'declaration';
        'navegar' → 'declaration' y después 'declarationMap';
        'limpio' → 'removeComments'; cualquier otra palabra no añade nada;
     c) una opción no se añade si ya está en el array;
     d) devuelve el array.
  3. Escribe en líneas // el fragmento de compilerOptions para las necesidades
     'depurar' y 'navegar' juntas, con todas las opciones en true.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(opcionesPara('depurar'));                // ['sourceMap']
  console.log(opcionesPara('navegar'));                // ['declaration', 'declarationMap']
  console.log(opcionesPara('navegar', 'publicar'));    // ['declaration', 'declarationMap']
  console.log(opcionesPara('publicar', 'navegar', 'depurar', 'limpio'));
  // ['declaration', 'declarationMap', 'sourceMap', 'removeComments']
  console.log(opcionesPara('volar'));                  // []
  console.log(opcionesPara());                         // []

ESTO DEBE FALLAR
  // opcionesPara(['depurar']);  → cada argumento debe ser string, no un arreglo.
  // opcionesPara(1);            → el argumento debe ser string.

EXPLICA
  ¿Por qué 'navegar' añade también 'declaration'? ¿Qué error daría tsc si no lo hiciera?
*/
(() => {
    // Tu solución.
})();

// TRAMO 4 — TSC Y TSC --WATCH: EJERCICIOS 16 AL 18

// !EJERCICIO 16 — Qué comando ejecutar
/*
SITUACIÓN
  tsc --init crea el tsconfig.json. tsc compila el proyecto una vez y termina.
  tsc --watch compila y se queda observando los archivos para recompilar cuando
  detecta cambios. Decides qué comandos ejecutar y en qué orden.

QUÉ DEBES HACER
  1. Crea la función comandosPara(hayTsconfig: boolean, vigilar: boolean = false): string[].
  2. Dentro de comandosPara:
     a) crea un array vacío de strings;
     b) si hayTsconfig es false, añade 'tsc --init';
     c) si vigilar es true, añade 'tsc --watch'; si no, añade 'tsc';
     d) devuelve el array.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(comandosPara(true));              // ['tsc']
  console.log(comandosPara(false));             // ['tsc --init', 'tsc']
  console.log(comandosPara(true, true));        // ['tsc --watch']
  console.log(comandosPara(false, true));       // ['tsc --init', 'tsc --watch']
  console.log(comandosPara(true, undefined));   // ['tsc']

ESTO DEBE FALLAR
  // comandosPara();         → falta el argumento obligatorio hayTsconfig.
  // comandosPara('si');     → hayTsconfig debe ser boolean.

EXPLICA
  ¿Por qué vigilar puede omitirse y hayTsconfig no? ¿Qué pasa si pasas undefined en
  la posición de vigilar?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 17 — Un observador de archivos
/*
SITUACIÓN
  En este modelo, tsc --watch hace una compilación al arrancar y otra cada vez que
  se guarda un archivo mientras sigue activo. Vas a representarlo con un objeto que
  guarda su propio estado y lo cambia con this.

QUÉ DEBES HACER
  1. Crea el tipo Vigilante con estas propiedades: activo (boolean),
     compilaciones (number), arrancar (función sin parámetros que devuelve boolean),
     guardar (función sin parámetros que devuelve boolean) y detener (función sin
     parámetros que no devuelve nada, void).
  2. Crea el objeto vigilante de tipo Vigilante con activo en false y compilaciones en 0.
  3. Método arrancar(): si activo ya es true, devuelve false sin cambiar nada; si no,
     pon activo en true, suma 1 a compilaciones (la compilación inicial) y devuelve true.
  4. Método guardar(): si activo es false, devuelve false sin cambiar nada; si no,
     suma 1 a compilaciones y devuelve true.
  5. Método detener(): pon activo en false; no devuelve nada.
  6. Dentro de los métodos accede al objeto con this.
  7. Ejecuta COMPRUEBA en orden: cada línea depende del estado que dejó la anterior.

COMPRUEBA
  console.log(vigilante.guardar());         // false
  console.log(vigilante.arrancar());        // true
  console.log(vigilante.arrancar());        // false
  console.log(vigilante.guardar());         // true
  console.log(vigilante.guardar());         // true
  console.log(vigilante.compilaciones);     // 3
  console.log(vigilante.detener());         // undefined
  console.log(vigilante.guardar());         // false
  console.log(vigilante.compilaciones);     // 3
  console.log(vigilante.arrancar());        // true
  console.log(vigilante.compilaciones);     // 4

ESTO DEBE FALLAR
  // vigilante.compilaciones = 'dos';  → compilaciones es number.
  // vigilante.reiniciar();            → el tipo Vigilante no tiene reiniciar.

EXPLICA
  ¿Por qué arrancar() por segunda vez devuelve false y no suma una compilación?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 18 — Cuántas compilaciones hace una sesión
/*
SITUACIÓN
  En este modelo de una sesión de tsc --watch, guardar un archivo que pertenece al
  proyecto provoca una recompilación; guardar uno que no pertenece no hace nada.
  Recibes los archivos guardados, en orden, y quieres contar las compilaciones.

QUÉ DEBES HACER
  1. Crea la función compilacionesDeSesion(guardados: string[], carpeta: string,
     exclude: string[]): number.
  2. Dentro de compilacionesDeSesion:
     a) crea el contador con valor 1 (la compilación inicial al arrancar);
     b) recorre guardados en orden; un archivo pertenece al proyecto si empieza con
        '{carpeta}/', termina en '.ts' y no es igual a ninguna entrada de exclude ni
        empieza con '{entrada}/';
     c) por cada guardado que pertenece, suma 1 al contador (aunque se repita);
     d) devuelve el contador.
  3. Escribe en una línea // el comando que inicia la sesión.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const guardados: string[] = ['src/app.ts', 'src/pruebas/t1.ts', 'src/leeme.md', 'src/app.ts', 'src/util/fecha.ts'];
  console.log(compilacionesDeSesion(guardados, 'src', ['src/pruebas'])); // 4
  console.log(compilacionesDeSesion(guardados, 'src', []));              // 5
  console.log(compilacionesDeSesion(['otros/x.ts'], 'src', []));         // 1
  console.log(compilacionesDeSesion([], 'src', []));                     // 1

ESTO DEBE FALLAR
  // compilacionesDeSesion('src/app.ts', 'src', []);  → guardados debe ser un arreglo.
  // const texto: string = compilacionesDeSesion([], 'src', []);  → devuelve number.

EXPLICA
  ¿Por qué el resultado nunca es 0, ni siquiera sin guardados?
*/
(() => {
    // Tu solución.
})();

// TRAMO 5 — STRICT EN EL CÓDIGO DE 03, 04 Y 05: EJERCICIOS 19 AL 28

// !EJERCICIO 19 — Booleano o null
/*
SITUACIÓN
  Con strict activado, null y undefined no se pueden asignar a un boolean: hay que
  declarar la unión boolean | null y comprobar null antes de usar el valor. Sin
  strict (sección 03) esa asignación sí compilaba.

QUÉ DEBES HACER
  1. Crea la función esActivo(valor: boolean | null): string.
  2. Dentro de esActivo, en este orden:
     a) si valor es null (compara con ===), devuelve 'sin dato';
     b) si valor es true, devuelve 'activo';
     c) en otro caso devuelve 'inactivo'.
  3. Escribe en líneas // el fragmento de compilerOptions del ejemplo del Apuntes:
     target 'esnext', module 'nodenext', strict true y removeComments true.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(esActivo(true));    // 'activo'
  console.log(esActivo(false));   // 'inactivo'
  console.log(esActivo(null));    // 'sin dato'

ESTO DEBE FALLAR
  // let isUser: boolean = null;   → con strict, null no es asignable a boolean.
  // esActivo(undefined);          → undefined no es boolean | null.

EXPLICA
  ¿Compilaría la línea de isUser si strict fuese false? ¿Qué opción de tsconfig.json
  es la responsable?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 20 — Parámetro opcional y tipo implícito
/*
SITUACIÓN
  Con strict, un parámetro opcional vale number | undefined dentro de la función y
  hay que comprobarlo antes de calcular. Además, un parámetro sin tipo se considera
  un any implícito y TypeScript lo rechaza.

QUÉ DEBES HACER
  1. Crea la función precioFinal(precio: number, descuento?: number): number.
     Supón precio >= 0 y, si viene, descuento entre 0 y 100 (porcentaje).
  2. Dentro de precioFinal:
     a) si descuento es undefined, devuelve precio sin cambios;
     b) si no, devuelve precio - precio * descuento / 100.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(precioFinal(200));        // 200
  console.log(precioFinal(200, 25));    // 150
  console.log(precioFinal(200, 0));     // 200
  console.log(precioFinal(80, 50));     // 40
  console.log(precioFinal(200, 100));   // 0
  console.log(precioFinal(0, 10));      // 0

ESTO DEBE FALLAR
  // const doble = (n) => n * 2;                 → n no tiene tipo: any implícito.
  // const mitad = (d?: number): number => d / 2;  → d puede ser undefined.
  // precioFinal();                              → falta el argumento obligatorio precio.

EXPLICA
  ¿Qué valor tiene descuento dentro de la función cuando llamas a precioFinal(200)
  y qué hace TypeScript con strict si lo usas sin comprobarlo antes?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 21 — Propiedad opcional de un objeto
/*
SITUACIÓN
  En un tipo de objeto, una propiedad con ? puede faltar. Con strict, leerla da
  number | undefined y no se puede sumar sin comprobar antes.

QUÉ DEBES HACER
  1. Crea el tipo Hero con name (string, obligatoria), age (number, opcional) y
     powers (string[], obligatoria).
  2. Crea la función edadEnAnios(h: Hero, anios: number): number | undefined.
  3. Dentro de edadEnAnios:
     a) si h.age es undefined, rechaza;
     b) si no, devuelve h.age + anios.
  4. Crea los tres héroes de COMPRUEBA y ejecuta las líneas.

COMPRUEBA
  const barry: Hero = { name: 'Barry', age: 24, powers: ['Velocidad'] };
  const bruce: Hero = { name: 'Bruce', powers: ['Ninguno'] };
  const bebe: Hero = { name: 'Bebé', age: 0, powers: [] };
  console.log(edadEnAnios(barry, 10));   // 34
  console.log(edadEnAnios(bruce, 10));   // undefined
  console.log(edadEnAnios(bebe, 5));     // 5

ESTO DEBE FALLAR
  // const siguiente: number = edadEnAnios(barry, 1);  → puede devolver undefined.
  // const mas = (h: Hero): number => h.age + 1;       → age puede ser undefined.
  // const sinPoderes: Hero = { name: 'X' };           → falta la propiedad obligatoria powers.

EXPLICA
  ¿Por qué comparar con undefined es más seguro que escribir if (!h.age)?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 22 — El más joven, si lo hay
/*
SITUACIÓN
  Buscas el héroe más joven de una lista. Algunos no tienen edad registrada y la
  lista puede estar vacía, así que a veces no hay respuesta.

QUÉ DEBES HACER
  1. Crea el tipo Hero con name (string), age (number, opcional) y powers (string[]).
  2. Crea la función masJoven(heroes: Hero[]): string | undefined.
  3. Dentro de masJoven:
     a) declara nombre (string | undefined) y menor (number | undefined), ambas sin
        valor inicial;
     b) recorre heroes en orden; ignora los que no tienen age;
     c) para los demás: si menor es undefined o su age es estrictamente menor que
        menor, guarda su age en menor y su name en nombre (un empate no reemplaza);
     d) devuelve nombre.
  4. Crea los arrays de COMPRUEBA y ejecuta las líneas.

COMPRUEBA
  const equipo: Hero[] = [
      { name: 'Clark', age: 60, powers: [] },
      { name: 'Barry', age: 24, powers: [] },
      { name: 'Bruce', powers: [] },
      { name: 'Diana', age: 24, powers: [] },
  ];
  const conBebe: Hero[] = [{ name: 'Clark', age: 60, powers: [] }, { name: 'Bebé', age: 0, powers: [] }];
  console.log(masJoven(equipo));                              // 'Barry'
  console.log(masJoven(conBebe));                             // 'Bebé'
  console.log(masJoven([{ name: 'Bruce', powers: [] }]));     // undefined
  console.log(masJoven([]));                                  // undefined

ESTO DEBE FALLAR
  // const nombreSeguro: string = masJoven([]);   → puede devolver undefined.
  // masJoven([]).toUpperCase();                  → el resultado puede ser undefined.

EXPLICA
  ¿Por qué Diana no reemplaza a Barry? ¿Y por qué 'Bebé' con edad 0 sí cuenta?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 23 — Opcional, valor por defecto y strict
/*
SITUACIÓN
  Una etiqueta de persona lleva nombre, apellido opcional y una opción para pasarla a
  mayúsculas. Un parámetro con valor por defecto se puede omitir; un parámetro
  obligatorio no puede ir después de uno opcional.

QUÉ DEBES HACER
  1. Crea la función etiqueta(nombre: string, apellido?: string,
     mayusculas: boolean = false): string.
  2. Dentro de etiqueta:
     a) arma el texto '{nombre} {apellido}', pero si apellido falta o es una cadena
        vacía usa 'Sin apellido' en su lugar (el operador || sirve);
     b) si mayusculas es true, pasa todo el texto a mayúsculas con toUpperCase();
     c) devuelve el texto.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(etiqueta('Tony', 'Stark'));              // 'Tony Stark'
  console.log(etiqueta('Tony'));                       // 'Tony Sin apellido'
  console.log(etiqueta('Tony', 'Stark', true));        // 'TONY STARK'
  console.log(etiqueta('Tony', undefined, true));      // 'TONY SIN APELLIDO'
  console.log(etiqueta('Tony', ''));                   // 'Tony Sin apellido'
  console.log(etiqueta('Tony', 'Stark', undefined));   // 'Tony Stark'

ESTO DEBE FALLAR
  // etiqueta();                                         → falta el argumento obligatorio nombre.
  // etiqueta('Tony', 'Stark', 'si');                    → mayusculas debe ser boolean.
  // const largo = (a?: string): number => a.length;     → a puede ser undefined.
  // const mal = (a?: string, b: string): string => b;   → un parámetro obligatorio no puede ir después de uno opcional.

EXPLICA
  ¿Cómo se conserva el valor por defecto de mayusculas cuando quieres enviar solo
  los dos primeros argumentos? ¿Y cuando quieres omitir el apellido pero enviar
  mayusculas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 24 — Una función que puede no existir
/*
SITUACIÓN
  Una calculadora busca una operación por su nombre. Si el nombre no existe no hay
  función que devolver, y con strict hay que comprobarlo antes de llamarla. El tipo
  función describe qué parámetros recibe y qué devuelve.

QUÉ DEBES HACER
  1. Crea el tipo Operacion: función que recibe dos number (x e y) y devuelve number.
  2. Crea la función buscarOperacion(nombre: string): Operacion | undefined que devuelve:
     'sumar' → x + y; 'restar' → x - y; 'multiplicar' → x * y; cualquier otro nombre
     → rechazo.
  3. Crea la función aplicar(nombre: string, x: number, y: number): number | undefined:
     a) busca la operación con buscarOperacion;
     b) si es undefined, rechaza;
     c) si no, la llama con x e y y devuelve el resultado.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(aplicar('sumar', 2, 3));         // 5
  console.log(aplicar('restar', 2, 3));        // -1
  console.log(aplicar('multiplicar', 4, 5));   // 20
  console.log(aplicar('dividir', 4, 2));       // undefined
  console.log(aplicar('restar', 5, 5));        // 0

ESTO DEBE FALLAR
  // buscarOperacion('sumar')(1, 2);                          → el resultado puede ser undefined y no se puede llamar.
  // const mala: Operacion = (x: string, y: string) => x + y;  → los parámetros deben ser number.
  // const texto: Operacion = () => 'hola';                    → debe devolver number.

EXPLICA
  ¿Qué comprobación obliga a hacer strict antes de llamar a la función que devuelve
  buscarOperacion?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 25 — Una cuenta con límite opcional
/*
SITUACIÓN
  Una cuenta guarda su saldo y puede tener un límite de sobregiro opcional. Los
  métodos modifican el objeto con this. Con strict, el límite (number | undefined)
  debe comprobarse antes de sumarlo.

QUÉ DEBES HACER
  1. Crea el tipo Cuenta con: saldo (number), limite (number, opcional), depositar
     (función con monto number que devuelve boolean) y retirar (función con monto
     number que devuelve boolean).
  2. Crea la función crearCuenta(saldo: number, limite?: number): Cuenta que construye
     un objeto con ese saldo y sus dos métodos. Solo si limite no es undefined,
     asígnalo después a la propiedad limite del objeto (no escribas limite: undefined).
  3. Método depositar(monto): si monto es 0 o menor, devuelve false; si no, suma monto
     a this.saldo y devuelve true.
  4. Método retirar(monto):
     a) si monto es 0 o menor, devuelve false;
     b) el disponible es saldo más el límite (0 si no hay límite);
     c) si monto es mayor que el disponible, devuelve false sin cambiar nada;
     d) si no, resta monto a this.saldo y devuelve true.
  5. Crea las dos cuentas de COMPRUEBA y ejecuta las líneas en orden.

COMPRUEBA
  const a: Cuenta = crearCuenta(100);
  const b: Cuenta = crearCuenta(50, 30);
  console.log(a.retirar(100));   // true
  console.log(a.retirar(1));     // false
  console.log(a.saldo);          // 0
  console.log(b.retirar(80));    // true
  console.log(b.retirar(1));     // false
  console.log(b.saldo);          // -30
  console.log(b.depositar(0));   // false
  console.log(b.depositar(10));  // true
  console.log(b.saldo);          // -20
  console.log(a.limite);         // undefined
  console.log(b.limite);         // 30
  console.log(a.saldo);          // 0

ESTO DEBE FALLAR
  // const total = (c: Cuenta): number => c.saldo + c.limite;  → limite puede ser undefined.
  // a.retirar();                                              → falta el argumento obligatorio monto.
  // a.saldo = 'cien';                                         → saldo es number.

EXPLICA
  ¿Por qué cambiar b no altera a? ¿Qué parte del código separa el estado de cada cuenta?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 26 — Una unión sin null
/*
SITUACIÓN
  Una variable con una unión de tipos acepta solo esos tipos; con strict, null y
  undefined no están incluidos si no se escriben. Antes de usar algo propio de un
  tipo hay que comprobar cuál es.

QUÉ DEBES HACER
  1. Crea el tipo Hero con name (string), age (number, opcional) y powers (string[]).
  2. Crea la función describir(v: string | number | Hero): string.
  3. Dentro de describir, en este orden:
     a) si typeof v es 'string', devuelve '{n} letras' con n la longitud del texto;
     b) si typeof v es 'number', devuelve 'par' si v % 2 es 0 y 'impar' si no
        (supón enteros);
     c) en otro caso v es un Hero: si age es undefined devuelve '{name}, edad desconocida';
        si no, devuelve '{name}, {age} años'.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(describir('Diego'));                                       // '5 letras'
  console.log(describir(''));                                            // '0 letras'
  console.log(describir(4));                                             // 'par'
  console.log(describir(7));                                             // 'impar'
  console.log(describir(0));                                             // 'par'
  console.log(describir({ name: 'Barry', age: 24, powers: [] }));        // 'Barry, 24 años'
  console.log(describir({ name: 'Bruce', powers: [] }));                 // 'Bruce, edad desconocida'
  console.log(describir({ name: 'Bebé', age: 0, powers: [] }));          // 'Bebé, 0 años'

ESTO DEBE FALLAR
  // describir(null);                                      → con strict, null no pertenece a la unión.
  // describir(true);                                      → boolean no pertenece a la unión.
  // const largo = (v: string | number): number => v.length;  → number no tiene length.

EXPLICA
  ¿Por qué dentro del último caso puedes leer v.name sin más comprobaciones?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 27 — Un enum y su ausencia
/*
SITUACIÓN
  Un nivel de volumen se representa con un enum numérico. Un valor fuera de rango no
  tiene nivel, y con strict ese caso debe declararse con null en el tipo de retorno.

QUÉ DEBES HACER
  1. Crea el enum AudioLevel con min = 0, medium = 5 y max = 10.
  2. Crea la función nivelDe(valor: number): AudioLevel | null:
     a) si valor está entre 0 y 3, ambos incluidos, devuelve AudioLevel.min;
     b) si es mayor que 3 y hasta 7 incluido, devuelve AudioLevel.medium;
     c) si es mayor que 7 y hasta 10 incluido, devuelve AudioLevel.max;
     d) en cualquier otro caso (negativo, mayor que 10, NaN) devuelve null.
  3. Crea la función etiquetaNivel(nivel: AudioLevel | null): string: si nivel es null
     devuelve 'fuera de rango'; si no, devuelve 'volumen {nivel}' (el número del enum).
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(etiquetaNivel(nivelDe(0)));       // 'volumen 0'
  console.log(etiquetaNivel(nivelDe(3)));       // 'volumen 0'
  console.log(etiquetaNivel(nivelDe(3.5)));     // 'volumen 5'
  console.log(etiquetaNivel(nivelDe(7)));       // 'volumen 5'
  console.log(etiquetaNivel(nivelDe(7.1)));     // 'volumen 10'
  console.log(etiquetaNivel(nivelDe(10)));      // 'volumen 10'
  console.log(etiquetaNivel(nivelDe(10.5)));    // 'fuera de rango'
  console.log(etiquetaNivel(nivelDe(-1)));      // 'fuera de rango'
  console.log(etiquetaNivel(nivelDe(NaN)));     // 'fuera de rango'
  console.log(nivelDe(8) === AudioLevel.max);   // true

ESTO DEBE FALLAR
  // const seguro: AudioLevel = nivelDe(4);  → puede devolver null.
  // etiquetaNivel(undefined);               → undefined no es AudioLevel | null.
  // nivelDe('3');                           → valor debe ser number.

EXPLICA
  ¿Por qué NaN acaba en null sin que tengas que comprobarlo de forma especial?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 28 — Sumar valores mezclados
/*
SITUACIÓN
  Una lista mezcla números, textos y valores ausentes (null). Quieres sumar lo que
  tenga sentido. Con strict, undefined no cabe en la lista si no se declara.

QUÉ DEBES HACER
  1. Crea el tipo Valor como la unión de number, string y null.
  2. Crea la función sumarTodo(valores: Valor[]): number.
  3. Dentro de sumarTodo:
     a) crea un acumulador numérico con valor 0;
     b) recorre valores en orden;
     c) un null no suma nada; un number suma su valor; un string suma su longitud;
     d) devuelve el acumulador.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(sumarTodo([1, 'ab', null, 4]));   // 7
  console.log(sumarTodo([]));                   // 0
  console.log(sumarTodo([null, null]));         // 0
  console.log(sumarTodo(['', 0]));              // 0
  console.log(sumarTodo([2.5, 'x']));           // 3.5

ESTO DEBE FALLAR
  // sumarTodo([1, undefined]);       → con strict, undefined no pertenece a Valor.
  // sumarTodo([true]);               → boolean no pertenece a Valor.
  // const total: number = null;      → con strict, null no es asignable a number.

EXPLICA
  ¿Qué comprobaciones necesitas hacer, y en qué orden, para poder sumar cada elemento
  sin que TypeScript proteste?
*/
(() => {
    // Tu solución.
})();

// TRAMO 6 — CONFIGURACIÓN Y CÓDIGO JUNTOS: EJERCICIOS 29 AL 38

// !EJERCICIO 29 — Salida completa de un proyecto
/*
SITUACIÓN
  Juntas rootDir, outDir, sourceMap y declaration deciden exactamente qué archivos
  deja tsc y dónde. Vas a calcular la lista completa para una lista de archivos
  fuente.

QUÉ DEBES HACER
  1. Crea la función salidasDeProyecto(origenes: string[], rootDir: string,
     outDir: string, sourceMap: boolean, declaration: boolean): string[] | undefined.
  2. Dentro de salidasDeProyecto:
     a) crea un array vacío de strings;
     b) recorre origenes en orden con un for clásico;
     c) si un origen no empieza con '{rootDir}/', rechaza en ese momento (TS6059);
     d) calcula la base: '{outDir}/' más el origen sin el prefijo '{rootDir}/' y sin
        el '.ts' final (supón que todos terminan en '.ts');
     e) añade '{base}.js'; si sourceMap es true añade '{base}.js.map'; si declaration
        es true añade '{base}.d.ts' (en ese orden);
     f) devuelve el array.
  3. Escribe en líneas // el fragmento de compilerOptions para la segunda comprobación
     (rootDir './src', outDir './dist', solo declaration activada).
  4. Crea el array o y ejecuta COMPRUEBA.

COMPRUEBA
  const o: string[] = ['src/app.ts', 'src/util/fecha.ts'];
  console.log(salidasDeProyecto(o, 'src', 'dist', true, false));
  // ['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map']
  console.log(salidasDeProyecto(o, 'src', 'dist', false, true));
  // ['dist/app.js', 'dist/app.d.ts', 'dist/util/fecha.js', 'dist/util/fecha.d.ts']
  console.log(salidasDeProyecto(o, 'src', 'build', true, true));
  // ['build/app.js', 'build/app.js.map', 'build/app.d.ts', 'build/util/fecha.js', 'build/util/fecha.js.map', 'build/util/fecha.d.ts']
  console.log(salidasDeProyecto(['otros/x.ts'], 'src', 'dist', true, true)); // undefined
  console.log(salidasDeProyecto([], 'src', 'dist', true, true));             // []

ESTO DEBE FALLAR
  // salidasDeProyecto(o, 'src', 'dist', true);                → falta el argumento obligatorio declaration.
  // salidasDeProyecto(o, 'src', 'dist', 'si', false);         → sourceMap debe ser boolean.

EXPLICA
  ¿Cuántos archivos produce cada .ts con las dos opciones auxiliares activadas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 30 — Compilar una lista con una configuración
/*
SITUACIÓN
  Una configuración agrupa todas las opciones en un objeto. A partir de ella y de
  la lista de archivos de la carpeta de trabajo, calculas la salida completa:
  primero se decide qué archivos entran (include y exclude) y después qué se genera
  para cada uno.

QUÉ DEBES HACER
  1. Crea el tipo Config con: rootDir, outDir y carpeta (string, obligatorias),
     exclude (string[], obligatoria), y sourceMap, declaration y declarationMap
     (boolean, opcionales). carpeta representa el patrón de include de esa carpeta.
  2. Crea la función compilar(rutas: string[], config: Config): string[].
  3. Dentro de compilar:
     a) crea un array vacío para el resultado;
     b) recorre rutas en orden; una ruta entra si empieza con '{carpeta}/', termina
        en '.ts' y no es igual a ninguna entrada de config.exclude ni empieza con
        '{entrada}/'. Supón que todas las que entran están dentro de rootDir;
     c) por cada ruta que entra calcula la base ('{outDir}/' más la ruta sin el
        prefijo '{rootDir}/' y sin '.ts') y añade '{base}.js';
     d) añade '{base}.js.map' si sourceMap es true, '{base}.d.ts' si declaration es
        true y '{base}.d.ts.map' si declarationMap es true (en ese orden). Una opción
        que falta cuenta como false. Supón que declarationMap solo llega con declaration;
     e) devuelve el resultado.
  4. Escribe en líneas // el tsconfig.json equivalente a config1 de COMPRUEBA.
  5. Crea rutas y las tres configuraciones, y ejecuta COMPRUEBA.

COMPRUEBA
  const rutas: string[] = ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts', 'src/leeme.md'];
  const config1: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: ['src/pruebas'], sourceMap: true };
  const config2: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [], declaration: true, declarationMap: true };
  const config3: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'nada', exclude: [] };
  console.log(compilar(rutas, config1));
  // ['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map']
  console.log(compilar(rutas, config2));
  // ['dist/app.js', 'dist/app.d.ts', 'dist/app.d.ts.map', 'dist/util/fecha.js', 'dist/util/fecha.d.ts', 'dist/util/fecha.d.ts.map', 'dist/pruebas/t1.js', 'dist/pruebas/t1.d.ts', 'dist/pruebas/t1.d.ts.map']
  console.log(compilar(rutas, config3));                                    // []
  console.log(compilar([], config1));                                       // []

ESTO DEBE FALLAR
  // const incompleta: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'src' };  → falta exclude.
  // const mala: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: 'dist' };  → exclude debe ser un arreglo.
  // const extra: Config = { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [], strict: true };  → strict no existe en este tipo.

EXPLICA
  ¿Por qué compilar usa config.sourceMap === true en lugar de comprobar solo que
  exista? ¿Qué valor tiene una opción opcional que no se escribió?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 31 — Validar antes de compilar
/*
SITUACIÓN
  tsc puede mostrar estos errores de configuración: declarationMap sin declaration
  (TS5069), ningún archivo en include (TS18003) o archivos fuera de rootDir (TS6059).
  Recopilas todos los problemas de una configuración.

QUÉ DEBES HACER
  1. Crea el tipo Config con: rootDir, outDir y carpeta (string), exclude (string[]),
     y declaration y declarationMap (boolean, opcionales). carpeta representa el
     patrón de include de esa carpeta.
  2. Crea la función validar(rutas: string[], config: Config): string[].
  3. Dentro de validar, en este orden:
     a) crea un array vacío de errores;
     b) si declarationMap es true y declaration no es true, añade
        'declarationMap requiere declaration';
     c) calcula los archivos del proyecto: rutas que empiezan con '{carpeta}/', terminan
        en '.ts' y no están excluidas (igual a una entrada o empezando con '{entrada}/');
     d) si no hay ninguno, añade 'No inputs were found';
     e) si hay, recorre esos archivos en orden y por cada uno que no empiece con
        '{rootDir}/' añade '{ruta} no está bajo rootDir';
     f) devuelve los errores (vacío si la configuración es válida).
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const rutas: string[] = ['src/app.ts', 'otros/libre.ts', 'src/pruebas/t1.ts'];
  console.log(validar(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: ['src/pruebas'] }));
  // []
  console.log(validar(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [], declarationMap: true }));
  // ['declarationMap requiere declaration']
  console.log(validar(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'nada', exclude: [] }));
  // ['No inputs were found']
  console.log(validar(['src/a.ts', 'lib/b.ts', 'lib/c.ts'], { rootDir: 'src', outDir: 'dist', carpeta: 'lib', exclude: [] }));
  // ['lib/b.ts no está bajo rootDir', 'lib/c.ts no está bajo rootDir']
  console.log(validar(['lib/b.ts'], { rootDir: 'src', outDir: 'dist', carpeta: 'lib', exclude: [], declarationMap: true }));
  // ['declarationMap requiere declaration', 'lib/b.ts no está bajo rootDir']
  console.log(validar(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [], declaration: true, declarationMap: true }));
  // []

ESTO DEBE FALLAR
  // validar(rutas);                                           → falta el argumento obligatorio config.
  // validar(rutas, { rootDir: 'src', carpeta: 'src', exclude: [] });  → falta outDir.

EXPLICA
  ¿Por qué cuando no hay archivos en el proyecto no se revisa rootDir?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 32 — Resultado: errores o archivos
/*
SITUACIÓN
  En este modelo, una configuración con errores se considera inválida y no genera
  archivos; una sin errores sí. Une validar y compilar en una sola respuesta.

QUÉ DEBES HACER
  1. Copia a tu solución, de los ejercicios 30 y 31, el tipo Config (con
     rootDir, outDir, carpeta, exclude, sourceMap, declaration y declarationMap) y
     las funciones compilar y validar. Resumen: validar devuelve la lista de errores
     de una configuración; compilar devuelve la lista de archivos generados.
  2. Crea el tipo Resultado con errores (string[]) y archivos (string[]).
  3. Crea la función resultado(rutas: string[], config: Config): Resultado:
     a) obtén los errores con validar;
     b) si hay al menos uno, devuelve un objeto con esos errores y archivos vacío;
     c) si no hay ninguno, devuelve un objeto con errores vacío y los archivos de compilar.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const rutas: string[] = ['src/app.ts', 'src/pruebas/t1.ts', 'otros/libre.ts'];
  console.log(resultado(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: ['src/pruebas'], sourceMap: true }));
  // { errores: [], archivos: ['dist/app.js', 'dist/app.js.map'] }
  console.log(resultado(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [], declarationMap: true }));
  // { errores: ['declarationMap requiere declaration'], archivos: [] }
  console.log(resultado(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'nada', exclude: [] }));
  // { errores: ['No inputs were found'], archivos: [] }
  console.log(resultado(rutas, { rootDir: 'lib', outDir: 'dist', carpeta: 'src', exclude: ['src/pruebas'] }));
  // { errores: ['src/app.ts no está bajo rootDir'], archivos: [] }

ESTO DEBE FALLAR
  // const r: Resultado = { errores: [] };                       → falta archivos.
  // const n: number = resultado(rutas, { rootDir: 'src', outDir: 'dist', carpeta: 'src', exclude: [] });  → devuelve Resultado.

EXPLICA
  ¿Qué garantiza tu función sobre archivos cuando errores no está vacío?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 33 — Importar vence a exclude
/*
SITUACIÓN
  Un archivo excluido o fuera de include entra igualmente en el proyecto si otro
  archivo del proyecto lo importa (Apuntes, sección 4). Cada archivo declara qué
  archivos importa, y tú calculas el conjunto final recorriendo esas importaciones.

QUÉ DEBES HACER
  1. Crea el tipo Archivo con ruta (string) e importa (string[]).
  2. Crea la función entran(archivos: Archivo[], carpeta: string, exclude: string[]):
     string[] que devuelve rutas.
  3. Dentro de entran:
     a) crea dos arrays vacíos de strings: resultado y pendientes;
     b) recorre archivos en orden; si la ruta empieza con '{carpeta}/', termina en
        '.ts' y no está excluida (igual a una entrada o empezando con '{entrada}/'),
        añádela a resultado y a pendientes;
     c) mientras queden pendientes sin procesar, toma el primero que no hayas
        procesado (usa un contador de posición, sin borrar elementos de pendientes);
        busca en archivos el objeto cuya ruta sea esa (for clásico, compara por
        ruta) y recorre su lista importa: cada ruta que sea la de algún objeto de
        archivos y todavía no esté en resultado se añade a resultado y a pendientes;
        las rutas que no corresponden a ningún objeto de archivos se ignoran;
     d) devuelve resultado, en el orden en que se añadió cada ruta.
  4. Escribe en líneas // el tsconfig.json de solo include (carpeta src) y exclude
     ('src/pruebas'), y comprueba en tu banco que tsc --listFilesOnly lista también
     los archivos importados (opcional).
  5. Crea los archivos de prueba y ejecuta COMPRUEBA.

COMPRUEBA
  const app: Archivo = { ruta: 'src/app.ts', importa: ['otros/ayuda.ts', 'src/pruebas/t1.ts', 'externo/lib.ts'] };
  const fecha: Archivo = { ruta: 'src/util/fecha.ts', importa: [] };
  const t1: Archivo = { ruta: 'src/pruebas/t1.ts', importa: [] };
  const t2: Archivo = { ruta: 'src/pruebas/t2.ts', importa: ['otros/base.ts'] };
  const ayuda: Archivo = { ruta: 'otros/ayuda.ts', importa: ['otros/base.ts'] };
  const base: Archivo = { ruta: 'otros/base.ts', importa: [] };
  const libre: Archivo = { ruta: 'otros/libre.ts', importa: [] };
  const todos: Archivo[] = [app, fecha, t1, t2, ayuda, base, libre];
  console.log(entran(todos, 'src', ['src/pruebas']));
  // ['src/app.ts', 'src/util/fecha.ts', 'otros/ayuda.ts', 'src/pruebas/t1.ts', 'otros/base.ts']
  console.log(entran(todos, 'src', []));
  // ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts', 'src/pruebas/t2.ts', 'otros/ayuda.ts', 'otros/base.ts']
  console.log(entran(todos, 'nada', []));                  // []
  console.log(entran([libre], 'src', []));                 // []

ESTO DEBE FALLAR
  // entran(['src/app.ts'], 'src', []);                       → debe ser un arreglo de Archivo, no de strings.
  // const mal: Archivo = { ruta: 'src/x.ts' };               → falta importa.

EXPLICA
  ¿Por qué 'src/pruebas/t2.ts' queda fuera con exclude ['src/pruebas'] pero
  'src/pruebas/t1.ts' entra?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 34 — Un proyecto que va creciendo
/*
SITUACIÓN
  Un proyecto guarda su lista de archivos fuente y rechaza los que no puede
  compilar. Cada proyecto es independiente: dos proyectos distintos no comparten
  archivos.

QUÉ DEBES HACER
  1. Crea el tipo Proyecto con: archivos (string[]), agregar (función que recibe ruta
     string y devuelve boolean), salidas (función sin parámetros que devuelve string[])
     y cantidad (función sin parámetros que devuelve number).
  2. Crea la función crearProyecto(rootDir: string, outDir: string): Proyecto que
     devuelve un objeto con archivos vacío y los tres métodos, que acceden al objeto
     con this.
  3. Método agregar(ruta), en este orden:
     a) si ruta no empieza con '{rootDir}/', devuelve false;
     b) si ruta no termina en '.ts', devuelve false;
     c) si ruta ya está en this.archivos, devuelve false;
     d) en otro caso la añade a this.archivos y devuelve true.
     Tras un rechazo, el proyecto no cambia.
  4. Método salidas(): devuelve un array nuevo con la ruta de salida de cada archivo,
     en el orden en que se agregaron (sin '{rootDir}/', '.ts' cambiado por '.js',
     con prefijo '{outDir}/').
  5. Método cantidad(): devuelve cuántos archivos hay en this.archivos.
  6. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const p: Proyecto = crearProyecto('src', 'dist');
  console.log(p.agregar('src/app.ts'));         // true
  console.log(p.agregar('src/app.ts'));         // false
  console.log(p.agregar('otros/x.ts'));         // false
  console.log(p.agregar('srcx/a.ts'));          // false
  console.log(p.agregar('src/leeme.md'));       // false
  console.log(p.agregar('src/util/fecha.ts'));  // true
  console.log(p.cantidad());                    // 2
  console.log(p.salidas());                     // ['dist/app.js', 'dist/util/fecha.js']
  p.salidas().push('basura');
  console.log(p.salidas().length);              // 2
  const q: Proyecto = crearProyecto('lib', 'build');
  console.log(q.agregar('lib/a.ts'));           // true
  console.log(q.salidas());                     // ['build/a.js']
  console.log(p.cantidad());                    // 2
  console.log(q.cantidad());                    // 1

ESTO DEBE FALLAR
  // p.agregar();                  → falta el argumento obligatorio ruta.
  // p.agregar(5);                 → ruta debe ser string.
  // crearProyecto('src');         → falta el argumento obligatorio outDir.

EXPLICA
  ¿Por qué modificar el resultado de p.salidas() no cambia el proyecto?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 35 — Leer una línea de tsconfig.json
/*
SITUACIÓN
  Tienes una línea de texto de un tsconfig.json, como "rootDir": "./src", y quieres
  separarla en clave y valor. Hay líneas que no tienen esa forma (una llave suelta,
  una línea vacía) y se rechazan.

QUÉ DEBES HACER
  1. Crea la función leerLinea(linea: string): [string, string] | undefined.
     El resultado es una tupla [clave, valor].
  2. Dentro de leerLinea:
     a) busca la primera ':' con indexOf; si no hay, rechaza;
     b) la clave es lo que hay antes de esa ':', sin comillas dobles y sin espacios
        a los lados (quita las comillas con split('"').join('') y luego trim());
     c) el valor es lo que hay después de esa ':', procesado en este orden: quitar
        todas las comillas dobles, trim(), y si termina en ',' quitar esa última coma;
     d) devuelve la tupla [clave, valor].
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(leerLinea('"rootDir": "./src",'));                    // ['rootDir', './src']
  console.log(leerLinea('    "strict": true'));                     // ['strict', 'true']
  console.log(leerLinea('"compilerOptions": {'));                   // ['compilerOptions', '{']
  console.log(leerLinea('"exclude": ["dist", "node_modules"],'));   // ['exclude', '[dist, node_modules]']
  console.log(leerLinea('"hora": "10:30"'));                        // ['hora', '10:30']
  console.log(leerLinea('}'));                                      // undefined
  console.log(leerLinea(''));                                       // undefined

ESTO DEBE FALLAR
  // const par: [string, string] = leerLinea('"a": 1');  → puede devolver undefined.
  // leerLinea(5);                                        → linea debe ser string.

EXPLICA
  ¿Por qué se usa la primera ':' y no la última? ¿Qué devuelve tu función para
  '"hora": "10:30"'?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 36 — De líneas de texto a opciones
/*
SITUACIÓN
  Con leerLinea puedes convertir las líneas de un tsconfig.json en un objeto de
  opciones tipado. Las claves desconocidas y los valores inválidos se ignoran, y si
  una clave se repite gana la última.

QUÉ DEBES HACER
  1. Crea el tipo Opciones con rootDir y outDir (string, opcionales) y sourceMap,
     declaration, declarationMap y removeComments (boolean, opcionales).
  2. Copia a tu solución leerLinea del ejercicio 35 (recibe una línea y devuelve la
     tupla [clave, valor] o undefined si no tiene ':').
  3. Crea la función leerOpciones(lineas: string[]): Opciones:
     a) crea un objeto vacío de tipo Opciones;
     b) por cada línea llama a leerLinea; si da undefined, pasa a la siguiente;
     c) si la clave es 'rootDir' o 'outDir', guarda el valor tal cual (string);
     d) si la clave es sourceMap, declaration, declarationMap o removeComments: el
        valor 'true' guarda true, el valor 'false' guarda false y cualquier otro
        valor se ignora;
     e) cualquier otra clave se ignora; una clave repetida sobrescribe a la anterior;
     f) devuelve el objeto.
     Asigna una propiedad solo cuando tienes un valor para ella; no escribas
     opciones.rootDir = undefined.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const texto: string[] = ['{', '  "compilerOptions": {', '    "rootDir": "./src",', '    "outDir": "./dist",',
      '    "sourceMap": true,', '    "declaration": false,', '    "strict": true', '  }', '}'];
  console.log(leerOpciones(texto));
  // { rootDir: './src', outDir: './dist', sourceMap: true, declaration: false }
  console.log(leerOpciones([]));                                                    // {}
  console.log(leerOpciones(['"sourceMap": quizá', '"removeComments": true', '"sourceMap": false', '"sourceMap": true']));
  // { removeComments: true, sourceMap: true }
  console.log(leerOpciones(['"sourceMap": quizá']));                                // {}

ESTO DEBE FALLAR
  // const a: Opciones = { rootDir: 5 };           → rootDir debe ser string.
  // const b: Opciones = { sourceMap: 'true' };    → sourceMap debe ser boolean.
  // const c: Opciones = { nombre: 'x' };          → nombre no existe en Opciones.

EXPLICA
  ¿Qué diferencia hay entre que declaration valga false y que declaration no
  aparezca en el objeto?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 37 — Recompilar cuando se guarda una importación
/*
SITUACIÓN
  En este modelo de tsc --watch, guardar un archivo que el proyecto importa también
  provoca una recompilación, aunque esté fuera de include o excluido. Recibes los archivos
  guardados, en orden, y cuentas las compilaciones de la sesión.

QUÉ DEBES HACER
  1. Copia a tu solución, del ejercicio 33, el tipo Archivo y la función entran
     (devuelve las rutas del proyecto: include, menos exclude, más las importadas).
  2. Crea la función recompilaciones(guardados: string[], archivos: Archivo[],
     carpeta: string, exclude: string[]): number:
     a) calcula la lista de rutas del proyecto con entran;
     b) empieza el contador en 1 (compilación inicial de tsc --watch);
     c) por cada guardado que esté en esa lista, suma 1 (aunque se repita);
     d) devuelve el contador.
  3. Escribe en una línea // el comando que inicia la sesión.
  4. Copia los archivos de prueba de COMPRUEBA y ejecútala.

COMPRUEBA
  const app: Archivo = { ruta: 'src/app.ts', importa: ['otros/ayuda.ts', 'src/pruebas/t1.ts'] };
  const t1: Archivo = { ruta: 'src/pruebas/t1.ts', importa: [] };
  const t2: Archivo = { ruta: 'src/pruebas/t2.ts', importa: [] };
  const ayuda: Archivo = { ruta: 'otros/ayuda.ts', importa: [] };
  const libre: Archivo = { ruta: 'otros/libre.ts', importa: [] };
  const todos: Archivo[] = [app, t1, t2, ayuda, libre];
  const guardados: string[] = ['src/app.ts', 'otros/ayuda.ts', 'otros/libre.ts', 'src/pruebas/t2.ts', 'src/pruebas/t1.ts', 'src/app.ts'];
  console.log(recompilaciones(guardados, todos, 'src', ['src/pruebas'])); // 5
  console.log(recompilaciones(guardados, todos, 'src', []));              // 6
  console.log(recompilaciones(['otros/libre.ts'], todos, 'src', []));     // 1
  console.log(recompilaciones([], todos, 'src', []));                     // 1

ESTO DEBE FALLAR
  // recompilaciones(guardados, todos, 'src');                 → falta el argumento obligatorio exclude.
  // recompilaciones(guardados, ['src/app.ts'], 'src', []);    → archivos debe ser un arreglo de Archivo.

EXPLICA
  ¿Por qué guardar 'otros/ayuda.ts' recompila aunque esté fuera de include?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 38 — Describir una configuración con strict
/*
SITUACIÓN
  Resumes una configuración cuyos campos pueden faltar. Con strict, cada campo
  opcional hay que comprobarlo antes de usarlo; el resumen reúne target, module,
  strict, la salida y las opciones auxiliares activas.

QUÉ DEBES HACER
  1. Crea el tipo Config con todas sus propiedades opcionales: target y module
     (string), strict, removeComments, sourceMap, declaration y declarationMap
     (boolean), rootDir y outDir (string).
  2. Crea la función describirConfig(c: Config): string[] que devuelve cinco líneas,
     en este orden:
     a) 'target: {target}', con 'sin definir' si falta o está vacío;
     b) 'module: {module}', con 'sin definir' si falta o está vacío;
     c) 'strict: sí' si strict es true y 'strict: no' en cualquier otro caso;
     d) 'salida: {rootDir} -> {outDir}', con '(sin rootDir)' o '(sin outDir)' en lugar
        del que falte;
     e) 'extras: {lista}': los nombres de las opciones que valen true, en el orden
        sourceMap, declaration, declarationMap, removeComments, unidos con ', ';
        si no hay ninguna, 'extras: ninguno'.
  3. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(describirConfig({ target: 'esnext', module: 'nodenext', strict: true, removeComments: true,
      rootDir: './src', outDir: './dist', sourceMap: true }));
  // ['target: esnext', 'module: nodenext', 'strict: sí', 'salida: ./src -> ./dist', 'extras: sourceMap, removeComments']
  console.log(describirConfig({}));
  // ['target: sin definir', 'module: sin definir', 'strict: no', 'salida: (sin rootDir) -> (sin outDir)', 'extras: ninguno']
  console.log(describirConfig({ strict: false, declaration: true, declarationMap: true, outDir: 'build' }));
  // ['target: sin definir', 'module: sin definir', 'strict: no', 'salida: (sin rootDir) -> build', 'extras: declaration, declarationMap']
  console.log(describirConfig({ sourceMap: false, removeComments: false }));
  // ['target: sin definir', 'module: sin definir', 'strict: no', 'salida: (sin rootDir) -> (sin outDir)', 'extras: ninguno']

ESTO DEBE FALLAR
  // const largo = (c: Config): number => c.outDir.length;  → outDir puede ser undefined.
  // describirConfig({ strict: 'si' });                     → strict debe ser boolean.
  // describirConfig({ outdir: './dist' });                 → outdir no existe: la propiedad se llama outDir.

EXPLICA
  ¿Qué opción de tsconfig.json hace que TypeScript te obligue a comprobar los campos
  opcionales antes de leerlos?
*/
(() => {
    // Tu solución.
})();

// TRAMO 7 — PROYECTO COMPLETO: EJERCICIOS 39 AL 50

// !EJERCICIO 39 — Agrupar la salida por carpeta
/*
SITUACIÓN
  Tras compilar con outDir, revisas la carpeta de salida. Quieres ver, para cada
  carpeta, qué archivos contiene. Cada grupo es una tupla [carpeta, nombres].

QUÉ DEBES HACER
  1. Crea la función agruparPorCarpeta(rutas: string[]): [string, string[]][].
     Supón que cada ruta contiene al menos una '/'.
  2. Dentro de agruparPorCarpeta:
     a) crea un array vacío de grupos;
     b) recorre rutas en orden; la carpeta es lo que hay antes de la última '/' y el
        nombre es lo que hay después;
     c) busca (for clásico) un grupo cuya carpeta sea igual; si existe, añade el
        nombre a su lista de nombres; si no, añade un grupo nuevo con esa carpeta y
        una lista que contenga solo ese nombre;
     d) devuelve los grupos, en el orden en que aparecieron las carpetas; dentro de
        cada grupo, los nombres van en el orden de las rutas.
  3. Escribe en una línea // la opción de tsconfig.json que decide que el primer
     grupo de COMPRUEBA sea 'dist'.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const salida: string[] = ['dist/app.js', 'dist/util/fecha.js', 'dist/app.js.map', 'dist/util/hora.js', 'dist/models/user.js'];
  console.log(agruparPorCarpeta(salida));
  // [['dist', ['app.js', 'app.js.map']], ['dist/util', ['fecha.js', 'hora.js']], ['dist/models', ['user.js']]]
  console.log(agruparPorCarpeta([]));      // []
  console.log(salida.length);              // 5

ESTO DEBE FALLAR
  // const g: [string, string][] = agruparPorCarpeta([]);  → el segundo elemento de cada grupo es string[], no string.
  // agruparPorCarpeta('dist/a.js');                        → se espera un arreglo.

EXPLICA
  ¿Por qué agruparPorCarpeta no modifica el arreglo salida?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 40 — Qué cambió entre dos configuraciones
/*
SITUACIÓN
  Cambias algunas opciones de tsconfig.json y quieres un listado de las diferencias.
  Una opción que falta no es lo mismo que una opción en false.

QUÉ DEBES HACER
  1. Crea el tipo Opciones con rootDir y outDir (string, opcionales) y sourceMap,
     declaration, declarationMap y removeComments (boolean, opcionales).
  2. Crea la función cambios(a: Opciones, b: Opciones): string[].
  3. Dentro de cambios:
     a) crea un array vacío de strings;
     b) revisa estas seis opciones, en este orden: rootDir, outDir, sourceMap,
        declaration, declarationMap, removeComments;
     c) si el valor en a es distinto del valor en b (sin conversiones: un valor que
        falta no es igual a false), añade '{clave}: {antes} -> {después}';
     d) en el texto, un valor que falta se escribe 'sin definir'; el resto se escribe
        tal cual (./src, true, false);
     e) devuelve el array (vacío si no hay diferencias).
     Puedes crear una función auxiliar que reciba la clave y los dos valores.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  console.log(cambios({ rootDir: './src', outDir: './dist', sourceMap: true }, { rootDir: './src', outDir: './build', sourceMap: true }));
  // ['outDir: ./dist -> ./build']
  console.log(cambios({ sourceMap: true }, {}));                             // ['sourceMap: true -> sin definir']
  console.log(cambios({ declaration: false }, { declaration: true, removeComments: true }));
  // ['declaration: false -> true', 'removeComments: sin definir -> true']
  console.log(cambios({ sourceMap: false }, {}));                            // ['sourceMap: false -> sin definir']
  console.log(cambios({}, {}));                                              // []

ESTO DEBE FALLAR
  // cambios({});                      → falta el argumento obligatorio b.
  // cambios({ outDir: 5 }, {});       → outDir debe ser string.

EXPLICA
  ¿Por qué 'sourceMap: false' frente a una opción ausente aparece como diferencia?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 41 — Elegir un perfil de configuración
/*
SITUACIÓN
  Tienes varios perfiles de configuración con nombre. Buscas el primero que active
  todas las opciones que necesitas.

QUÉ DEBES HACER
  1. Crea el tipo Opciones con sourceMap, declaration, declarationMap y
     removeComments (boolean, opcionales) y el tipo Perfil con nombre (string) y
     opciones (Opciones).
  2. Crea la función activas(o: Opciones): string[] que devuelve los nombres de las
     opciones que valen true, en el orden sourceMap, declaration, declarationMap,
     removeComments. Una opción que falta o vale false no cuenta.
  3. Crea la función mejorPerfil(perfiles: Perfil[], necesarias: string[]):
     string | undefined:
     a) recorre perfiles en orden con un for clásico;
     b) un perfil cumple si todas las necesarias están en activas(su opciones);
     c) devuelve el nombre del primer perfil que cumple;
     d) si ninguno cumple (o perfiles está vacío) rechaza. Con necesarias vacío
        cumple el primer perfil.
  4. Crea los perfiles de COMPRUEBA y ejecuta las líneas.

COMPRUEBA
  const perfiles: Perfil[] = [
      { nombre: 'app', opciones: { sourceMap: true } },
      { nombre: 'libreria', opciones: { declaration: true, declarationMap: true, sourceMap: false } },
      { nombre: 'completo', opciones: { sourceMap: true, declaration: true, declarationMap: true, removeComments: true } },
  ];
  console.log(mejorPerfil(perfiles, ['sourceMap']));                  // 'app'
  console.log(mejorPerfil(perfiles, ['declarationMap']));             // 'libreria'
  console.log(mejorPerfil(perfiles, ['declaration', 'sourceMap']));   // 'completo'
  console.log(mejorPerfil(perfiles, ['removeComments']));             // 'completo'
  console.log(mejorPerfil(perfiles, ['strict']));                     // undefined
  console.log(mejorPerfil(perfiles, []));                             // 'app'
  console.log(mejorPerfil([], []));                                   // undefined

ESTO DEBE FALLAR
  // mejorPerfil(perfiles, 'sourceMap');                                   → necesarias debe ser un arreglo.
  // const p: Perfil = { nombre: 'x', opciones: { sourceMap: 'si' } };      → sourceMap debe ser boolean.
  // const n: string = mejorPerfil([], []);                                → puede devolver undefined.

EXPLICA
  ¿Por qué 'libreria' no cumple ['declaration', 'sourceMap'] aunque tenga sourceMap escrito?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 42 — Ejecutar un plan de comandos
/*
SITUACIÓN
  Los comandos de la sesión se ejecutan en orden; si uno falla, los siguientes no se
  ejecutan. Quién ejecuta de verdad cada comando lo decide una función que recibes
  como parámetro y que devuelve true si el comando salió bien.

QUÉ DEBES HACER
  1. Crea la función correrPlan(hayTsconfig: boolean, vigilar: boolean,
     ejecutar: (comando: string) => boolean): string[].
  2. Dentro de correrPlan:
     a) arma la lista de comandos: 'tsc --init' solo si hayTsconfig es false; después
        'tsc --watch' si vigilar es true, o 'tsc' si es false;
     b) crea un array vacío de comandos ejecutados;
     c) recorre los comandos en orden; llama a ejecutar con cada uno;
     d) si ejecutar devuelve false, termina de inmediato: ese comando no se agrega a los
        ejecutados y los siguientes no se llaman;
     e) si devuelve true, agrégalo a los ejecutados;
     f) devuelve los ejecutados.
  3. Escribe en una línea // el comando que crea el tsconfig.json.
  4. Crea los ejecutores de COMPRUEBA (cada uno anota en su array los comandos que
     recibe) y ejecuta las líneas en orden.

COMPRUEBA
  const llamadas1: string[] = [];
  const llamadas2: string[] = [];
  const siempre = (c: string): boolean => { llamadas1.push(c); return true; };
  const fallaInit = (c: string): boolean => { llamadas2.push(c); return c !== 'tsc --init'; };
  console.log(correrPlan(false, false, siempre));      // ['tsc --init', 'tsc']
  console.log(llamadas1);                              // ['tsc --init', 'tsc']
  console.log(correrPlan(true, true, siempre));        // ['tsc --watch']
  console.log(llamadas1);                              // ['tsc --init', 'tsc', 'tsc --watch']
  console.log(correrPlan(false, true, fallaInit));     // []
  console.log(llamadas2);                              // ['tsc --init']
  console.log(correrPlan(false, false, (c: string): boolean => c !== 'tsc'));  // ['tsc --init']

ESTO DEBE FALLAR
  // correrPlan(true, true, 'tsc');                                 → ejecutar debe ser una función.
  // correrPlan(true, false, (c: number): boolean => true);         → la función debe recibir string.
  // correrPlan(true, false, (c: string): string => 'si');          → la función debe devolver boolean.

EXPLICA
  ¿Por qué correrPlan no necesita saber cómo se ejecuta realmente un comando?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 43 — Un observador con historial
/*
SITUACIÓN
  Un observador de tsc --watch recuerda cuántas veces se guardó cada archivo del
  proyecto. Solo cuentan los archivos que pertenecen al proyecto (include menos
  exclude). El historial es una lista de tuplas [ruta, veces].

QUÉ DEBES HACER
  1. Crea el tipo Observador con: vistos ([string, number][]), guardar (función con
     ruta string que devuelve number), veces (función con ruta string que devuelve
     number | undefined) y total (función sin parámetros que devuelve number).
  2. Crea la función crearObservador(carpeta: string, exclude: string[]): Observador
     que devuelve un objeto con vistos vacío y los tres métodos, que acceden al
     objeto con this.
  3. Método guardar(ruta):
     a) si la ruta no pertenece al proyecto (empieza con '{carpeta}/', termina en
        '.ts' y no es igual a una entrada de exclude ni empieza con '{entrada}/'),
        devuelve 0 sin cambiar nada;
     b) si la ruta ya está en this.vistos (primera posición de una tupla), suma 1 a
        su contador (segunda posición) y devuelve el contador nuevo;
     c) si no está, añade la tupla [ruta, 1] y devuelve 1.
  4. Método veces(ruta): devuelve el contador de esa ruta, o undefined si nunca se
     guardó.
  5. Método total(): devuelve la suma de todos los contadores.
  6. Ejecuta COMPRUEBA en orden.

COMPRUEBA
  const o: Observador = crearObservador('src', ['src/pruebas']);
  console.log(o.guardar('src/app.ts'));           // 1
  console.log(o.guardar('src/app.ts'));           // 2
  console.log(o.guardar('src/util/fecha.ts'));    // 1
  console.log(o.guardar('src/pruebas/t1.ts'));    // 0
  console.log(o.guardar('otros/x.ts'));           // 0
  console.log(o.veces('src/app.ts'));             // 2
  console.log(o.veces('src/pruebas/t1.ts'));      // undefined
  console.log(o.total());                         // 3
  console.log(o.vistos);                          // [['src/app.ts', 2], ['src/util/fecha.ts', 1]]
  const o2: Observador = crearObservador('lib', []);
  console.log(o2.guardar('lib/a.ts'));            // 1
  console.log(o.total());                         // 3
  console.log(o2.total());                        // 1

ESTO DEBE FALLAR
  // o.vistos.push(['x']);                       → cada tupla necesita ruta y contador.
  // const n: number = o.veces('src/app.ts');    → puede devolver undefined.
  // o.guardar(5);                               → ruta debe ser string.

EXPLICA
  ¿Por qué guardar un archivo excluido devuelve 0 y no añade nada a vistos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 44 — Qué archivos cambian al cambiar la configuración
/*
SITUACIÓN
  Comparas dos configuraciones de salida para la misma lista de archivos fuente y
  quieres saber qué archivos solo existen con la primera y cuáles solo con la
  segunda. El resultado son dos listas dentro de una tupla.

QUÉ DEBES HACER
  1. Crea el tipo Config con rootDir y outDir (string, obligatorias) y sourceMap y
     declaration (boolean, opcionales).
  2. Crea la función salidas(origenes: string[], c: Config): string[] (auxiliar):
     por cada origen (supón que está dentro de rootDir y termina en '.ts') añade, en
     este orden, '{outDir}/{ruta sin rootDir ni .ts}.js'; el mismo con '.js.map' si
     sourceMap es true; el mismo con '.d.ts' si declaration es true.
  3. Crea la función archivosQueCambian(origenes: string[], a: Config, b: Config):
     [string[], string[]]:
     a) calcula la lista de salidas con a y la lista con b;
     b) soloA: las rutas de la lista de a que no están en la lista de b, en su orden;
     c) soloB: las rutas de la lista de b que no están en la lista de a, en su orden;
     d) devuelve la tupla [soloA, soloB].
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const o: string[] = ['src/app.ts', 'src/util/fecha.ts'];
  const a: Config = { rootDir: 'src', outDir: 'dist', sourceMap: true };
  const b: Config = { rootDir: 'src', outDir: 'dist', sourceMap: true, declaration: true };
  const c: Config = { rootDir: 'src', outDir: 'dist', declaration: true };
  const d: Config = { rootDir: 'src', outDir: 'build', declaration: true };
  console.log(archivosQueCambian(o, a, b));   // [[], ['dist/app.d.ts', 'dist/util/fecha.d.ts']]
  console.log(archivosQueCambian(o, a, c));
  // [['dist/app.js.map', 'dist/util/fecha.js.map'], ['dist/app.d.ts', 'dist/util/fecha.d.ts']]
  console.log(archivosQueCambian(o, a, d));
  // [['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map'], ['build/app.js', 'build/app.d.ts', 'build/util/fecha.js', 'build/util/fecha.d.ts']]
  console.log(archivosQueCambian(o, a, a));   // [[], []]
  console.log(archivosQueCambian([], a, d));  // [[], []]

ESTO DEBE FALLAR
  // const r: string[] = archivosQueCambian(o, a, b);  → devuelve una tupla de dos arreglos, no un arreglo de strings.
  // archivosQueCambian(o, a);                          → falta el argumento obligatorio b.

EXPLICA
  ¿Por qué al cambiar solo outDir todos los archivos aparecen en las dos listas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 45 — Escribir un tsconfig.json
/*
SITUACIÓN
  Haces el camino inverso a leer: generas las líneas de un tsconfig.json a partir de
  un objeto de opciones, la carpeta de include y la lista de exclude. El formato debe
  ser exacto: sangría de 2 espacios por nivel y comas solo entre elementos.

QUÉ DEBES HACER
  1. Crea el tipo Opciones con rootDir y outDir (string, opcionales) y sourceMap,
     declaration, declarationMap y removeComments (boolean, opcionales).
  2. Crea la función tsconfigTexto(opciones: Opciones, carpeta: string,
     exclude: string[]): string[] que devuelve las líneas del archivo.
  3. Dentro de tsconfigTexto:
     a) arma la lista de campos presentes (los que no faltan), en este orden: rootDir,
        outDir, sourceMap, declaration, declarationMap, removeComments. Un texto se
        escribe '"{clave}": "{valor}"' y un boolean '"{clave}": {valor}' sin comillas
        en el valor;
     b) las líneas son, en orden: '{'; '  "compilerOptions": {'; cada campo con 4
        espacios al inicio y una coma al final salvo el último; '  },';
     c) luego '  "include": ["{carpeta}"]', con una coma al final solo si exclude no
        está vacío;
     d) si exclude no está vacío, '  "exclude": [{entradas}]', con cada entrada entre
        comillas dobles y separadas por ', ';
     e) por último '}'.
  4. Ejecuta COMPRUEBA. Opcional: pega las líneas de la primera comprobación en un
     tsconfig.json de tu banco y ejecuta tsc --listFilesOnly: debe funcionar.

COMPRUEBA
  console.log(tsconfigTexto({ rootDir: './src', outDir: './dist', sourceMap: true }, 'src', ['node_modules', 'dist']));
  // ['{', '  "compilerOptions": {', '    "rootDir": "./src",', '    "outDir": "./dist",', '    "sourceMap": true', '  },', '  "include": ["src"],', '  "exclude": ["node_modules", "dist"]', '}']
  console.log(tsconfigTexto({}, 'lib', []));
  // ['{', '  "compilerOptions": {', '  },', '  "include": ["lib"]', '}']
  console.log(tsconfigTexto({ declaration: false, removeComments: true }, 'src', ['dist']));
  // ['{', '  "compilerOptions": {', '    "declaration": false,', '    "removeComments": true', '  },', '  "include": ["src"],', '  "exclude": ["dist"]', '}']

ESTO DEBE FALLAR
  // tsconfigTexto({ sourceMap: 'true' }, 'src', []);   → sourceMap debe ser boolean.
  // tsconfigTexto({}, 'src');                           → falta el argumento obligatorio exclude.
  // tsconfigTexto({}, 'src', 'dist');                   → exclude debe ser un arreglo.

EXPLICA
  ¿Por qué include y exclude quedan fuera de compilerOptions en el texto generado?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 46 — De un tsconfig.json a la lista de archivos
/*
SITUACIÓN
  Recibes las líneas de un tsconfig.json con las opciones de salida y una lista de
  archivos fuente, y produces la lista de archivos que dejaría tsc, o los errores de
  configuración (en este modelo, con errores no se genera ningún archivo). Todos los
  archivos recibidos pasan por include: aquí solo importan las opciones del compilador.

QUÉ DEBES HACER
  1. Copia a tu solución, de los ejercicios 35 y 36: leerLinea, el tipo Opciones
     (rootDir, outDir, sourceMap, declaration, declarationMap y removeComments,
     todas opcionales) y leerOpciones. Resumen: leerLinea separa una línea en
     [clave, valor]; leerOpciones recorre las líneas y devuelve el objeto de opciones.
  2. Crea el tipo Resultado con errores (string[]) y archivos (string[]).
  3. Crea la función compilarTexto(lineas: string[], origenes: string[]): Resultado,
     con estos pasos en orden:
     a) obtén las opciones con leerOpciones;
     b) si falta rootDir, añade el error 'falta rootDir'; si falta outDir, añade
        'falta outDir'; si hay algún error, devuelve el resultado con esos errores y
        archivos vacío;
     c) quita el './' inicial de rootDir y de outDir si lo llevan;
     d) si declarationMap es true y declaration no es true, añade
        'declarationMap requiere declaration';
     e) por cada origen que no empiece con '{rootDir}/', añade
        '{origen} no está bajo rootDir';
     f) si hay errores, devuelve esos errores con archivos vacío;
     g) si no, devuelve errores vacío y, por cada origen en orden, '{outDir}/{ruta sin
        rootDir ni .ts}.js' (supón que terminan en '.ts'), seguido de '.js.map' si
        sourceMap es true, '.d.ts' si declaration es true y '.d.ts.map' si
        declarationMap es true (en ese orden).
  4. Copia el texto de COMPRUEBA y ejecuta las líneas.

COMPRUEBA
  const texto: string[] = ['{', '  "compilerOptions": {', '    "rootDir": "./src",', '    "outDir": "./dist",',
      '    "sourceMap": true,', '    "declaration": false', '  }', '}'];
  console.log(compilarTexto(texto, ['src/app.ts', 'src/util/fecha.ts']));
  // { errores: [], archivos: ['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map'] }
  console.log(compilarTexto(texto, ['src/app.ts', 'otros/x.ts']));
  // { errores: ['otros/x.ts no está bajo rootDir'], archivos: [] }
  console.log(compilarTexto(['"outDir": "./dist"'], ['src/a.ts']));
  // { errores: ['falta rootDir'], archivos: [] }
  console.log(compilarTexto([], ['src/a.ts']));
  // { errores: ['falta rootDir', 'falta outDir'], archivos: [] }
  console.log(compilarTexto(['"rootDir": "src"', '"outDir": "build"', '"declaration": true', '"declarationMap": true'], ['src/a.ts']));
  // { errores: [], archivos: ['build/a.js', 'build/a.d.ts', 'build/a.d.ts.map'] }
  console.log(compilarTexto(['"rootDir": "./src"', '"outDir": "./build"', '"declarationMap": true'], ['lib/a.ts']));
  // { errores: ['declarationMap requiere declaration', 'lib/a.ts no está bajo rootDir'], archivos: [] }

ESTO DEBE FALLAR
  // compilarTexto(texto);                    → falta el argumento obligatorio origenes.
  // compilarTexto(texto, 'src/app.ts');      → origenes debe ser un arreglo.
  // const r: Resultado = { errores: [] };    → falta archivos.

EXPLICA
  ¿Qué dos errores pueden salir juntos y cuáles nunca, según el orden de tus pasos?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 47 — Leer un proyecto completo
/*
SITUACIÓN
  Además de las opciones del compilador, un tsconfig.json trae include y exclude.
  Quieres leer todo junto: opciones, carpeta de include y lista de exclude. En este
  modelo, sin include no hay proyecto.

QUÉ DEBES HACER
  1. Copia a tu solución, de los ejercicios 35 y 36: leerLinea, el tipo Opciones y
     leerOpciones (leerOpciones devuelve el objeto de opciones a partir de las
     líneas).
  2. Crea el tipo Proyecto con opciones (Opciones), carpeta (string) y exclude (string[]).
  3. Crea la función leerProyecto(lineas: string[]): Proyecto | undefined:
     a) obtén las opciones con leerOpciones;
     b) crea carpeta (string | undefined, sin valor) y exclude (string[], vacío);
     c) por cada línea llama a leerLinea y, si no da undefined, mira la clave;
     d) clave 'include': si el valor empieza con '[', la carpeta es el valor sin su
        primer y su último carácter (supón una sola carpeta); si no empieza con '[', la
        línea se ignora; si hay varias líneas include, gana la última;
     e) clave 'exclude': si el valor empieza con '[', quita su primer y su último
        carácter, sepáralo con split(','), aplica trim() a cada parte, ignora las
        partes vacías y sustituye la lista de exclude por ese resultado; si no
        empieza con '[', la línea se ignora;
     f) si al final carpeta sigue sin valor, rechaza;
     g) si no, devuelve el objeto con las opciones, la carpeta y el exclude.
  4. Ejecuta COMPRUEBA.

COMPRUEBA
  const texto: string[] = ['{', '  "compilerOptions": {', '    "rootDir": "./src",', '    "outDir": "./dist"', '  },',
      '  "include": ["src"],', '  "exclude": ["node_modules", "dist"]', '}'];
  console.log(leerProyecto(texto));
  // { opciones: { rootDir: './src', outDir: './dist' }, carpeta: 'src', exclude: ['node_modules', 'dist'] }
  console.log(leerProyecto(['{', '"include": ["lib"]', '}']));
  // { opciones: {}, carpeta: 'lib', exclude: [] }
  console.log(leerProyecto(['"include": ["src/app"],', '"exclude": []']));
  // { opciones: {}, carpeta: 'src/app', exclude: [] }
  console.log(leerProyecto(['"include": ["a"]', '"include": ["b"]']));
  // { opciones: {}, carpeta: 'b', exclude: [] }
  console.log(leerProyecto(['"outDir": "./dist"']));      // undefined
  console.log(leerProyecto(['"include": "src"']));        // undefined
  console.log(leerProyecto([]));                          // undefined

ESTO DEBE FALLAR
  // const p: Proyecto = leerProyecto([]);                → puede devolver undefined.
  // const q: Proyecto = { opciones: {}, carpeta: 'src' };  → falta exclude.
  // leerProyecto('{}');                                  → lineas debe ser un arreglo.

EXPLICA
  ¿Por qué carpeta se declara como string | undefined mientras recorres las líneas?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 48 — Compilar un proyecto con importaciones
/*
SITUACIÓN
  Reúnes todo: lees el tsconfig.json, calculas qué archivos entran (include,
  exclude e importaciones), validas rootDir y las opciones, y produces los archivos
  de salida. Es lo que hace tsc, en pequeño.

QUÉ DEBES HACER
  1. Copia a tu solución: leerLinea y leerOpciones con el tipo Opciones (ejercicios
     35 y 36), el tipo Proyecto y leerProyecto (ejercicio 47), y el tipo Archivo y
     entran (ejercicio 33). Resumen: leerProyecto devuelve opciones, carpeta y
     exclude o undefined; entran devuelve las rutas del proyecto: include, menos
     exclude, más las importadas.
  2. Crea el tipo Resultado con errores, fuentes y archivos (los tres string[]).
  3. Crea la función compilarProyecto(lineas: string[], archivos: Archivo[]): Resultado,
     con estos pasos en orden:
     a) obtén el proyecto con leerProyecto; si es undefined, devuelve errores
        ['falta include'] con fuentes y archivos vacíos;
     b) si falta rootDir añade 'falta rootDir'; si falta outDir añade 'falta outDir'; si
        hay errores, devuélvelos con fuentes y archivos vacíos;
     c) quita el './' inicial de rootDir y outDir si lo llevan;
     d) calcula las fuentes con entran(archivos, carpeta, exclude); si no hay ninguna,
        devuelve errores ['No inputs were found'] con fuentes y archivos vacíos;
     e) si declarationMap es true y declaration no es true, añade
        'declarationMap requiere declaration'; después, por cada fuente que no empiece
        con '{rootDir}/', añade '{ruta} no está bajo rootDir';
     f) si hay errores, devuélvelos con fuentes y archivos vacíos;
     g) si no, devuelve errores vacío, las fuentes y los archivos: por cada fuente, en
        orden, '{outDir}/{ruta sin rootDir ni .ts}.js', seguido de '.js.map' si sourceMap
        es true, '.d.ts' si declaration es true y '.d.ts.map' si declarationMap es true.
  4. Escribe en líneas // el tsconfig.json de la primera comprobación y, si quieres,
     comprueba en tu banco que tsc deja esos mismos archivos.
  5. Copia los datos de prueba y ejecuta COMPRUEBA.

COMPRUEBA
  const app: Archivo = { ruta: 'src/app.ts', importa: ['src/util/fecha.ts', 'src/pruebas/t1.ts'] };
  const fecha: Archivo = { ruta: 'src/util/fecha.ts', importa: [] };
  const t1: Archivo = { ruta: 'src/pruebas/t1.ts', importa: [] };
  const t2: Archivo = { ruta: 'src/pruebas/t2.ts', importa: [] };
  const libre: Archivo = { ruta: 'otros/libre.ts', importa: [] };
  const extra: Archivo = { ruta: 'src/extra.ts', importa: ['otros/libre.ts'] };
  const base: Archivo[] = [app, fecha, t1, t2, libre];
  const conExtra: Archivo[] = [app, fecha, t1, t2, libre, extra];
  const t: string[] = ['{', '  "compilerOptions": {', '    "rootDir": "./src",', '    "outDir": "./dist",',
      '    "sourceMap": true', '  },', '  "include": ["src"],', '  "exclude": ["src/pruebas"]', '}'];
  console.log(compilarProyecto(t, base));
  // { errores: [], fuentes: ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts'], archivos: ['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map', 'dist/pruebas/t1.js', 'dist/pruebas/t1.js.map'] }
  console.log(compilarProyecto(t, conExtra));
  // { errores: ['otros/libre.ts no está bajo rootDir'], fuentes: [], archivos: [] }
  console.log(compilarProyecto(['"rootDir": "./src"', '"outDir": "./dist"'], base));
  // { errores: ['falta include'], fuentes: [], archivos: [] }
  console.log(compilarProyecto(['"include": ["src"]'], base));
  // { errores: ['falta rootDir', 'falta outDir'], fuentes: [], archivos: [] }
  console.log(compilarProyecto(['"rootDir": "./src"', '"outDir": "./dist"', '"include": ["nada"]'], base));
  // { errores: ['No inputs were found'], fuentes: [], archivos: [] }
  console.log(compilarProyecto(['"rootDir": "./src"', '"outDir": "./dist"', '"declarationMap": true', '"include": ["src"]'], base));
  // { errores: ['declarationMap requiere declaration'], fuentes: [], archivos: [] }

ESTO DEBE FALLAR
  // compilarProyecto(t);                  → falta el argumento obligatorio archivos.
  // compilarProyecto(t, ['src/app.ts']);  → archivos debe ser un arreglo de Archivo.
  // const r: Resultado = { errores: [], archivos: [] };  → falta fuentes.

EXPLICA
  En la segunda comprobación, ¿qué archivo provoca el error y por qué entra en el
  proyecto si está fuera de include?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 49 — Una sesión de vigilancia sobre un proyecto
/*
SITUACIÓN
  En este modelo, una sesión de tsc --watch solo se crea si la configuración no tiene
  errores. Una vez activa, guardar uno de los archivos del proyecto (incluidos los importados)
  recompila; guardar cualquier otro no hace nada. Cada sesión lleva su propia cuenta.

QUÉ DEBES HACER
  1. Copia a tu solución, del ejercicio 48, todo lo necesario para tener
     compilarProyecto (con sus tipos Opciones, Proyecto, Archivo y Resultado, y las
     funciones leerLinea, leerOpciones, leerProyecto y entran). compilarProyecto
     devuelve errores, fuentes y archivos.
  2. Crea el tipo Sesion con: fuentes (string[]), activa (boolean), compilaciones
     (number), arrancar (función sin parámetros que devuelve boolean), guardar
     (función con ruta string que devuelve boolean) y detener (función sin
     parámetros, void).
  3. Crea la función crearSesion(lineas: string[], archivos: Archivo[]):
     Sesion | undefined:
     a) llama a compilarProyecto; si errores no está vacío, rechaza;
     b) si no, devuelve un objeto Sesion con las fuentes del resultado, activa en
        false, compilaciones en 0 y los tres métodos, que acceden al objeto con this.
  4. Método arrancar(): si activa ya es true, devuelve false sin cambiar nada; si no,
     pon activa en true, suma 1 a compilaciones y devuelve true.
  5. Método guardar(ruta): devuelve false sin cambiar nada si la sesión no está activa
     o si ruta no está en this.fuentes; si no, suma 1 a compilaciones y devuelve true.
  6. Método detener(): pon activa en false.
  7. Copia los datos de prueba y ejecuta COMPRUEBA en orden.

COMPRUEBA
  const app: Archivo = { ruta: 'src/app.ts', importa: ['src/util/fecha.ts', 'src/pruebas/t1.ts'] };
  const fecha: Archivo = { ruta: 'src/util/fecha.ts', importa: [] };
  const t1: Archivo = { ruta: 'src/pruebas/t1.ts', importa: [] };
  const t2: Archivo = { ruta: 'src/pruebas/t2.ts', importa: [] };
  const libre: Archivo = { ruta: 'otros/libre.ts', importa: [] };
  const base: Archivo[] = [app, fecha, t1, t2, libre];
  const t: string[] = ['"rootDir": "./src"', '"outDir": "./dist"', '"include": ["src"]', '"exclude": ["src/pruebas"]'];
  console.log(crearSesion(['"outDir": "./dist"'], base));   // undefined
  const sesion = crearSesion(t, base);
  const otra = crearSesion(t, base);
  if (sesion !== undefined && otra !== undefined) {
      console.log(sesion.fuentes);                     // ['src/app.ts', 'src/util/fecha.ts', 'src/pruebas/t1.ts']
      console.log(sesion.guardar('src/app.ts'));       // false
      console.log(sesion.arrancar());                  // true
      console.log(sesion.arrancar());                  // false
      console.log(sesion.guardar('src/pruebas/t1.ts')); // true
      console.log(sesion.guardar('src/pruebas/t2.ts')); // false
      console.log(sesion.guardar('otros/libre.ts'));   // false
      console.log(sesion.guardar('src/app.ts'));       // true
      console.log(sesion.compilaciones);               // 3
      sesion.detener();
      console.log(sesion.guardar('src/app.ts'));       // false
      console.log(sesion.arrancar());                  // true
      console.log(sesion.compilaciones);               // 4
      console.log(otra.compilaciones);                 // 0
  }

ESTO DEBE FALLAR
  // const s: Sesion = crearSesion(t, base);   → puede devolver undefined.
  // const mala: Sesion = { fuentes: [], activa: false, compilaciones: 0 };  → faltan los métodos arrancar, guardar y detener.
  // crearSesion(t);                           → falta el argumento obligatorio archivos.

EXPLICA
  ¿Por qué el if (sesion !== undefined) es obligatorio antes de usar sesion? ¿Qué
  opción de tsconfig.json lo exige?
*/
(() => {
    // Tu solución.
})();

// !EJERCICIO 50 — Auditar la carpeta de salida
/*
SITUACIÓN
  Compilaste un proyecto y quieres saber si la carpeta de salida contiene lo que
  debería. Comparas la lista de archivos esperados (según la configuración y los
  archivos fuente) con la lista de archivos que hay realmente.

QUÉ DEBES HACER
  1. Copia a tu solución, del ejercicio 48, todo lo necesario para tener
     compilarProyecto (con sus tipos Opciones, Proyecto, Archivo y Resultado, y las
     funciones leerLinea, leerOpciones, leerProyecto y entran).
  2. Crea la función auditoria(lineas: string[], archivos: Archivo[],
     existentes: string[]): string[]:
     a) obtén el resultado con compilarProyecto;
     b) si hay errores, devuelve un arreglo con un texto 'config: {error}' por cada
        error, en el mismo orden, y no sigas;
     c) crea un array vacío de avisos; por cada archivo esperado (resultado.archivos),
        en orden, que no esté en existentes, añade 'falta {archivo}';
     d) por cada archivo de existentes, en orden, que no esté entre los esperados,
        añade 'sobra {archivo}';
     e) si no hay ningún aviso, devuelve ['todo en orden']; si hay, devuelve los avisos
        (primero todos los 'falta', después todos los 'sobra').
  3. Copia los datos de prueba y ejecuta COMPRUEBA.

COMPRUEBA
  const app: Archivo = { ruta: 'src/app.ts', importa: ['src/util/fecha.ts', 'src/pruebas/t1.ts'] };
  const fecha: Archivo = { ruta: 'src/util/fecha.ts', importa: [] };
  const t1: Archivo = { ruta: 'src/pruebas/t1.ts', importa: [] };
  const t2: Archivo = { ruta: 'src/pruebas/t2.ts', importa: [] };
  const libre: Archivo = { ruta: 'otros/libre.ts', importa: [] };
  const extra: Archivo = { ruta: 'src/extra.ts', importa: ['otros/libre.ts'] };
  const base: Archivo[] = [app, fecha, t1, t2, libre];
  const conExtra: Archivo[] = [app, fecha, t1, t2, libre, extra];
  const t: string[] = ['"rootDir": "./src"', '"outDir": "./dist"', '"sourceMap": true', '"include": ["src"]', '"exclude": ["src/pruebas"]'];
  const completos: string[] = ['dist/app.js', 'dist/app.js.map', 'dist/util/fecha.js', 'dist/util/fecha.js.map', 'dist/pruebas/t1.js', 'dist/pruebas/t1.js.map'];
  const raros: string[] = ['dist/app.js', 'dist/util/fecha.js', 'dist/util/fecha.js.map', 'dist/pruebas/t1.js', 'dist/pruebas/t1.js.map', 'dist/pruebas/t2.js', 'notas.txt'];
  console.log(auditoria(t, base, completos));      // ['todo en orden']
  console.log(auditoria(t, base, raros));          // ['falta dist/app.js.map', 'sobra dist/pruebas/t2.js', 'sobra notas.txt']
  console.log(auditoria(t, conExtra, completos));  // ['config: otros/libre.ts no está bajo rootDir']
  console.log(auditoria(['"rootDir": "./src"'], base, []));  // ['config: falta include']
  console.log(auditoria(t, base, []));
  // ['falta dist/app.js', 'falta dist/app.js.map', 'falta dist/util/fecha.js', 'falta dist/util/fecha.js.map', 'falta dist/pruebas/t1.js', 'falta dist/pruebas/t1.js.map']

ESTO DEBE FALLAR
  // auditoria(t, base);                          → falta el argumento obligatorio existentes.
  // auditoria(t, base, 'dist/app.js');           → existentes debe ser un arreglo.
  // const n: number = auditoria(t, base, []);    → devuelve string[].

EXPLICA
  ¿Por qué si la configuración tiene errores no se compara ninguna lista de archivos?
*/
(() => {
    // Tu solución.
})();
