
// Задание 1
var a = +prompt ('введите свой возраст');
if (18>=a){
    alert ('Вы еще молоды. Вам нужно учится');
}else if (50>=a){
    alert ('Вам нужно работать')
}else if(59>=a){
    alert('Вам скоро на пенсию')
}else if(150>=a){
    alert('Вы пенсионер')
}else if (a){
    alert('Что-то пошло не так')
    console.log('Что-то пошло не так')
}
// Задание 2
var clock = prompt ('ВВедите часы');
clock = Number (clock);
switch (clock) {
    case 1:
        alert('1 часа ночи')        
        break;
    case 2:
        alert('2 часа ночи')        
        break;
    case 3:
        alert('3 часа ночи')        
        break;
    case 4:
        alert('4 часа ночи')        
        break;
    case 5:
        alert('5 часа ночи')        
        break;
    case 6:
        alert('6 часа ночи')        
        break;
    case 7:
        alert('7 часа утра')        
        break;
    case 8:
        alert('8 часа утра')        
        break;
    case 9:
        alert('9 часа утра')        
        break;
    case 10:
        alert('10 часа дня')        
        break;
    case 11:
        alert('11 часа дня')        
        break;
    case 12:
        alert('12 часа дня')        
        break;
    case 13:
        alert('13 часа дня')        
        break;
    case 14:
        alert('14 часа дня')        
        break;
    case 15:
        alert('15 часа дня')        
        break;
    case 16:
        alert('16 часа дня')        
        break;
    case 17:
        alert('17 часа дня')        
        break;
    case 18:
        alert('18 часа дня')        
        break;
    case 19:
        alert('19 часа вечера')        
        break;
    case 20:
        alert('20 часа вечера')        
        break;
    case 21:
        alert('21 часа вечера')        
        break;
    case 22:
        alert('22 часа ночи')        
        break;
    case 23:
        alert('23 часа ночи')        
        break;
    case 00:
        alert('0 часа ночи')        
        break;
    default:
        console.log('ошибка')
        break;
}
// Задание 3
var x = prompt ('Введите число 1');
var y = prompt ('Введите число 2');
var z = prompt ('Введите число 3');
x = Number (x);
y = Number (y);
z = Number (z);
if ( y < x && x < z || z < x && x < y) {
    alert ('среднее число ='+x);
}else if (x < y && y < z || z < y && y < x) {
    alert ('среднее число ='+y);
}else {
    alert ('среднее число ='+z);
}
