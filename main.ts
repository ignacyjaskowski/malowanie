input.onButtonPressed(Button.A, function () {
    a = a + 1
})
input.onButtonPressed(Button.AB, function () {
    sprite = game.createSprite(malasz.get(LedSpriteProperty.X), malasz.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
})
let b = 0
let sprite: game.LedSprite = null
let a = 0
let malasz: game.LedSprite = null
malasz = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (a == 1) {
        basic.pause(1000)
        if (a == 1) {
            malasz.change(LedSpriteProperty.X, -1)
            a = 0
        } else {
            malasz.change(LedSpriteProperty.Y, 1)
            a = 0
        }
    }
    if (b == 1) {
        basic.pause(1000)
        if (b == 1) {
            malasz.change(LedSpriteProperty.X, 1)
            b = 0
        } else {
            malasz.change(LedSpriteProperty.Y, -1)
            b = 0
        }
    }
})
