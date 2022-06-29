const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arr,arr2) {
    return arr.map((element,i) => {
        return {
            name:element, average:arr2[i].reduce((res,num) => res+num,0)/arr2[i].length,
        }
    })
}

console.log(studentAverage(students,grades));