let favMovie =(name = "Tommy Wiseau", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}`)

favMovie("Scott", "Into the Spiderverse");

let getFirstName = (fullName) => {
    const names = fullName.split(" ");
    console.log(names[0]);
}

let getFirstNameConcise = (fullName) => {const names = fullName.split(" "); console.log(names[0]);}

getFirstName("Scott Jaworski");

getFirstNameConcise("Ben Myers");


let doMath = (a, b) => {
    exponet = a ** b;
    product = a * b;
    const result = {
        exponet,
        product
    }
    console.log(`Exponet: ${result.exponet}`);
    console.log(`Product: ${result.product}`);
}

doMath(2,3);

let personDesc = (name, location, favFood) => {
    console.log(`Name: ${name} Location: ${location} Favorite Food: ${favFood}`)
}

let myProfile = ["Scott", "Maryland", "Pizza"]

personDesc(...myProfile);

let newName = "Scott";

let spreadVar = (input) => {
    let chars = [...input];
    for(let i = 0; i < chars.length; i++) {
        console.log(chars[i])
    }
}

spreadVar(newName);