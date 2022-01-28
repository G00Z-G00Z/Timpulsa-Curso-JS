import kaboom from "kaboom";

// initialize context
kaboom();
layer(['obj', 'ui'], 'obj')
let clickMult = 1;
let cursorPrice = 15;
let grandmaPrice = 25;
let addValue = 0;

let score = add([
  text('0'),
  pos(50, 50),
  layer('ui'),
  {
    value: 0,
  }
]);
window.setInterval(()=>{
  score.value+=addValue;
  score.text=score.value;
} , 1000)

// load assets
function addButton(txt, p, s, f) {

	const btn = add([
    //sprite("Cookie"),
		text(txt, 8),
		pos(p),
		area({ cursor: "pointer", }),
		scale(0.5),
		origin("center"),
	]);

	btn.clicks(f);

	btn.hovers(() => {
		const t = time() * 10;
		btn.color = rgb(
			wave(0, 255, t),
			wave(0, 255, t + 2),
			wave(0, 255, t + 4),
		);
		btn.scale = vec2(1.2);
	}, () => {
		btn.scale = vec2(1);
		btn.color = rgb();
	});

}

addButton("Cookie", vec2(200, 200), 'Cookie', () => {
score.value+=clickMult;
score.text=score.value;
});

addButton("Cursor", vec2(width()-250, 50), 'Cursor', () => {
  if(score.value>=cursorPrice){
    clickMult++;
    score.value-=cursorPrice;
    cursorPrice+=4;
    score.text=score.value;
    priceC.text=cursorPrice;
  }
})
addButton("Grandma", vec2(width()-250, 150), 'Grandma', () => {
  if(score.value>=grandmaPrice){
    addValue++;
    score.value-=grandmaPrice;
    grandmaPrice+=6;
    score.text=score.value;
    priceG.text=grandmaPrice;
  }
})

let priceC = add([
  text(cursorPrice),
  pos(width()-200, 50),
  layer('ui'),
]);
let priceG = add([
  text(grandmaPrice),
  pos(width()-200, 150),
  layer('ui'),
]);
// reset cursor to default at frame start for easier cursor management
action(() => cursor("default"));