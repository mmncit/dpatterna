import { DataFetcher } from "./DataFetcher";

export class StudentDisplay extends DataFetcher {
  displayData(): void {
    console.log(
      "Student view:\nCourse No: " +
        this.course +
        "\nTopic name: " +
        this.topic +
        "\nTeacher: " +
        this.teacher +
        "\nTime:" +
        this.time.toLocaleString("en-us", { hour12: true })
    );
  }
}
