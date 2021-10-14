import { Vec2, Character } from "kaboom"
import { Opcion } from './interfaces';
import { Origin } from 'kaboom';


declare function origin(o: Origin): void

export function addButton(txt: string, p: Vec2, f: () => void) {

    const btn = add([
        rect(10, 10),
        text(txt),
        color(255, 255, 0),
        pos(p),
        area({ cursor: "pointer", }),
        scale(1),
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

    });

}