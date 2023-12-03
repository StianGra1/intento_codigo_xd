function llenado () {
    if (tiempo_de_llenado == completo) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (tiempo_de_llenado == medio) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # .
            . # # # .
            . # # # .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (verificacion()) {
        if (tiempo_de_llenado == completo) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else if (tiempo_de_llenado == medio) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
function verificacion (): any {
    if (distancia <= 5) {
        basic.showIcon(IconNames.Yes)
    }
    basic.showIcon(IconNames.No)
    return verificacion()
}
input.onButtonPressed(Button.B, function () {
    if (medio == completo) {
        completo += medio
    }
    if (completo == medio) {
        medio += completo
    }
})
let medio = 0
let completo = 0
let tiempo_de_llenado = 0
let distancia = 0
distancia += sonar.ping(
DigitalPin.P8,
DigitalPin.P4,
PingUnit.Centimeters
)
tiempo_de_llenado = completo
basic.forever(function () {
    verificacion()
})
