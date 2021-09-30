import { newEnding, newEscena, newOpcion } from './utils';
import { Historia } from './interfaces';


// https://www.fantasy-magazine.com/fm/fiction/choose-your-own-adventure/
export const miHistoria: Historia = {
    "1": newEscena("Te encuentras en un jardin muy bonito. A lo largo del jardin, hay una pared gigante, que rodea todo el jardín. Después de caminar un rato, te encuentras una puerta, ¿la atraviesas?"
        , [
            newOpcion("Si", "37"),
            newOpcion("No", "19"),
        ]),
    "19": newEnding("Sigues caminando. Regresaste a tu casa, y tuviste una noche de descanso. Esa fue la desición correcta, ya que escapaste de un terriblo destino")
    ,
    "37": newEscena("Tu avanzas por la puerta, hacia un bosque mucho más profundo de lo que habías imaginado. Sigues caminando y la noche se va haciendo más oscura. Te sientas debajo de un arból y te empieza a dar sueño. ¿Cierras los ojos? ",
        [
            newOpcion("Dormir", "3"),
            newOpcion("Quedarme despierto", "25")
        ]),
    "3": newEnding("Lástima. Fue un error dormirte. El bosque te traga, y nunca volveras al jardín"),

    "25": newEnding("Te esfuerzas para no dormir, y sigues caminado por el prominente bosque. Empiezas a oler comida a lo lejos, llegas a un pueblo que nunca habías visto. Entras al pueblo ??")
}





