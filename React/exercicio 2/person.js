class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log("Ola tudo bem? Meu nome é", this.name);
    }

}

module.exports = Person