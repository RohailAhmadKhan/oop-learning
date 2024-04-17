class MyRailway {
    // class methods
    submit() {

        console.log(this.name + " your form is submited  for train # : " + this.trainno)
    }

    cancel() {

        console.log(this.name + " your form is cancelled for train # : " + this.trainno)
    }
    fill(givenName, trainno) {
        this.name = givenName
        this.trainno = trainno
    }
}

let abdullahForm = new MyRailway()
abdullahForm.fill("Abdullah", 151)
let tayyabForm = new MyRailway()
tayyabForm.fill("Tayyab", 656)
let mohibForm1 = new MyRailway()
mohibForm1.fill("Mohib", 123)
let mohibForm2 = new MyRailway()
mohibForm2.fill("Mohib", 321)


abdullahForm.submit()
tayyabForm.submit()
mohibForm2.submit()
mohibForm1.submit()
mohibForm1.cancel()
