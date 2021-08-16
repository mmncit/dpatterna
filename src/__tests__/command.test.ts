import { NormalLight, RedLight } from "patterns/command/command-remote";
import { commandHandler } from "pages/hello-command/command-provider";

describe('Command Pattern Test', () => {
    test('Red Light Increased', () => {
        let expected = new RedLight();
        let reality = commandHandler ("increase");
        expect(expected.increaseLuminosity()).toEqual(reality);
    })
    test('Red Light Decreased', () => {
        let expected = new RedLight();
        let reality = commandHandler ("decrease");
        expect(expected.decreaseLuminosity()).toEqual(reality);
    })
    test('Set Red Light', () => {
        let expected = new RedLight();
        let reality = commandHandler ("set-red-light");
        expect(expected.lightOn()).toEqual(reality);
    })
    test('Turn On Light', () => {
        let expected = new NormalLight();
        let reality = commandHandler ("on");
        expect(expected.lightOn()).toEqual(reality);
    })
    test('Turn Off Light', () => {
        let expected = new NormalLight();
        let reality = commandHandler ("off");
        expect(expected.lightOff()).toEqual(reality);
    })
})