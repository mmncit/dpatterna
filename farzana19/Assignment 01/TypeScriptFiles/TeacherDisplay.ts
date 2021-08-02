import { DataFetcher } from "./DataFetcher";

export class TeacherDisplay extends DataFetcher {
  displayData(): void {
    console.log(
      "Techer view:\nCourse No: " +
        this.course +
        "\nTopic name: " +
        this.topic +
        "\nTeacher: " +
        this.teacher +
        "\nTime:" +
        this.time.toLocaleString("de-DE", { hour12: false })
    );
  }
}
