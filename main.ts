let strikes = 0
let pitches = 0
input.onButtonPressed(Button.A, function () {
    strikes += 1
})
input.onButtonPressed(Button.B, function () {
    pitches += 1
})
basic.forever(function () {
    if (strikes == 3) {
        strikes = 0
    }
})
basic.forever(function () {
    if (pitches == 4) {
        pitches = 0
    }
})
basic.forever(function () {
    basic.showNumber(pitches)
    basic.pause(500)
    basic.showNumber(strikes)
})
