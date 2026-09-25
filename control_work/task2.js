let N = +prompt('Number of students');
let sum = 0, avg = 0, high = 0, low = 0, best = 0;
let marks = ''
for (let i = 1; i <= N; i++) {
    let mark = +prompt('Your mark?');
    if (mark < 1 || mark > 12) {
        alert('Wrong mark')
        continue;
    }
    if (mark >= 7) {
        high++;
    } else{
        low++;
    }
    if (mark > best){
        best = mark;
    }
    sum += mark;
    marks += `${mark} `;
}
avg = sum / N
console.log(`Num of students: ${N}`)
console.log(`Marks: ${marks}`)
console.log(`Sum: ${sum}`)
console.log(`Average: ${avg}`)
console.log(`>= 7: ${high}`)
console.log(`< 7: ${low}`)
console.log(`Highest mark: ${best}`)
