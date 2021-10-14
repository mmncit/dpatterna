interface IDoorState{
  onEnter() : void;
  onPayOk() : void;
  onPayFalse(): void;
  message() : string;
}
 
 
class OpenState implements IDoorState{
 
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
 
  message(): string {
    return "open";
  }
 
  onEnter(): void {
    this.door.setState(new ClosedState(this.door));
  }
 
  onPayOk(): void {
    this.door.setState(new OpenState(this.door));
  }
  onPayFalse(): void {
    this.door.setState(new OpenState(this.door));
  }
 
 
}
 
 
class ClosedState implements IDoorState{
  door: Door;
  constructor(door: Door) {
    this.door = door;
  }
 
  message(): string {
    return "closed";
  }
 
  onEnter(): void {
    this.door.setState(new ClosedState(this.door));
  }
 
  onPayOk(): void {
    this.door.setState(new OpenState(this.door));
  }
  onPayFalse(): void {
    this.door.setState(new ClosedState(this.door));
  }
 
}
 
 
 
class Door{
 
  private _state: IDoorState;
 
  constructor() {
    this._state = new OpenState(this);
 
  }
 
 
  setState(value: IDoorState) {
    this._state = value;
  }
 
 
  payFalse(){
    this._state.onPayFalse();
    return this._state.message();
  }
 
  payOk(){
    this._state.onPayOk();
    return this._state.message();
  }
 
  enter(){
    this._state.onEnter();
    return this._state.message();
  }
 
 
}
 
 
 
const door: Door = new Door()
 
export function getState(message: string) {
 
 
 
  switch (message) {
    case "enter":
      return door.enter();
 
    case "payOk":
      return door.payOk();
 
    case "payFailed":
      return door.payFalse();
    default:
      return "processing";
  }
}