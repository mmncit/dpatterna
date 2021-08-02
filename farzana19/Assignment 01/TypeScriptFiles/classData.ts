import { DataFetcher } from "./DataFetcher";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class ClassData implements Subject{
  course!:string
  topic!:string
  teacher!:string
  time!:Date
  observers:Array<DataFetcher> = []
  registerObserver(o: DataFetcher): void {
    // throw new Error("Method not implemented.");
    this.observers.push(o)
  }
  removeObserver(o: DataFetcher): void {
    // throw new Error("Method not implemented.");
    this.observers = this.observers.filter(ob => ob !== o)
  }
  notifyObserver(): void {
    // throw new Error("Method not implemented.");
    this.observers.map(ob => {
      ob.update(this.course, this.topic, this.teacher,this.time)
      ob.displayData()
  })
  }
  measuredChanged(course:string, time: string, topic: string, teacher: string): void{
    this.course = course
    this.topic = topic
    this.teacher = teacher
    this.time = new Date(time)
    this.notifyObserver()
}
  
}