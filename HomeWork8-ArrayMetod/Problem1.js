//Problem 1. Make person
//Write a function for creating persons.
//Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders
    var peoples = [ 
        new Person('Ivan', 'Petrov', 10 , 'mele'),
        new Person('Nikolai', 'Ivanov', 15 , 'male'),
        new Person('Dragan', 'Cankov', 31 , 'female'),
        new Person('Petko', 'Nolan', 22 , 'male'),
        new Person('Natalia', 'Nikolaevna', 40 , 'female'),
        new Person('Milen', 'Todorova',  39 , 'male'),
        new Person('Toshko', 'Stefanova', 21 , 'male'),
        new Person('Milena', 'Jankova', 41 , 'female'),
        new Person('Joana', 'Djurova', 23 , 'male'),
        new Person('Silvia', 'Nikolova', 30 , 'female')
    ]; 
    // Solution   
    function Person(fname, lname, age, gender) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.gender = gender;
    }

    function creatingPerson(item) {
        return console.log(JSON.stringify(item));
    }
    // Output
    peoples.forEach(creatingPerson);
