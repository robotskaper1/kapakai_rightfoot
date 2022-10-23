function RightFoot () {
    while (loop) {
        if (runservo == 1) {
            basic.showNumber(chosenangle)
            for (let index = 0; index < 4; index++) {
                kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, chosenangle)
                basic.pause(200)
                kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 0)
            }
        }
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
        } else if (adjNum > 70) {
            basic.showIcon(IconNames.Sad)
            basic.showNumber(adjNum)
        }
    }
}
let chosenangle = 0
let adjNum = 0
let runservo = 0
let loop = false
let angle = 0
basic.showIcon(IconNames.Scissors)
loop = true
runservo = 0
let Hip_RightServo = 4
let Hip_LeftServo = 4
let Foot_RightServo = 65
let Foot_LeftServo = 65
adjNum = 0
let configmore = 0
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, Hip_RightServo)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, Hip_LeftServo)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, Foot_RightServo)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, Foot_LeftServo)
basic.forever(function () {
    RightFoot()
})
