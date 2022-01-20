import kaboom from "kaboom";

export function addButton(p, s, sc, f, ) {
	const btn = add([
    sprite(s),
		pos(p),
		area({ cursor: "pointer", }),
		origin("center"),
	]);

	btn.clicks(f);
  let btnScale = sc;  
	btn.hovers(() => {
		const t = time() * 10;
		btn.color = rgb(
			wave(0, 255, t),
			wave(0, 255, t + 2),
			wave(0, 255, t + 4),
		);
    
		btn.scale = vec2(btnScale*1.15);
	}, () => {
		btn.scale = vec2(btnScale);
		btn.color = rgb();
	}); 

}