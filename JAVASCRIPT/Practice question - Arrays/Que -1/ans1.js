let marks = [ 85, 97, 44, 37, 76, 60 ];

let sum = 0;

for (let val of marks){
    console.log(val);
    sum += val;
}

let avg = sum /marks.length;
console.log(`avg marks of the class = ${avg}`);