import kaboom from "kaboom";
import { addButton } from "./AddButton"

// initialize context

kaboom();
//Cargar todos los sprites
loadSprite("Cookie", "sprites/Cookie.png")
loadSprite("Cursor", "sprites/Cursor.png")
loadSprite("Grandma", "sprites/Grandma.png")
loadSprite("Farm", "sprites/Farm.png")
//Valor de un click en la galleta
let clickMult = 1;
//Precios
let cursorPrice = 15;
let grandmaPrice = 22;
let farmPrice = 37;
//Galletas por segundo
let addValue = 0;

//Puntaje / Dinero
let score = add([
  text('0'),
  pos(50, 50),
  {
    value: 0,
  }
]);

//Agregar galletas cada segundo
window.setInterval(()=>{
  score.value+=addValue;
  score.text=score.value;
} , 1000)

//
const textConfig = {
  size: width()*0.10,
  width: width()*0.9
}
//Se agregan los botones
addButton(vec2(200, 200), 'Cookie', 5, () =>{
    score.value+=clickMult;
    score.text=score.value;
});

addButton(vec2(width()-175, 50), 'Cursor', 2.5, () => {
  if(score.value>=cursorPrice){
    clickMult++;
    score.value-=cursorPrice;
    cursorPrice+=4;
    score.text=score.value;
    priceC.text=cursorPrice;
  }
});

addButton(vec2(width()-175, 150), 'Grandma', 2.5, () => {
  if(score.value>=grandmaPrice){
    addValue++;
    score.value-=grandmaPrice;
    grandmaPrice+=6;
    score.text=score.value;
    priceG.text=grandmaPrice;
  }
});

addButton(vec2(width()-175, 250), 'Farm', 2 ,() => {
  if(score.value>=farmPrice){
    addValue+=3;
    score.value-=farmPrice;
    farmPrice+=9;
    score.text=score.value;
    priceF.text=farmPrice;
  }
});

//Etiquetas de precio

let priceC = add([ 
  text(cursorPrice, textConfig),
  pos(width()-100, 28),
]);

let priceG = add([
  text(grandmaPrice, textConfig),
  pos(width()-100, 128),

]);

let priceF = add([
  text(farmPrice, textConfig),
  pos(width()-100, 228),
]);

// reset cursor to default at frame start for easier cursor management
action(() => cursor("default"));