interface userInterface {
    name: string;
    id: number;
};

const userConst = {
    name: "Hayes",
    id: 0,
};
  
class UserAccount {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}
  
const user1: userInterface = new UserAccount("Serge", 1);


class UserAccount2 {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    };

    changeName(newName: string){
        this.name = this.name + newName;
    };
}

const user2: userInterface = new UserAccount("Sam", 1);

const userConst2: userInterface = {
    //age: 18,  // it will cause compilation error
    name: "McKayla",
    id: 4,
}