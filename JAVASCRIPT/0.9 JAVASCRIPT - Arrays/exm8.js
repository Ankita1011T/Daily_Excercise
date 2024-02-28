// array 
let items = [ 'milk','bread','butter']
console.log(items)
items.splice(1,1)
console.log(items)

//Primitive
//reference =  anyithing apart from brackets is primitive () {} []

// reference 

let a = [ 1,2,3,4]
let b = a;
console.log(b)

b.pop()
console.log(b)

let mybooks = ['book1','book2','book3']
let arpitbooks = mybooks;

arpitbooks.pop()
console.log(arpitbooks)

//primitive

let ashishaccount = 100;
let yashaccount = ashishaccount;

yashaccount = 80;

console.log(ashishaccount,yashaccount)