function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
        //(parameter) obj: string
    }
    else {
        return obj;
    }
}
var x = wrapInArray("test");
console.log("x = " + x);
var fruits = ['Apple', 'Orange', 'Banana'];
var y = wrapInArray(fruits);
console.log("y = " + y);
