import { Vec2 } from "kaboom"
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



}