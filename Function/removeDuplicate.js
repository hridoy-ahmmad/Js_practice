const students = ['a', 'a', 'b', 'c', 'c', 'd']

function removeDuplicate(students) {
    let singleStudent = []
    for (let student of students) {
        if (singleStudent.includes(student) === false) {
            singleStudent.push(student)
        }

    }
    return singleStudent

}
const result = removeDuplicate(students)
console.log(result);

for (var i = 0; i < 5; i++) {
    setTimeout(
        function () {
            console.log(i);
        }, 100);
}
