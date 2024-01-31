// string indicate
let str = " I am Learning and enjoying the javascript";
console.log( str[12]);

const gameName = new String('ankita, I am Learning and enjoying the javascript')
console.log(gameName[18]);
console.log(gameName.charAt(11));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,18)
console.log(newString);

const anotherString = gameName.slice(-2, 10)
console.log(anotherString);


let userName = String('tom & jerry, dextor, power of girls')
console.log(userName[15]);
console.log(userName.charAt(10));