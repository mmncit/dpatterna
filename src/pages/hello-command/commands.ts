import {Light,RedLight,Command,LightOnCommand,LightOffCommand,RedLightOnCommand,
    IncreaseRedLightCommand,DecreaseRedLightCommand,RemoteControl,
} from "patterns/command/light-command";
  
  
  let light  = new Light();
  let redLight  = new RedLight();
  let LightOn: Command  = new LightOnCommand(light);
  let LightOff: Command  = new LightOffCommand(light);
  let RedLightOn: Command  = new RedLightOnCommand(redLight);
  let increaseRedLight: Command  = new IncreaseRedLightCommand(redLight);
  let decreaseRedLight: Command  = new DecreaseRedLightCommand(redLight);
  let remoteControl: RemoteControl  = new RemoteControl();

  var isRedLightOn = false;
  
  //assigns buttons to commands
  export function setLightCommands(command: string) {
    if (command == "on") {
      remoteControl.setCommand(LightOn);
    } else if (command == "off") {
      remoteControl.setCommand(LightOff);
    } else if (command == "redLight") {
      isRedLightOn = true;
      remoteControl.setCommand(RedLightOn);
      console.log("provider ", command);
    } else if (command == "increase" ) {
      remoteControl.setCommand(increaseRedLight);
    } else if (command == "decrease" ) {
      remoteControl.setCommand(decreaseRedLight);
    }
  
    return remoteControl.executeCommand();
  }