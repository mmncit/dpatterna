import { Light, RedLight,LightOnCommand,LightOffCommand,RedLightOnCommand,
    IncreaseRedLightCommand,DecreaseRedLightCommand } from "patterns/command/light-command";
import { setLightCommands } from "pages/hello-command/commands";

describe('Command Pattern Test', () => {
    let light=new Light();
    let redlight=new RedLight();
    test('Turn On Light', () => {
        let expectation = setLightCommands ("on");
        let reality = new LightOnCommand(light);
        expect(expectation).toEqual(reality.execute());
    });
    test('Turn Off Light', () => {
        let expectation = setLightCommands ("off");
        let reality = new LightOffCommand(light);
        expect(expectation).toEqual(reality.execute());
    });
    test('Set Red Light', () => {
        let expectation = setLightCommands ("redLight");
        let reality = new RedLightOnCommand(redlight);
        expect(expectation).toEqual(reality.execute());
    });
    test('Red Light Increase', () => {
        let expectation = setLightCommands ("increase");
        let reality = new IncreaseRedLightCommand(redlight);
        expect(expectation).toEqual(reality.execute());
    });
    test('Red Light Decrease', () => {
        let expectation = setLightCommands ("decrease");
        let reality = new DecreaseRedLightCommand(redlight);
        expect(expectation).toEqual(reality.execute());
    });
    
})