// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
  
interface Person {
    firstName: string;
    lastName: string;
}
  
function greeter3(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
  
let user3 = new Student("Sam", "Y", "Klok");

console.log(greeter(user3));  
document.body.textContent = greeter(user3);
