let arr = [ '10','11','18','93','str','true','*','90']
console.log(typeof arr[6]);
console.log(arr[5]);
console.log(arr.reverse())

arr.push('100');
arr.pop('*');
console.log(arr);

let ret = arr.indexOf('90');
console.log(ret)


//let newarr = arr.concat('45','Rohit sharma','100')
var newarr = ['45','Rohit sharma','100'];
var newarr = newarr.join(["'*  *  *'"]);
console.log(newarr);

