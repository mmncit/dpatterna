export interface Observer {
    update(course:String, topic: String, teacher: String,time: Date): void
}