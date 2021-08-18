import { Light, RedLight } from "patterns/command/light-command";
import { setLightCommands } from "pages/hello-command/commands";

describe('Command Pattern Test', () => {
    test('Turn On Light', () => {
        let expectation = new Light();
        let reality = setLightCommands ("on");
        expect(expectation.on()).toEqual(reality);
    })
    test('Turn Off Light', () => {
        let expectation = new Light();
        let reality = setLightCommands ("off");
        expect(expectation.off()).toEqual(reality);
    })
    test('Set Red Light', () => {
        let expectation = new RedLight();
        let reality = setLightCommands ("redLight");
        expect(expectation.RedLight()).toEqual(reality);
    })
    test('Red Light Increase', () => {
        let expectation = new RedLight();
        let reality = setLightCommands ("increase");
        expect(expectation.increaseRedLight()).toEqual(reality);
    })
    test('Red Light Decrease', () => {
        let expectation = new RedLight();
        let reality = setLightCommands ("decrease");
        expect(expectation.decreaseRedLight()).toEqual(reality);
    })
    
})