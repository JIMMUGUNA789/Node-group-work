const person = {
    name:'Jim',
    age:'old enough',
    height:'tall',
    weight:'heavy',
    
}

//const {name, age,height, weight} =person
const {height, ...other} =person
console.log(height)
/**
 * 
 * @param {string} brand 
 * @param {string} color 
 */
function car(brand, color){
    this._brand = brand
    this._color = color

}
const bmw = new car("x-5", "red")
console.log(bmw)