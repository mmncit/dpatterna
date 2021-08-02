"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDisplay = void 0;
const DataFetcher_1 = require("./DataFetcher");
class StudentDisplay extends DataFetcher_1.DataFetcher {
    displayData() {
        console.log("Student view:\nCourse No: " +
            this.course +
            "\nTopic name: " +
            this.topic +
            "\nTeacher: " +
            this.teacher +
            "\nTime:" +
            this.time.toLocaleString("en-us", { hour12: true }));
    }
}
exports.StudentDisplay = StudentDisplay;
