function greeter(person) {
  return "Hello, " + person;
}
let user = "Sam Klok";
console.log(greeter(user));
document.body.textContent = greeter(user);