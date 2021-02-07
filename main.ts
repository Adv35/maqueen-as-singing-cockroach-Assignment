basic.forever(function () {
    if (input.lightLevel() < 40) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(500)
    } else if (input.lightLevel() > 40 && input.lightLevel() < 95) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.pause(500)
    } else if (input.lightLevel() > 96 && input.lightLevel() < 160) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        music.playMelody("- - A - - - - - ", 120)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        music.playMelody("C D E F G A B C5 ", 120)
        basic.pause(500)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
