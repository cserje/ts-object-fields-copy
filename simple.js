"use strict";
const student = {
  name: "",
  age: 0,
};
const studentFromServer = {
  name: "Kristóf",
  age: 26,
};
let key;
for (key in student) {
  student[key] = studentFromServer[key];
}
console.log("✅ student mezők átmásolása kész:", student)
