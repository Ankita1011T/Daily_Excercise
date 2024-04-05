//////////////////////// first example /////////////////
var tomm = 'rain';

if (tomm == 'rain'){
    console.log("take a raincoat")
}else
    console.log("no need to take a raincoat")

////////////// second Exmaple : ///////////////////

var weekend = "officework";

if (weekend == 'dayoff'){
    console.log("No need to work on weekends")
}else if ( weekend == 'Public'+'holiday' || weekend == 'office'+'work' ){
    console.log("paid leave")
}