// class hamster{
//     constructor(owner, name, price){
//         this.owner = owner;
//         this.name = name;
//         this.price = price;
//     }
//     get wheelRun(){
//         console.log("squeak squeak");
//     }
//     get eatFood(){
//         console.log("nibble nibble");
//     }
//     get getPrice(){
//         return this.value();
//     }
//    value(){
//         return this.price;
//     }
// }


// const Hampter = new hamster("Michelle", "Hampter", 15);
// console.log(Hampter.wheelRun);

//height is measured in cm for ease of coding, and weight is in lbs

class person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){ 
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters
        this.bankAccount = bankAccount
    }
    get Name(){
        return this.name
    }
    get Age(){
        return this.age
    }
    get Weight(){
        return this.weight
    }
    get greet(){
        return "Hi my name is " + this.name
    }
    get eat(){
        return this.weight = this.weight + 4
    }
    get excercise(){
        return this.weight = this.weight - 3
    }
    get ageUp(){
        return (this.Age = this.Age + 1) + (this.height = this.height + 3) + (this.mood = this.mood - 5)
    }
    get buyHamster(){
        return (this.bankAccount = this.bankAccount - 10) + (this.mood = this.mood + 10)
    }
}
const Human = new person ("Katie", 17, 165, 125, 0, 0, 50)
console.log(Human)
