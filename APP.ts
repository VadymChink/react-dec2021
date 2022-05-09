// const show = (a: number, b: number): number => {
//     return a + b;
// }

// const user = {name:'max', age: 20}
//
// const showUser = (user:{name:string,age:number}):void => {
//     user.name
// };


// const user:{name:string,age:number}={age:40,name:'max'};

// console.log(user);

// type UniqId = number;
//
// interface IUser<T> {
//     id?: UniqId,
//     name: string,
//     age: number,
//     // address: IAddress,
//     arr: T[]
// }
//
// interface IAddress {
//     street: string,
//     house: number
// }

// const user: IUser = {id: 1, age: 40, name: 'max', address: {street: 'street', house: 40}};
// const user2: IUser = {age: 40, name: 'max', address: {street: 'street', house: 40}};
//
// console.log(user);
// console.log(user2);
//
// const user3: Partial<IUser> = {id: 1, age: 40, name: 'max'};
// console.log(user3);


// const user4: IUser<number> = {id: 1, age: 40, name: 'max', arr: [1, 2, 3, 4]};
// const user5: IUser<string> = {id: 1, age: 40, name: 'max', arr: ['1', '2', '3', '4']};
//
// type StateType = [string, (a: number, b: number) => number]
//
// const useState: StateType = ['text', (a, b) => {
//     return a + b;
// }];
//
// const [first, second] = useState;
//
// console.log(first);
// console.log(second(3, 5));
//
//
// class User {
//     constructor(private id: number,protected name: string,public age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }

// const user: User = {age: 20, name: 'max'}

// let user1 = new User(12,'max',15)


interface IShapeActions {
    area: () => number;
    perimeter: () => number;
}

class Triangle implements IShapeActions {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        return this.a * this.b * this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

class Rectangle implements IShapeActions {
    constructor(private a: number, private b: number) {

    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return this.a + this.b;
    }

}


const shapes: IShapeActions[] = [new Triangle(1, 2, 3), new Rectangle(1, 2)]


for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}



