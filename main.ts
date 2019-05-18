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
//% weight=10 color=#094400 icon="\uf013" block="Tank"


namespace Tank {

    /**
     * Motor control.
     */
    //% weight=100
    //% blockId=motor_control block="M1|%speed1|M2|%speed2"
    //% speed1.min=0 speed2.max=255
    function motors(speed1: number, speed2: number) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed1)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed2)
    }

}