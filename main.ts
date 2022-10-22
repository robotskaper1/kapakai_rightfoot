function LeftHip () {
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(chosenangle)
            runservo = 1
            basic.showIcon(IconNames.Yes)
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (adjNum > 180) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(adjNum)
        } else if (runservo != 0) {
            basic.showNumber(chosenangle)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, chosenangle)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 0)
        }
    }
    runservo = 0
    LeftHipSetting = chosenangle
}
function RightFoot () {
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(chosenangle)
            runservo = 1
            basic.showIcon(IconNames.Yes)
        } else if (input.buttonIsPressed(Button.A)) {
            adjNum += 10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (input.buttonIsPressed(Button.B)) {
            adjNum += -10
            chosenangle = adjNum
            basic.showNumber(chosenangle)
        } else if (adjNum > 180) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(adjNum)
        } else if (runservo != 0) {
            basic.showNumber(chosenangle)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, chosenangle)
            basic.pause(200)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 0)
        }
    }
    runservo = 0
    RigthFootSetting = chosenangle
}
let RigthFootSetting = 0
let LeftHipSetting = 0
let chosenangle = 0
let adjNum = 0
let runservo = 0
let loop = false
let angle = 0
basic.showIcon(IconNames.Scissors)
loop = true
runservo = 0
let Hip_LeftServo = 4
let Foot_RightServo = 5
adjNum = 0
let configmore = 0
basic.forever(function () {
    RightFoot()
    LeftHip()
})
