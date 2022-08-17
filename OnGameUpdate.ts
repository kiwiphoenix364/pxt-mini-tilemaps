let cany = 0
let canx = 0
let repeat = 0
let cury = 0
let curx = 0
let TileCollisionArrayY = [0]
let TileCollisionArrayX = [0]
TileCollisionArrayY = []
TileCollisionArrayX = []
MiniTilemaps.onMapUnloaded(function () {
    TileCollisionArrayY = []
    TileCollisionArrayX = []
})
MiniTilemaps.onMapLoaded(function () {
    TileCollisionArrayY = []
    TileCollisionArrayX = []
})
game.onUpdate(function () {
    if (TileCollisionArrayX.length != 0) {
        for (let mySprite of sprites.allOfKind(SpriteKind.AffectedByPhysics)) {
            curx = mySprite.x
            cury = mySprite.y
            mySprite.setPosition(MiniTilemaps.readDataNumber(mySprite, "prevx"), MiniTilemaps.readDataNumber(mySprite, "prevy"))
            repeat = (Math.abs(curx - MiniTilemaps.readDataNumber(mySprite, "prevx")) + Math.abs(cury - MiniTilemaps.readDataNumber(mySprite, "prevy"))) * 2
            canx = 1
            cany = 1
            if (repeat > 0) {
                for (let index = 0; index <= repeat; index++) {
                    if (canx == 1) {
                        mySprite.x += (curx - MiniTilemaps.readDataNumber(mySprite, "prevx")) / repeat
                        for (let index2 = 0; index2 <= TileCollisionArrayX.length; index2++) {
                            if (canx == 1) {
                                if ((TileCollisionArrayX[index2] - mySprite.left + 1 > 0 && TileCollisionArrayX[index2] - mySprite.left - 1 < mySprite.width) && (TileCollisionArrayY[index2] - mySprite.top + 1 > 0 && TileCollisionArrayY[index2] - mySprite.top - 1 < mySprite.height)) {
                                    if (mySprite.image.getPixel(TileCollisionArrayX[index2] - mySprite.left, TileCollisionArrayY[index2] - mySprite.top) != 0) {
                                        mySprite.x += 0 - (curx - MiniTilemaps.readDataNumber(mySprite, "prevx")) / repeat
                                        canx = 0
                                    }
                                }
                            }
                        }
                    }
                    if (cany == 1) {
                        mySprite.y += (cury - MiniTilemaps.readDataNumber(mySprite, "prevy")) / repeat
                        for (let index22 = 0; index22 <= TileCollisionArrayY.length; index22++) {
                            if (cany == 1) {
                                if ((TileCollisionArrayX[index22] - mySprite.left + 1 > 0 && TileCollisionArrayX[index22] - mySprite.left - 1 < mySprite.width) && (TileCollisionArrayY[index22] - mySprite.top + 1 > 0 && TileCollisionArrayY[index22] - mySprite.top - 1 < mySprite.height)) {
                                    if (mySprite.image.getPixel(TileCollisionArrayX[index22] - mySprite.left, TileCollisionArrayY[index22] - mySprite.top) != 0) {
                                        mySprite.y += 0 - (cury - MiniTilemaps.readDataNumber(mySprite, "prevy")) / repeat
                                        cany = 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
            MiniTilemaps.setDataNumber(mySprite, "prevx", mySprite.x)
            MiniTilemaps.setDataNumber(mySprite, "prevy", mySprite.y)
        }
    }
})