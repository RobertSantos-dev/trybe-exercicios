
// Questão 1
const employees = {};

const newEmployees = (fullName) => {
    let = email = '';
    employees[`id${Object.keys(employees).length + 1}`] = {
        Nome: `${fullName}`,
        Email:`${fullName = fullName.replace(' ', '_').toLowerCase()}@trybe.com`,
    }
    return employees;
};

newEmployees('Pedro Guerra');
newEmployees('Luiza Drumond');
newEmployees('Carla Paiva');
console.log(employees);
console.log('----------------------------------------------------');

//Questão 2
const sorteio = (n) => {
    let ns = Math.round(Math.random() * 5);
    let res = '';
    if (ns === 0) { ns = 1; }
    ns===n?res='Tente novamente':res='Parabéns você ganhou';

    return res;
}
console.log(sorteio(3));
console.log('----------------------------------------------------');

//Questão 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const ver = (arrGab, arrStu) => {
    let res = [0,0];
    for (let i in arrGab) {
        if (arrGab[i] === arrStu[i] && arrStu[i] !== 'N.A') { res[0] += 1; }
        else if (arrGab[i] !== arrStu[i] && arrStu[i] !== 'N.A') { res[1] += 1; }
    }
    return `Acertos: ${res[0]} | Erros: ${res[1]}`;
}
const avaliador = (arr1, arr2, verificador) => {
    return verificador(arr1, arr2);
}

console.log(avaliador(RIGHT_ANSWERS, STUDENT_ANSWERS, ver));
