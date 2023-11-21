"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    ;
}
class Dog {
    constructor() {
    }
    makeSound() {
        console.log("HawHaw");
    }
}
class Cat {
    constructor() {
    }
    makeSound() {
        console.log("Meaw");
    }
}
