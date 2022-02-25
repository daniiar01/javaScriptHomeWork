//(str,number, boolean, undefined, null,bigInt,symbol)
// {} - [] ссылочный тип данных
// 
// let person = {
//     name: 'Daniiar',
//     sayHello:function () {
//         console.log(`Привет мир,меня звать ${this.name}`);
//     }

// }  
// person.sayHello()

// // spreed 
// let person2 = {...person}
// person2.name = 'ogogo'

// console.log(person)
// console.log(person2)

// let age = 25.3
// console.log(+age.toFixed());
// 
// // math
// let num = 25.7
// // floor() - округляет в меньшую сторону
// console.log(Math.floor(num));
// // ceil () - Округляет в большую сторону 
// console.log(Math.ceil(num));
// // Round() - округляет в ближнему числу
// console.log(Math.ceil (num));
// //random - генерирует от нуля до единицы
// // console.log (Math.round(Math.random()* 10))
// console.log(Math.max(1,2,3,4,5,67,85))
// // console.log(Math.min(-10,1,2,3,4,5,67,85))
// let num = 10
// console.log(typeof num.toString());
// let name = 'Ivan'
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// // console.log(name.includes('v'))
// // console.log(name.toLowerCase().includes('I'.toLowerCase()))
// console.log(5>10);
// console.log(5<10);
// console.log(5>=10);
// console.log(5<=10);



// //Логические операторы  && - оператор И,  || - оператор ИЛИ , ! - оператор НЕ
// console.log(5>10 && 10>3);
// console.log(5>10 || 10>3); 
// console.log(!1)

console.log(5>4)
console.log('ананас'>'яблоко')
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")



let age=prompt()



function checkAge() {
    age > 18 ? alert('Развлекайся') : alert('Родители разрешили?')
    
}
checkAge()



const myAge = prompt('Сколько тебе лет?');
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
checkAge(parseInt(myAge));



  let arr = [10];
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.random() * 100;
    console.log(Math.round(arr[i]));
  }







console.log(Math.round(Math.random()* 100));

console.log(6.34.toFixed(1));

console.log(Math.round(6.34*10) / 10);  
 
 console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
 
 console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

const arr = [ 1,2,3,4,5]
 console.log(arr.toString)
 
 console.log(+true);
 console.log(+false);