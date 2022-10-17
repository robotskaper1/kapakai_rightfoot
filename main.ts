// The RightFoot function helps you to adjust the servo used for the right foot of the Kapakai robot.
// By pressing the A button you increase the angle by 10 degrees.
// By pressing the B button you decrease the angle by -10 degrees.
// By pressing both A+B you send the chosen angle to the servo and see how it uses the new angle. Then you can press A or B to adjust and A+B to choose the angle you want.
// If you want to restart from 0 angle just press the reset button on the back of the microbit.https://twitter.com/robotverksted/
function RightFoot () {
    while (loop) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.showNumber(chosenangle)
            runservo = 1
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
}
let chosenangle = 0
let adjNum = 0
let runservo = 0
let loop = false
let angle = 0
basic.showIcon(IconNames.Scissors)
loop = true
runservo = 0
let servoNum = 5
adjNum = 0
basic.forever(function () {
    RightFoot()
})
