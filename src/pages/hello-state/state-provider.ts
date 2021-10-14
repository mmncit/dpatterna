export function getState (action: String, gate: Gate): Gate{
  switch (action){
    case "enter":
      gate.enter()
      return gate
    case "payOk":
      gate.payOk()
      return gate
    case "payFailed":
      gate.payFailed()
      return gate
    default:
      gate.payFailed()
      return gate
  }
}
export interface GateState{
  enter():void
  payOk(): void
  payFailed(): void
  state(): String
}
export class OpenGateState implements GateState{
  gate: Gate
  public constructor(g: Gate){
    this.gate = g
  }
  enter():void{
    this.gate.changeState(new ClosedGateState(this.gate))
  }
  payOk(): void{

  }
  payFailed(): void{

  }
  state(): String{
    return `open`
  }
}
export class ClosedGateState implements GateState{
  gate: Gate
  public constructor(g: Gate){
    this.gate = g
  }
  enter():void{

  }
  payOk(): void{
    this.gate.changeState(new OpenGateState(this.gate))
  }
  payFailed(): void{

  }
  state(): String{
    return `closed`
  }
}
export class Gate{
  state: GateState
  public constructor(){
    this.state = new ClosedGateState(this)
  }
  public enter(): void{
    this.state.enter()
  }
  public payOk(): void {
    this.state.payOk()
  }
  public payFailed(): void{
    this.state.payFailed()
  }
  public getState(): String{
    return this.state.state()
  }
  public changeState(state: GateState): void {
    this.state = state
  }
}
