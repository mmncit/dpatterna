//Light class is the receiver
export class Light {
    public on(): string {
      return "on"; //light is on and it will display on.png
    }
    public off(): string {
      return "off";//light is off and it will display off.png
    }
  }
  
  export class RedLight {
    luminosity= 0;
    RedLight(): string {
      this.luminosity = 0;
      return "red0";//at first click it will display red/0.png
    }
    off():string {
        return "off";
    }
  
    increaseRedLight(): string {
      this.luminosity++;
      //ensures that red light will only be among it's shades
      if (this.luminosity < 3) {
        return `red${this.luminosity}`;
      } else {
        return `red3`;//will not change after brightest shade
      }
    }
    decreaseRedLight(): string {
      this.luminosity--;
      //ensures that red light will only be among it's shades
      if (this.luminosity < 0) {
        return "red0";//will not change after dullest shade
      } else {
        return `red${this.luminosity}`;
      }
    }
  }
  
  //interface of commands to control light
  export interface Command {
    execute(): string;
  }
  
  //turns on the light
  export class LightOnCommand implements Command {
    light: Light;
    constructor(light: Light) {
      this.light = light;
    }
    execute(): string {
      return this.light.on();
    }
  }
  
    //turns off the light
  export class LightOffCommand implements Command {
    light: Light;
    constructor(light: Light) {
      this.light = light;
    }
    execute(): string {
      return this.light.off();
    }
  }
  
    //turns on the red light
  export class RedLightOnCommand implements Command {
    light: RedLight;
    constructor(light: RedLight) {
      this.light = light;
    }
    execute(): string {
      return this.light.RedLight();
    }
  }
  
    //increases the red light
  export class IncreaseRedLightCommand implements Command {
    light: RedLight;
    constructor(light: RedLight) {
      this.light = light;
    }
    execute(): string {
      return this.light.increaseRedLight();
    }
  }
  
    //decreases the red light
  export class DecreaseRedLightCommand implements Command {
    light: RedLight;
    constructor(light: RedLight) {
      this.light = light;
    }
    execute(): string {
      return this.light.decreaseRedLight();
    }
  }
  
  //Invoker
  export class RemoteControl {
    command!: Command;
  
    setCommand(command: Command) {
        //the commands to be executed by remote
      this.command = command;
    }
  
    public executeCommand() {
      return this.command.execute();//executes the command
    }
  }