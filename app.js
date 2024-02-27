//1.Convert the following named function to an arrow function:
/*
const printMessage = message => {console.log( message )}
printMessage("hola")

//2. Convert the following named function to an arrow function:

const createMultiplication = (number1, number2) => number1 * number2
console.log(createMultiplication(5,6))


//3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.
function crearMultiplicacion (número1, número2) {
    let result = número1 * número2
    return result
}

const array = [ 1,2,3,4,5,6,7,8,9 ]
console.log(array)

const newArray = array.map(crearMultiplicacion)
console.log(newArray)
*/
/*
//4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.
console.log(beers)

*/
/*
//5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.


//6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

const beerName = "Electric"
console.log(beers.filter(beer => beer.name.toLowerCase().includes(beerName.toLowerCase())))

//7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”
const ibu = "80"
function findingBeerIbu(beers, ibu) {
    const findbeers = beers.find(beer => beer.ibu == ibu)
    if (findbeers == undefined) {
        console.log(`There is no beer with an ibu of ${ibu}`)
    }else{
        console.log(findbeers)
    }
}
findingBeerIbu(beers, ibu)

//8. Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”
const nameBeer = "buzz"

function findingBeerName(beers, nameBeer) {
    const findbeers = beers.find(beer => beer.name.toLowerCase().includes(nameBeer.toLowerCase()))
    if (findbeers == undefined) {
        console.log(`${nameBeer} does not exist.`)
    }else{
        console.log (beers.findIndex(beer => beer.name.toLowerCase().includes(nameBeer.toLowerCase())))
    }
}
findingBeerName(beers, nameBeer)
*/

//9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

//10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

//11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.
