var brightness:number = 0

export interface ICommand {

    execute(): string

    unexecute(): void

}

export class Invoker {
    command!: ICommand;

    constructor() {
    }

    setCommand(onCommand: ICommand) {
        this.command = onCommand;
    }

    executeCommand() {
        return this.command.execute()
    }


}


export class NormalLight {

    public lightOn(): string {
        return 'on'
    }

    public lightOff(): string {
        return 'off'
    }
}

export class RedLight {

    public lightOn(): string {
        return `red${brightness}`
    }

    public lightOff(): string {
        return "off"
    }

    public increaseLuminosity(): string {
        brightness++;
        return `red${brightness}`
    }

    public decreaseLuminosity(): string {
        brightness--;
        return `red${brightness}`

    }
}

export class LightOnCommand implements ICommand {

    private light: NormalLight

    constructor(_light: NormalLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOn();
    }

    unexecute(): void {

    } 


}

export class LightOffCommand implements ICommand {
    private light: NormalLight

    constructor(_light: NormalLight) {
        this.light = _light
    }

    execute(): string {
        return this.light.lightOff()
    }

    unexecute(): void {

    } 

}


export class RedLightOn implements ICommand {
    
    private light: RedLight;

    constructor(_light: RedLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOn()
    }

    unexecute(): void {

    } 

}

export class RedLightIncreaseLuminosity implements ICommand {
    private light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }

    unexecute(): void {

    } 

}

export class RedLightDecreaseLuminosity implements ICommand {
    private light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }

    unexecute(): void {

    } 

}


export class RedLightOff implements ICommand {
    private light: RedLight;

    constructor(_light: RedLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOff()
    }

    unexecute(): void {

    } 

}


