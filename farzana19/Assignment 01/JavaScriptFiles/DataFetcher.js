"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFetcher = void 0;
class DataFetcher {
    update(course, topic, teacher, time) {
        // throw new Error("Method not implemented.");
        this.course = course;
        this.topic = topic;
        this.teacher = teacher;
        this.time = time;
    }
}
exports.DataFetcher = DataFetcher;
