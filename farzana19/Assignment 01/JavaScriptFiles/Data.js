"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
        this.observers = [];
    }
    registerObserver(o) {
        // throw new Error("Method not implemented.");
        this.observers.push(o);
    }
    removeObserver(o) {
        // throw new Error("Method not implemented.");
        this.observers = this.observers.filter(ob => ob !== o);
    }
    notifyObserver() {
        // throw new Error("Method not implemented.");
        this.observers.map(ob => {
            ob.update(this.course, this.topic, this.teacher, this.time);
            ob.displayData();
        });
    }
    measuredChanged(course, time, topic, teacher) {
        this.course = course;
        this.topic = topic;
        this.teacher = teacher;
        this.time = new Date(time);
        this.notifyObserver();
    }
}
exports.Data = Data;
