const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addObj = (obj, ch, val) => obj[ch] = val;
const listObj = (obj) => Object.keys(obj);
const tamObj = (obj) => Object.entries(obj).length;
const valObj = (obj) => Object.values(obj);

addObj(lesson2,'turno','noite');

console.log(lesson2);
console.log("-----------------------");
console.log(listObj(lesson3));
console.log("-----------------------");
console.log(tamObj(lesson1));
console.log("-----------------------");
console.log(valObj(lesson2));

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons);
