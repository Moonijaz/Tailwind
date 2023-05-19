//  use any whenever you don’t want a particular value to cause typechecking errors.

let variable ;  // now this variable is any it dosent know which datatype it has.

function getvariable(){ // but here
    return true
}

variable = getvariable // here now it is assigned boolean

export{}