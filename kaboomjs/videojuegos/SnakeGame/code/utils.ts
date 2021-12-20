import { LayersId } from './tags';

/**
 * Function that renders the layers in the game. Must be called within the scene
 */
export function getLayers() {
    layers([
        LayersId.background,
        LayersId.game,
        LayersId.ui,
    ], LayersId.game)
}

