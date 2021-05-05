;
var userConst = {
    name: "Hayes",
    id: 0
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Serge", 1);
var UserAccount2 = /** @class */ (function () {
    function UserAccount2(name, id) {
        this.name = name;
        this.id = id;
    }
    ;
    UserAccount2.prototype.changeName = function (newName) {
        this.name = this.name + newName;
    };
    ;
    return UserAccount2;
}());
var user2 = new UserAccount("Sam", 1);
var userConst2 = {
    //age: 18,  // it will cause compilation error
    name: "McKayla",
    id: 4
};
