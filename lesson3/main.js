'use strict'

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let n = 100
let nextNum = 2
let simpleNum = []
while (nextNum < n) {
    let spam = 0
    for (let j = 2; j < parseInt(nextNum ** 0.5) + 1; j++) {
        if (nextNum % j == 0) {
            spam++
        }
    }
    if (spam == 0) {
        simpleNum.push(nextNum)
    }
    nextNum++
}
console.log(simpleNum)

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let arr = [200, 120, 300, 50, 34, 540]

function countBasketPrice(array) {
    return array.reduce((sum, item) => sum + item, 0)
}

console.log(countBasketPrice(arr))

// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
// должно так:
// for(...){// здесь пусто}

for (let k = 0; console.log(k), k < 9; k++) {

}


// 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:

let x = 'x'
for (let i = 0; i < 20; i++) {
    console.log(x)
    x += 'x'
}
