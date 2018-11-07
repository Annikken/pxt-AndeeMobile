/**
 * Functions for the Annikken AndeeMobile
 */
//% weight=50 color=#16bfbe
namespace AndeeMobile {
	/**
	 * Begin
	 * Stop the use of LED screen
	 */
    //% blockId=Begin
    //% block="Begin AndeeMobile"
    //% advanced=false
    export function andeeMobileBegin(): void {
        led.enable(false);
        pins.analogSetPitchPin(AnalogPin.P3);
    }

	/**
	 * Move the AndeeMobile forward 
	 * @param speed Set the forward speed of the AndeeMobile from 0 to 1023, eg: 1023
	 */
    //% blockId=move_forward
    //% block="Move Forward at speed %speed"
    //% advanced=false
    export function moveForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed);
        pins.digitalWritePin(DigitalPin.P8, 0);
    }
	/**
	 * Move the AndeeMobile backward 
	 * @param speed Set the backward speed of the AndeeMobile from 0 to 1023, eg: 1023
	 */
    //% blockId=move_backward
    //% block="Move Backward at speed %speed"
    //% advanced=false
    export function moveBackward(speed: number): void {
        pins.analogWritePin(AnalogPin.P0, speed);
        pins.digitalWritePin(DigitalPin.P8, 1);
    }
	/**
	 * Turn the AndeeMobile
	 * @param turn Change direction the AndeeMobile, eg:Turn.Right
	 */
    //% blockId=Turn
    //% block="Turn AndeeMobile %turn"
    //% advanced=false
    export function turnMobile(turn: Turn): void {
        if (turn == 0) {
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        else if (turn == 1) {
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        else {
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.digitalWritePin(DigitalPin.P16, 1);
        }
    }
	/**
	 * Switch Headlights On/Off
	 * @param headlight Turn Head Lights On/Off , eg:Switch.On
	 */
    //% blockId=Headlight
    //% block="Turn Head Lights %headlight"
    //% advanced=false
    export function headLight(headlight: Switch): void {
        pins.digitalWritePin(DigitalPin.P6, headlight);
    }
	/**
	 * Switch Taillights On/Off
	 * @param taillight Turn Tail Lights On/Off , eg:Switch.On
	 */
    //% blockId=Taillight
    //% block="Turn Tail Lights %taillight"
    //% advanced=false
    export function tailLight(taillight: Switch): void {
        pins.digitalWritePin(DigitalPin.P7, taillight);
    }
	/**
	 * Car Horn plays a tone in x number of milliseconds
	 * @param tone Car Horn plays tone, eg:Note.C
	 * @param duration In milliseconds, eg:300
	 */
    //% blockId=Car_Horn
    //% block="Play Car Horn|%note=device_note| for %duration"
    //% parts="headphone"
    //% advanced=false
    export function carHorn(tone: Note, duration: number): void {
        music.playTone(tone, duration);
    }
	/**
	 * Open/Close Car Door 
	 * 
	 */
    //% blockId=Car_Door
    //% block="Toggle Car Door"
    //% advanced=false
    export function carDoor(): void {
        pins.digitalWritePin(DigitalPin.P9, 1);
        basic.pause(2000);
        pins.digitalWritePin(DigitalPin.P9, 0);
    }
	/**
	 * Turn all power off 
	 * 
	 */
    //% blockId=power_down
    //% block="Cut All Power"
    //% advanced=false
    export function cutPower(): void {
        pins.analogWritePin(AnalogPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P8, 0);
        pins.digitalWritePin(DigitalPin.P12, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);

        pins.digitalWritePin(DigitalPin.P6, 0);
        pins.digitalWritePin(DigitalPin.P7, 0);
        pins.digitalWritePin(DigitalPin.P3, 0);
        pins.digitalWritePin(DigitalPin.P9, 0);
    }
}

enum Turn {
    //% block="Straight"
    Straight = 0,
    //% block="Left"
    Left = 1,
    //% block="Right"
    Right = 2
}

enum Switch {
    //% block="Off"
    Off = 0,
    //% block="On"
    On = 1
}