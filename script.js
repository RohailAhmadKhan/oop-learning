// PROTOTYPE

let a = {
    name2: "rohail",
    language: "js"
}
console.log(a)

// method 

let p = {
    run: () => {
        console.log("run")
    }
}

p.__proto__ = {
    roll: "279"
}

a.__proto__ = p
a.run()
console.log(a.roll)