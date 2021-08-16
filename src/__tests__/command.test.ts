import { Invoker, LightOffCommand, LightOnCommand, NormalLight, RedLight, RedLightDecreaseLuminosity, RedLightIncreaseLuminosity, RedLightOn } from "patterns/command/command-remote";
import { commandHandler, commandOnLight } from "pages/hello-command/command-provider";

const invoker = new Invoker();
describe('Command Pattern Test', () => {
    test('Turn On Light', () => {
        let expected = commandOnLight(new LightOnCommand(new NormalLight()))
        invoker.setCommand(new LightOnCommand(new NormalLight()))
        let reality = invoker.executeCommand()
        expect(expected).toEqual(reality);
    })
    test('Turn Off Light', () => {
        let expected = commandOnLight(new LightOffCommand(new NormalLight()))
        invoker.setCommand(new LightOffCommand(new NormalLight()))
        let reality = invoker.executeCommand()
        expect(expected).toEqual(reality);
    })
    test('Set Red Light', () => {
        let expected = commandOnLight(new RedLightOn(new RedLight()))
        invoker.setCommand(new RedLightOn(new RedLight()))
        let reality = invoker.executeCommand()
        expect(expected).toEqual(reality);
    })
    test('Red Light Increased', () => {
        let expected = commandOnLight(new RedLightIncreaseLuminosity(new RedLight()))
        invoker.setCommand(new RedLightIncreaseLuminosity(new RedLight()))
        let reality = invoker.executeCommand()
        expect(expected).toEqual(reality);
    })
    test('Red Light Decreased', () => {
        let expected = commandOnLight(new RedLightDecreaseLuminosity(new RedLight()))
        invoker.setCommand(new RedLightDecreaseLuminosity(new RedLight()))
        let reality = invoker.executeCommand()
        expect(expected).toEqual(reality);
    })


})