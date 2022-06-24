
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