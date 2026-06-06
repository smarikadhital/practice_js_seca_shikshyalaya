//class:blueprint of real pbject
class Car{
    //constructor
    constructor(name,color,engine,brand){
        //properties
        this.color=color;
        this.name=name;
        this.engine=engine;
        this.brand=brand;
    }
    //method:represents functionality of object
    move(){
        console.log(`${this.name} car is moving`)

    }
    start(){
        console.log(`${this.name} has started`)
    }
    stop(){
        console.log(`${this.name} has stopped`)

    }
}
//creating object of class
let myNewCar=new Car("saabas001","Black","Engine 45","SAABAS")
myNewCar.start()
myNewCar.move()
myNewCar.stop()
console.log("color of my car:",myNewCar.color)
console.log("BMW")
let bmw= new Car("bmw10","white","engine100","BMW")
bmw.start()
bmw.move()
bmw.stop()