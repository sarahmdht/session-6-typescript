//*************normal type***************

// function getUserAge(): number {
//     const age= 100;
//     return age;
// }

//**************void type *****************

// function printHello(): void {
//     console.log("Hello");
// }

// console.log(getUserAge());
// printHello();

//****************parameters*******************
// function sum(firstNumber: number, secondNumber: number= 10, thirdNumber?: number): number {
//     return firstNumber + secondNumber + (thirdNumber || 0);
// }
// console.log(sum(2, 3));
// console.log(sum(2, 3, 4));

//*************rest***************
// function add(firstNumber: number, secondNumber: number, ...rest: number[]): number {
//     return firstNumber + secondNumber + rest.reduce((total, current)=> total + current, 0);
// }
// console.log(add(2, 3, 4, 5, 6, 7, 8));

//************Alias ***************
// type Age = number;
// const personAge: Age=100;

// type CarYear= number;
// type CarModel= string;

// type Car= {
//     model: CarModel,
//     year: CarYear
// }

// const car: Car= {
//     model: "bmw",
//     year: 2000
// }

//***************Interfaces***************** 
// interface User {
//     username: string,
//     password: string,
//     age: number
// }

// interface Client extends User {
//     discount: number
// }

// const person: User = {
//     username: "Sara",
//     password: "Password",
//     age: 100,
// }

// const customerOne: Client = {
//     username: "Sara",
//     password: "Password",
//     age: 100,
//     discount: 10
// }

// console.log(customerOne.username);

// interface Animal {
//     height: number
// }

// interface Dog extends Animal {
//     earsColor: string
// }

// interface Bird extends Animal {
//     canFly: boolean
// }

// const dogObject: Dog = {
//     height: 100,
//     earsColor:"black"
// }

// console.log(dogObject.height);