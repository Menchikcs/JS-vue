// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// let sum = 0;
// for(let i = 0; i < 30; i++){
//     sum += i
// }
// console.log(sum);

//______________________________________#1
// let sum = 0;
// for(let i = 0; i <= 50; i+=2){
//     sum += i
// }
// console.log(sum);

// let count = 0;
// for(let i = 1; i<=100; i++){
//     if (i % 3 === 0){
//         count++;
//     }
// }
// console.log(count);

// for(let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break
//     }
// }

// for(let i = 1; i<= 30; i++){
//     if (i%5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let studentCount = +prompt("Enter your student count?");
// if (studentCount > 0){
//     let sum = 0, highLevel = 0, other = 0;
//     while (studentCount > 0){
//         let mark = +prompt("Enter your students mark?");
//         if (!(mark >= 1 && mark <= 12)){
//             alert('ERROR')
//             studentCount--;
//             continue;
//         }
//         if (mark >= 7){
//             highLevel++;
//         }
//         else{
//             other++;
//         }
//         sum += mark;
//         studentCount--;
//     }
//     console.log(sum)
//     console.log(sum / studentCount);
//     console.log(highLevel);
//     console.log(other);
// }
// else{
//     alert('ERROR. NO SUCH COUNT')
// }

//________________________________#2
let participantsCount = +prompt('How many people?');
if (participantsCount > 0){
    let highRES = 0, midRES = 0, lowRES = 0,
        maxRES = 0, minRES = 0, firstbest = 0;
    let i = 1
    let sum = 0;
    while (i <= participantsCount){
        let score = +prompt('Enter your score');
        if (!(score >= 0 && score <= 100)){
            alert('ERROR. Try again')
            continue;
        }
        sum += score;
        if (score === 100 && firstbest === 0){
            firstbest = i
        }
        if (score >= 90){
            highRES++;
        } else if (score >= 60){
            midRES++;
        } else{
            lowRES++;
        }
        if (score > maxRES){
            maxRES = score
        }
        if (score < minRES){
            minRES = score
        }

        i++
    }
    let avg = sum / participantsCount;

    console.log(`Average score: ${avg}`);
    console.log(`How many got 90-100: ${highRES}`);
    console.log(`How many got 60-89: ${midRES}`);
    console.log(`How many got below 60: ${lowRES}`);
    console.log(`Max result: ${maxRES}`);
    console.log(`Min result: ${minRES}`);
    if (firstbest !== 0){
        console.log(`First best student who got 100 is number ${firstbest}`);
    } else{
        console.log('No one got 100 score');
    }
}
else{
    alert('ERROR')
}