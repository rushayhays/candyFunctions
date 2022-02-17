// The candy making set of functions
//NSS 2/16/2022

function buyChocolate() {
    const obj = {
        type: "Milk chocolate"
    };
    return obj;
}

function addFlavoring(obj) {
    obj.flavor = "Mint";
    return obj;
}

function makeBarkMixture(obj) {
    if(obj.flavor==="Mint") {
        obj.mixed = true;
    } else {
        obj.mixed = false;
    }
    return obj;
}

function bakeCandy(obj) {
    if(obj.mixed === true){
        obj.baked = true;
    } else {
        obj.baked = false;
    }
    return obj;
}

function breakBark(obj) {
    if(obj.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece",]
    }
}

//This is a second candy object to check the if/else
//statement
const yummyTreat = buyChocolate();
yummyTreat.flavor = "Peanut butter";
makeBarkMixture(yummyTreat);
bakeCandy(yummyTreat);

//This is the main candy object
const sweetTreat = bakeCandy(makeBarkMixture(addFlavoring(buyChocolate())));

console.log(sweetTreat)
console.log(yummyTreat)

console.log(breakBark(sweetTreat));
console.log(breakBark(yummyTreat));