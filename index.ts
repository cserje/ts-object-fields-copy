type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "",
  age: 0,
};

// teljesen felesleges, de a valós példához jobban igazodik
const ajaxCall = () =>
  new Promise<Student>((resolve) => {
    const storedStudent: Student = {
      name: "Kristóf",
      age: 26,
    };
    resolve(storedStudent);
  });

// a feladat annyi lenne, hogy a visszakapott Student típusú object mezőinek értékét
// dinamikusan másoljuk át a "lokális" student nevű object mezőibe
ajaxCall()
  .then((_student) => {
    for (const key in student) {
      student[key] = _student[key];
    }
    // lehetett volna ez "fordítva" is:
    // for (const key in _student) {
    //   student[key] = _student[key];
    // }
  })
  .finally(() => console.log(`✅ student mezők átmásolása kész: ${student}`));
