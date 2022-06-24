
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
