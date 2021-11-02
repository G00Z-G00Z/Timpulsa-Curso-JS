import { Vec2, Origin } from 'kaboom';

declare function origin(o: Origin): any

export function addButton(message: string, position: Vec2, onClickFunction: () => void) {

    const btn = add([
        text(message, {
            size: 20
        }),
        pos(position),
        area({ cursor: "pointer", }),
        origin("center"),
    ]);

    btn.clicks(onClickFunction);

    btn.hovers(() => {

        btn.scale = vec2(1.2);
    }, () => {
        btn.scale = vec2(1);
    });

}
