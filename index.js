(function add(num1, num) {
  console.log(num + num1);
})(78, 77);
function add(num1, num){

}
add()
const greeting = name => {
  console.log("Greetings " + name);
};
greeting("jim");
const getFullname = (fname, lname) => {
  return fname + " " + lname;
};
console.log(getFullname("Jim", "Muguna"));

/**
 * 
 * @param {number} age 
 * @returns 
 */
const adult = (age) => age > 18;
console.log(adult());
//anonymous functions
((a, integer)=>{
    return a+integer
})(4,5)

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function sub(a, b){
  return b-a;
}
