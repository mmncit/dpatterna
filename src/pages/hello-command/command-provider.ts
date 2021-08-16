import {
    ICommand,
    Invoker,
    NormalLight,
    RedLight,
    LightOnCommand,
    LightOffCommand,   
    RedLightOn,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    RedLightOff   
} from "../../patterns/command/command-remote";

let isRedLightOn: boolean = false
let result: string;


export function commandHandler(command: string): string {

    switch (command) {
        case "on":
            if(isRedLightOn)
            {
                result = commandOnLight(new RedLightOn(new RedLight()))
            }
            else
            {
                result = commandOnLight(new LightOnCommand(new NormalLight()))
            }
            break;

        case "off":
            isRedLightOn=false
            //result = isRedLightOn ? commandOnLight(new RedLightOff(new RedLight())) : commandOnLight(new LightOffCommand(new NormalLight()))
            result = commandOnLight(new LightOffCommand(new NormalLight()))
            break

        case "increase":
            //result=isRedLightOn?commandOnLight(new RedLightIncreaseLuminosity(new RedLight())):commandOnLight(new LightOnCommand(new NormalLight()))
            if(isRedLightOn)
            {
                result = commandOnLight(new RedLightIncreaseLuminosity(new RedLight()))
            }
            break

        case "decrease":

            //result =isRedLightOn?commandOnLight(new RedLightDecreaseLuminosity(new RedLight())) : commandOnLight(new LightOnCommand(new NormalLight()))
            if(isRedLightOn)
            {
                result = commandOnLight(new RedLightDecreaseLuminosity(new RedLight()))
            }
            break

        case "red":
            isRedLightOn = true
            //result=isRedLightOn?commandOnLight(new RedLightOn(new RedLight())):commandOnLight(new LightOnCommand(new NormalLight()))
            result = commandOnLight(new RedLightOn(new RedLight()))
            break
        default:

    }

    return result;

}

export function commandOnLight(command: ICommand): string {

    const remoteController = new Invoker();
    remoteController.setCommand(command)
    return remoteController.executeCommand()

}

