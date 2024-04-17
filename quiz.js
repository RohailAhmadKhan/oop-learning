class user {
    constructor(name, pass, emial) {
        this.name = name;
        this.pass = pass;
        this.emial = emial;
    }
    submit() {
        console.log("USER NAME : " + this.name + " Submitted")
        console.log("USER EMAIL : " + this.emial + " Submitted")
        console.log("USER PASSWORD : " + this.pass + " Submitted")
    }

    cancel() {
        console.log("USER NAME : " + this.name + " Cancelled")
        console.log("USER EMAIL : " + this.emial + " Cancelled")
        console.log("USER PASSWORD : " + this.pass + " Cancelled")
    }
}

let user1 = new user("Rohail", "123", "admin@gmial.com")
let user2 = new user("Mohib", "334983", "root@gmial.com")
let user3 = new user("Ahmed", "heri99292", "ahmed34@gmial.com")

user1.submit()
user2.submit()
user3.submit()
user2.cancel()

