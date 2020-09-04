/* We create two constants, one with the first name and one with the last name. */

const name = 'Jesus';
const surname = 'Ramos';

/* We create an asynchronous function that will be called example. */

async function example() {

    /* We create a function, which will be called What is your name, which will show by console the name previously 
    saved in a constant and will return name. */

    function whatsYourName() {
        console.log(`My name is ${name}`)
        return name;
    };

    /* We create another function, which will be called What is your last name, which will show the last name previously 
    saved in a constant by console and will return last name. */

    function whatsYourSurname() {
        console.log(`My surname is ${surname}`)
        return surname;
    };

    /* We create an asynchronous function, which will be called full name, within it we create two variables, one call returnName 
    and another returnSurname these, through the regular expression "await" it will return values of the called functions and save 
    them in the variables. This function will return an object with the values stored in the variables. It should be noted that the 
    await expression is used in async / await to wait for a promise to be returned. It can only be used in asynchronous functions. */

    async function nameComplete() {
        let returnName = await whatsYourName(); //Jesús
        let returnSurname = await whatsYourSurname(); //Ramos
        return {
            name: returnName,
            surname : returnSurname
        };
    }

    /* Uncomment and you will see */

    // await nameComplete();

    /* Compile the program and you will see the final result. =D */

    async function otherName() {
        let objectName = await (nameComplete());
        console.log(`After all the promises kept, the name is returned. Keeping promises ${objectName.name} ${objectName.surname}`)
    }

    await otherName();
}

example()