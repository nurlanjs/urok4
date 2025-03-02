/*
Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив

Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
*/

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) == "number") {
        data[i] = data[i] * 2;
    } else {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);


const data2 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for (let i = 0; i < data2.length; i++) {
    result2[i] = data2[data2.length - 1 - i];
}
console.log(result2);


/*
     *
    ***
   *****
  *******
 *********
***********
*/

let str = '';
for (let i = 6; i > 0; i--) {
    for (let j = i; j >= i; j--) {
        str += ' ';
    }
    str += '*\n';
}
console.log(str);