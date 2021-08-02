import { ClassData } from "./classData";
import { DataFetcher } from "./DataFetcher";

import { Observer } from "./Observer";
import { StudentDisplay } from "./StudentDisplay";
import { TeacherDisplay } from "./TeacherDisplay";

const classdata = new ClassData();

const s1: DataFetcher = new StudentDisplay();
classdata.registerObserver(s1);
console.log("1st output");
classdata.measuredChanged(
  "SWE-4501",
  "10/07/2021, 4:36 PM",
  "Observer Pattern",
  "ABC"
);

const s2: DataFetcher = new StudentDisplay();
classdata.registerObserver(s2);
console.log("\n\n\n2nd output");

classdata.measuredChanged(
  "SWE-4501",
  "10.07.2021, 23:55",
  "Observer Pattern",
  "ABC"
);

classdata.removeObserver(s2);
console.log("\n\n\n3rd output");

classdata.measuredChanged(
  "SWE-4501",
  "10.07.2021, 23:56",
  "Observer Pattern",
  "ABC"
);

const t1:DataFetcher = new TeacherDisplay();
classdata.registerObserver(t1);
console.log("\n\n\n4th output");
classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");