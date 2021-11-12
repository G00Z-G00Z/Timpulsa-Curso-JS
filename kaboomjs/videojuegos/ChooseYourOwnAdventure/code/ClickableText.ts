import { Vec2 } from 'kaboom';
import { TextCompConf } from 'kaboom';
import { Origin } from 'kaboom';
declare function origin(pos: Origin): void
/**
 * Adds a text, that's clickable
 * @param texto string
 * @param textConfig TextCompConf
 * @param position Vec2
 * @param clickAction () => void
 */
export function addClickableText(texto: string, textConfig: TextCompConf, position: Vec2, clickAction: () => void): void {



    const btn = add([
        text(texto, textConfig),
        pos(position),
        area({ cursor: "pointer", }),
        scale(1),
        origin("center"),
    ]);

    btn.clicks(clickAction);


}