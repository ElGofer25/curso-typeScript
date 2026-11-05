//import {Hero as Superhero} from './Classes/Hero';
{/* Podemos acceder incluso a todo el contenido exportable de un archivo: */}
import * as HeroClasses from './Classes/Hero';

console.log('Hola Mundo!');


const Hero = 'Something' // --> Esto provoca un error porque 'Hero' ya se estaba usando

//const Ironman = new Superhero('Ironman', 123, 23); 
//En caso de que algunos nombres se empalmen podemos renombrar la clase en el import mediante un alias

// Para generar una nueva instancia, tenemos que llamar el alias

const ironman = new HeroClasses.Hero('Ironman', 123, 23);



