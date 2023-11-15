const studentsBtn = document.getElementById("students-btn");
studentsBtn.addEventListener('click', () => {
    const ages = [14, 15, 13, 15, 15, 13, 15, 16];
    let averageAge = (ages.reduce((prevAge, age) => prevAge + age) / ages.length).toFixed(1);
    let aboveAverageAge = ages.filter((age) => age > averageAge);
    alert(aboveAverageAge);
});

const abbreviationBtn = document.getElementById("abbreviation-btn");
abbreviationBtn.addEventListener('click', () => {
    const phrase = prompt('Input a word');
    const words = phrase.split(" ");
    let abbreviation = words.map((word) => word[0].toUpperCase()).join('');
    alert(abbreviation);
});

const numbersBtn = document.getElementById("numbers-btn");
numbersBtn.addEventListener('click', () => {
    const numbers = [4, 2, 5, 7, 1, 8, 9];
    const evenNumbers = numbers.filter((number) => number % 2 === 0).sort((a, b) => b - a);
    alert(evenNumbers);
});

const showProductsBtn = document.getElementById("show-products-btn");
const addProductsBtn = document.getElementById("add-products-btn");
const removeProductsBtn = document.getElementById("remove-products-btn");
const sumProductsBtn = document.getElementById("sum-products-btn");
const productsDiv = document.getElementById("products");
const productsList = {
    apple: 5,
    banana: 7,
    orange: 4,
    pineapple: 10,
    pear: 5
}
showProductsBtn.addEventListener('click', () => {
    productsDiv.innerHTML = '';
    for (const product in productsList) {
        productsDiv.innerHTML += `${product} - ${productsList[product]}$<br>`;
    }
});

addProductsBtn.addEventListener('click', () => {
    let newProduct = prompt("Input product name");
    let newProductPrice = prompt("Input product price");
    productsList[newProduct] = newProductPrice;
});

removeProductsBtn.addEventListener('click', () => {
    let product = prompt("Input the name of the product you want to remove");
    delete productsList[product];
});

sumProductsBtn.addEventListener('click', () => {
    let sum = Object.values(productsList).reduce((prevSum, sum) => +prevSum + +sum);
    alert(`${sum}$`)
});


const aboutStudentBtn = document.getElementById("about-student-btn");
const aboutEmployeeBtn = document.getElementById("about-employee-btn");
class Man {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    about() {
        alert(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`);
    }
}

class Student extends Man {
    constructor(name, surname, age, school) {
        super(name, surname, age);
        this.school = school;
    }
    about() {
        super.about();
        alert(`School: ${this.school}`);
    }
}

class Employee extends Man {
    constructor(name, surname, age, work) {
        super(name, surname, age);
        this.work = work;
    }
    about() {
        super.about();
        alert(`Work: ${this.work}`);
    }
}

// let man = new Man("Alex", "Johnson", 19);
let student = new Student("Alex", "Johnson", 19, "School 17");
aboutStudentBtn.addEventListener('click', () => {
    student.about();
});

let employee = new Employee("Alex", "Johnson", 19, "Store");
aboutEmployeeBtn.addEventListener('click', () => {
    employee.about();
});