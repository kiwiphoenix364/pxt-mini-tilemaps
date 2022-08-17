namespace SpriteKind {
    //% isKind
    export const AffectedByPhysics = SpriteKind.create()
}
//% color="#287d81"
namespace MiniTilemaps {
    //% block="Clear all mini tilemaps"
    export function ClearAll() {

    }
    
    // Small useful functions from extensions used in my extension, credit to MakeCode devs.
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