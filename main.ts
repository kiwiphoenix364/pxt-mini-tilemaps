namespace SpriteKind {
    //% isKind
    export const AffectedByPhysics = SpriteKind.create()
}
//% color="#287d81"
namespace MiniTilemaps {
    //% block="Generate mini tilemap on all $selected tiles with collision $collisionImg"
    //% selected.shadow=tileset_tile_picker
    //% collisionImg.shadow=screen_image_picker
    export function GenerateCollision(selected: Image, collisionImg: Image) {
        for (let value2 of tiles.getTilesByType(selected)) {
            for (let index32 = 0; index32 <= collisionImg.width; index32++) {
                for (let index23 = 0; index23 <= collisionImg.height; index23++) {
                    if (0 != collisionImg.getPixel(index32, index23)) {
                        TileCollisionArrayX.push(value2.column * 16 + index32)
                        TileCollisionArrayY.push(value2.row * 16 + index23)
                    }
                }
            }
        }
    }
    //% block="Clear all mini tilemaps"
    export function ClearAll() {
        TileCollisionArrayX = []
        TileCollisionArrayY = []
    }
    // Small Parts of Extensions Used in my Extension, Credit to Makecode Devs.
    export function setDataNumber(sprite: Sprite, name: string, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }
    export function changeDataNumberBy(sprite: Sprite, name: string, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = (d[name] || 0) + value;
    }
    export function readDataNumber(sprite: Sprite, name: string): number {
        if (!sprite || !name) return 0;
        const d = sprite.data;
        return d[name] as number;
    }
    export function onMapLoaded(cb: (tilemap: tiles.TileMapData) => void) {
        tiles.addEventListener(tiles.TileMapEvent.Loaded, cb);
    }
    export function onMapUnloaded(cb: (tilemap: tiles.TileMapData) => void) {
        tiles.addEventListener(tiles.TileMapEvent.Unloaded, cb);
    }
}