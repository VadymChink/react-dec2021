
import {userService} from "./services";
import {MyEnum,MyEnum2} from "./enums";

const getAllUsers = async () => {
    const {data} = await userService.getAll();
    for (const user of data) {
        console.log(user.name);
    }
}

getAllUsers();


console.log(MyEnum.ADD);
console.log(MyEnum.RESET);
console.log(MyEnum.DELETE);
console.log(MyEnum2.ADD);
console.log(MyEnum2.RESET);
console.log(MyEnum2.DELETE);
