"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDisplay = void 0;
const DataFetcher_1 = require("./DataFetcher");
class TeacherDisplay extends DataFetcher_1.DataFetcher {
    displayData() {
        console.log("Techer view:\nCourse No: " +
            this.course +
            "\nTopic name: " +
            this.topic +
            "\nTeacher: " +
            this.teacher +
            "\nTime:" +
            this.time.toLocaleString("de-DE", { hour12: false }));
    }
}
exports.TeacherDisplay = TeacherDisplay;
