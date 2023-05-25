function addTwo(num : number) { // to solve erroe i have given num : number
    return num // here i want to add 2 in a number
}

//addTwo("5") // but ive given a string which it shouldn't add and should give an error but its not and the type its giveng is any so to solve that
addTwo(2)

function getUpper(val1 : string ){
    return val1.toUpperCase()
}

let signUpUser = (name : string , email: string, isPaid: boolean = false ) => {} // if we want to give some parameters then we put some as default

signUpUser("j", "hg@.com")

function add(num : number) :number { // use extra : number to addd strict type
    return num +2
}

add(5)

// conditional check where we have to add multiple types
function getVal (myVal : number) : string {
    if (myVal > 5) {
        return true
    }
    return "ok"
}
 
// arrow function

const getHello = (s, string) : string => {
    return "" // for an arrow function sothing must be passed in return
}

// using list and map 
//const list = [23 , 22, 56] 
const list = ["jack", "bonn"]
list.map(list => {  //here the map function automatically convert it to string when a sring is entered and automatically convert to number when a number is entered
    return list
})
export {}