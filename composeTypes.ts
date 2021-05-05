type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;


function getLength(obj: string | string[]) {
  return obj.length;
}


function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
      //(parameter) obj: string
    } else {
      return obj;
    }
  }

let x = wrapInArray("test");
console.log("x = " + x);

let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let y = wrapInArray(fruits);
console.log("y = " + y);
