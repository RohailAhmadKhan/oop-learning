class MyRailway {
    constructor(givenName, trainno) {
        this.name = givenName
        this.trainno = trainno
        console.log("constructor called")
    }
    // class methods
    submit() {

        alert(this.name + " your form is submited  for train : " + this.trainno)
    }

    cancel() {

        alert(this.name + " your form is cancelled for train : " + this.trainno)
    }

}

let abdullahForm = new MyRailway("abdullah", 1231)

let mohibForm1 = new MyRailway("mohib", 1222)
let mohibForm2 = new MyRailway("mohib", 1234)


abdullahForm.submit()
mohibForm1.submit()
mohibForm2.submit()
mohibForm2.cancel()
