/*！
 * @file tankmind/main.ts
 * @brief Tank microbit motor drive makecode library.
 *
 *
 * @author [email](rafal.mracz@gmail.com)
 * @version  V0.2
 * @date  2019.5.18
 */

/**
 *This is Tank Motors:motor user motor and steering control function.
 */
//% weight=10 color=#015b00 icon="\uf009" block="Tank"


namespace Tank {
    WSJoyStick.JoyStickInit()
    /**
     * Motor control.
     */
    //% weight=100
    //% blockId=motor_control block="M1|%speed1|M2|%speed2"
    //% speed1.min=0 speed2.max=255
    export function motors(speed1: number, speed2: number) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed1)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed2)
    }

    /**
 * Change chanel.
*/
    //% weight=99
    //% blockId=chanel_changer block="Chanel|%number"
    export function chanelchanger(chanel: number) {
        radio.setGroup(chanel)
        WSJoyStick.JoyStickInit()
    }
}