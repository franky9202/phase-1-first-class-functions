function breakfastTea(chai, spice = "chai spice"){
    return `I like ${spice} tea!`
}

function receivesAFunction(breakfastTea){
     return breakfastTea()
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function () {}
}