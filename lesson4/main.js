'use strict'

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

function getObj(num) {
    if (String(num).length > 3) {
        console.log('Число превышает 999!')
        let obj = {}
        return obj
    } else {
        let arr = String(num).split('')
        while (arr.length < 3) {
            arr.unshift(0)
        }
        let obj
        return obj = {
            'единицы': +arr[2],
            'десятки': +arr[1],
            'сотни': +arr[0]
        }
    }
}

console.log(getObj(456))


// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let Basket = [
    { name: 'prod1', price: 200 },
    { name: 'prod2', price: 120 },
    { name: 'prod3', price: 300 },
    { name: 'prod4', price: 50 },
    { name: 'prod5', price: 34 },
    { name: 'prod6', price: 540 }
]


function countBasketPrice(products) {
    let Price = 0
    for (let prod of products) {
        for (let el in prod) {
            if (el == 'price') {
                Price += prod[el]
            }
        }
    }
    return Price
}

console.log(countBasketPrice(Basket))



