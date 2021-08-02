import { Observer } from "./Observer";

export abstract class DataFetcher implements Observer{
    course!:String
    topic!:String
    teacher!:String
    time!:Date
  
   
    update(course: String, topic: String, teacher: String, time: Date): void {
        // throw new Error("Method not implemented.");
        this.course=course
        this.topic=topic
        this.teacher=teacher
        this.time=time
    }
    abstract displayData(): void 
}