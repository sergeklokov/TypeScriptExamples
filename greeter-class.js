// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Sam", "Y", "Klok");
console.log(greeter(user));
document.body.textContent = greeter(user);
