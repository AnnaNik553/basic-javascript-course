'use strict'

// 1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);      // 2  префиксная форма инкремента, а = 2, с = 2
d = b++; alert(d);      // 1 постфиксная форма инкремента, d = 1, b = 2
c = (2 + ++a); alert(c);   // 5 префиксная форма инкремента, a = 3, c = 5
d = (2 + b++); alert(d);   // 4 постфиксная форма инкремента, d = 4, b = 3
alert(a);     // 3 
alert(b);     // 3

// 2. Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2); // 1 + (а = 2 * 2) = 5

// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// значения. Затем написать скрипт, который работает по следующему принципу:
// o если a и b положительные, вывести их разность;
// o если а и b отрицательные, вывести их произведение;
// o если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

var a = 10
var b = -20

function checkingSign(x, y) {
    if (x >= 0 && y >= 0) {
        alert(x - y);
    } else if (x < 0 && y < 0) {
        alert(x * y);
    } else {
        alert(x + y);
    }
}

checkingSign(a, b)

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
// организовать вывод чисел от a до 15.

var a = 12
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

switch (a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        alert(arr.slice(a));
}

// 5. Реализовать четыре основные арифметические операции в виде функций с двумя
// параметрами. Обязательно использовать оператор return.

function mySum(a, b) {
    return a + b;
}

function myDiff(a, b) {
    return a - b;
}

function myMulti(a, b) {
    return a * b;
}

function myDivision(a, b) {
    return a / b;
}

alert(mySum(4, 10));
alert(myDiff(4, 10));
alert(myMulti(4, 10));
alert(myDivision(4, 10));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'mySum':
            return mySum(arg1, arg2);
        case 'myDiff':
            return myDiff(arg1, arg2);
        case 'myMulti':
            return myMulti(arg1, arg2);
        case 'myDivision':
            return myDivision(arg1, arg2);
    }
}

alert(mathOperation(5, 4, 'myMulti'))

// 7. * Сравнить null и 0. Объяснить результат.

alert(null == 0); // false

// 1 статья https://habr.com/ru/company/ruvds/blog/337732/
// Оператор == использует так называемый абстрактный алгоритм сравнения для равенств, возвращая в результате true или false.Вот этот алгоритм:
// Сравнение x == y, где x и y являются значениями, возвращает true или false.Такое сравнение производится следующим образом:
// 1. Если Тип(x) отличается от Типа(y) - переход на шаг 14.
// ...
// 14. Если x равно null, а y равно undefined - вернуть true.
// 15. Если x равно undefined, а y равно null - вернуть true.
// 16. Если Тип(x) равен Number, а Тип(y) равен String, вернуть результат сравнения x == ToNumber(y).
// 17. Если Тип(x) равен String, а Тип(y) равен Number, вернуть результат сравнения ToNumber(x) == y.
// 18. Если Тип(x) равен Boolean, вернуть результат сравнения ToNumber(x) == y.
// 19. Если Тип(y) равен Boolean, вернуть результат сравнения x == ToNumber(y).
// 20. Если Тип(x) - String или Number, а Тип(y) - Object, вернуть результат сравнения x == ToPrimitive(y).
// 21. Если Тип(x) - Object, а Тип(y) - String или Number, вернуть результат сравнения ToPrimitive(x) == y.
// 22. Вернуть false.

// Пытаясь понять, равно ли значение null значению 0, мы сразу переходим из шага 1 к шагу 14, так как Тип(x) отличается от Типа(y). Как ни странно, но шаги 14-21 тоже к нашему случаю не подходят, так как Тип(х) — это null. Наконец мы попадаем на шаг 22, после чего false возвращается как значение по умолчанию!

// 2 статья https://webformyself.com/vse-o-null-v-javascript/
// Для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.

// 8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень.


var res = 1
function power(val, pow) {
    if (pow == 1) {
        return val
    } else {
        return (val * power(val, pow - 1));
    }
}

alert(power(3, 4))

