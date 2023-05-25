basic.forever(function () {
    led.plot(2, 2)
    basic.pause(input.lightLevel())
    led.unplot(2, 2)
    basic.pause(input.lightLevel())
})
