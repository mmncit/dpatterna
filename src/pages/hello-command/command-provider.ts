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
let isNormalLightOn: boolean = false
let result: string;


export function commandHandler(command: string): string {

    switch (command) {
        case "on":

            result = commandOnLight(new LightOnCommand(new NormalLight()))
            isNormalLightOn = true
            break;

        case "off":
        
            result = commandOnLight(new LightOffCommand(new NormalLight()))
            isNormalLightOn = false
            
            break

        case "increase":
            
            if(isRedLightOn)
            {
                result = commandOnLight(new RedLightIncreaseLuminosity(new RedLight()))
            }
            break

        case "decrease":
          
            if(isRedLightOn)
            {
                result = commandOnLight(new RedLightDecreaseLuminosity(new RedLight()))
            }
            break

        case "red":
 
            if(isNormalLightOn)
            {
                result = commandOnLight(new RedLightOn(new RedLight()))
                isRedLightOn = true
            }           
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

