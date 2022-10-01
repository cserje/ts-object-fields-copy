type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "",
  age: 0,
};

const studentFromServer: Student = {
  name: "Kristóf",
  age: 26,
};

let key: keyof Student;
for (key in student) {
  student[key] = studentFromServer[key];
}
