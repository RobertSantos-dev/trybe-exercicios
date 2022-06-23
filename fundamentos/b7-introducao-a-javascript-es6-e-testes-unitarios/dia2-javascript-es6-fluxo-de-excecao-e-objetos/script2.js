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

console.log("----------- 1 ------------");
console.log(lesson2);
console.log("------------ 2 -----------");
console.log(listObj(lesson3));
console.log("------------ 3 -----------");
console.log(tamObj(lesson1));
console.log("------------ 4 -----------");
console.log(valObj(lesson2));

//Questão 5
const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log("------------ 5 -----------");
console.log(allLessons);

// Questão 6
const totEstudantes = (obj, ch) => {
    let res = [];
    for (let i = 0; i < Object.values(obj).length; i += 1) {
        res.push(Object.values(obj)[i][ch]);
    }
    return res;
}
console.log("----------- 6 ------------");
console.log(totEstudantes(allLessons, 'numeroEstudantes'));

// Questão 7
const retornaCh = (obj, ch) => {
    let res = Object.values(obj)[ch];
    return res;
}
console.log("----------- 7 ------------");
console.log(retornaCh(lesson1, 0));

// Questão 8
const verObj = (obj, ch, val) => {
    let res = false
    for (let i = 0; i < Object.values(obj).length; i += 1) {
        if (Object.keys(obj)[i] === ch && Object.values(obj)[i] === val){
            res = true;
        }
    }
    return res;
}
console.log("----------- 8 ------------");
console.log(verObj(lesson3, 'turno', 'noite'));
console.log(verObj(lesson3, 'materia', 'Maria Clara'));
