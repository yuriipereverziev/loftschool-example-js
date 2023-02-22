/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

// forEach([1, 2, 3], (el) => console.log(el))
import {push} from "karma/lib/init/log-queue";

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array)
    }
}

forEach([1, 2, 3], (el) => console.log(el))

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    const mod = []
    for (let i = 0; i < array.length; i++) {
        mod[i] = fn(array[i], i, array)
    }

    return mod
}

map([1, 2, 3], (el) => el ** 2)

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    const hasInitial = typeof initial !== 'undefined';
    let prev = hasInitial ? initial : array[0];

    for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
        prev = fn(prev, array[i], i, array)
    }

    return prev
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    const props = []

    for (const name in obj) {
        props.push(name.toUpperCase())
    }

    return props
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
