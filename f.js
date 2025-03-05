
const products = [
    { name: 'Плейстейшин фуйфпро', category: 'Електроніка' },
    { name: 'епхон 17', category: 'Електроніка' },
    { name: 'Стіл', category: 'Меблі' },
    { name: 'Диван', category: 'Меблі' },
    { name: 'Смартфон', category: 'Електроніка' },
    { name: 'Шафа', category: 'Меблі' },
    { name: 'Навушники', category: 'Електроніка' }
];

const groupedProducts = products.reduce((acc, product) => {

    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});

for (const category in groupedProducts) {
    console.log(`Категорія: ${category}`);
    groupedProducts[category].forEach(product => {
        console.log(`  - ${product.name}`);
    });
}

/*1. Основні методи роботи з масивами  
- push(), pop(), shift(), unshift() – для додавання та видалення елементів.  
- map(), forEach(), filter(), reduce() – для обробки масиву.  
- find(), some(), every() – для пошуку елементів.  
- sort(), reverse() – для сортування.  
- slice(), splice() – для отримання або зміни частини масиву. 
/*2 Фільтрація масиву за умовою  
 const numbers = [10, 25, 30, 40];
   const filtered = numbers.filter(num => num > 20); // [25, 30, 40]
/*3 Способи сортування масиву у JavaScript - sort(compareFunction) – сортує масив за заданою логікою
 const arr = [5, 2, 8, 1];
   arr.sort((a, b) => a - b); // [1, 2, 5, 8]
/*4 Отримання ключів або значень об'єкта  
   - Object.keys(obj) – отримує список ключів.  
   - Object.values(obj) – отримує список значень.  
   - Object.entries(obj) – повертає масив пар [ключ, значення]. 
   const user = { name: "Anna", age: 30 };
   console.log(Object.keys(user)); // ["name", "age"]
   console.log(Object.values(user)); // ["Anna", 30]
   console.log(Object.entries(user)); // [["name", "Anna"], ["age", 30]]
/*5 Обчислення середнього арифметичного значення  
   const numbers = [10, 20, 30, 40];
   const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
   console.log(average);
*/