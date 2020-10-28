let passed = 0
let grade = 0
let failed = 0
let suma = 0
let average = 0
let random = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    passed = 0
    for (let index = 0; index < 20; index++) {
        grade = randint(1, 100)
        basic.showNumber(grade)
        if (grade >= 90 && grade <= 100) {
            basic.showString("A")
        } else if (grade >= 80 && grade <= 89) {
            basic.showString("B")
        } else if (grade >= 70 && grade <= 79) {
            basic.showString("C")
        } else if (grade >= 60 && grade <= 69) {
            basic.showString("D")
        } else if (grade <= 59) {
            basic.showString("F")
        }
        if (grade >= 70) {
            passed += 1
        } else {
            failed += 1
        }
        suma += grade
    }
    average = suma / 20
    basic.showNumber(average)
    basic.showString("passed")
    basic.showNumber(passed)
    basic.showString("failed")
    basic.showNumber(failed)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 5; index++) {
        basic.clearScreen()
        random = randint(1, 6)
        basic.showNumber(random)
        if (random == 6 || random == 3) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
    basic.clearScreen()
})
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 4)
    while (input.pinIsPressed(TouchPin.P0)) {
        basic.showNumber(x)
        basic.showNumber(y)
        basic.clearScreen()
        basic.pause(2000)
        if (x == y) {
            basic.showString("winner")
            music.playMelody("- - E A - - G - ", 120)
        } else {
            led.plot(x, y)
        }
        basic.pause(2000)
    }
})
