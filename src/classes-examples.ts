//******classes and visibility******
// class Person {
//      private username: string;
//      public constructor(username: string) {
//         this.username = username;
//     }
//     public getUsername(): string {
//         return this.username;
//     }
// }
// const user = new Person("Sara");
// console.log(user.getUsername());

//***************inherit ************
interface Shape {
    getArea: () => number;
}
class Rectangle implements Shape {
public constructor(protected readonly width:number, protected readonly height: number) {

}
public getArea(): number{
    return this.width * this.height;
};
}



interface Animal {
    makeSound: () => void
}

class Dog implements Animal {
    public constructor(){

    }
    public makeSound(): void{
console.log("HawHaw")
    }
}

class Cat implements Animal {
    public constructor(){

    }
    public makeSound(): void{
console.log("Meaw")
    }
}