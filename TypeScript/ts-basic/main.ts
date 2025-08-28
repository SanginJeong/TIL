// console.log("hello Typescript");

// let size = 100;
// size = "L";

// 기본형
// let name: string = "Jeong";
// let age: number = 26;
// let isMen: boolean = true;
// let und: undefined = undefined;
// let nul: null = null;

// nul = undefined;

// 배열과 튜플
const cart: string[] = [];
cart.push("1");
cart.push("2");
// cart.push(3); // error

// const carts: string[][] = ["1"]; // error
const carts: string[][] = [["1", "2"]];

// 배열의 길이는 정해져있지 않다.
// let mySize: number[] = [1, 2];
// mySize = [1, 2, 3];
// mySize = [1];

// 길이까지 정해주고 싶다? -> 튜플

let mySize: [number, number, string] = [1, 2, "3"];
