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