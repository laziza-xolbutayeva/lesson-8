'use strict'

// 1-masala Reverse Integer.Raqamni teskarisiga aylantiruvchi funksiya.

// let num = +prompt('Raqaqm kiriting: ');
// function ReverseInteger(num) {
//     let s = (String(num).split('')).reverse();
//     (s[0] == '0') ? s.splice(0, 1): 0;
//     if (s[s.length - 1] == '-') {
//         let minus = s.splice(s.length - 1);
//         s.unshift(minus[0]);
//     }
//     let str = '';
//     for (let i = 0; i < s.length; i++) str += s[i];
//     return Number(str);
// }
// console.log(ReverseInteger(num));




// 2-misol Move to Zeros.

// let arr = [0, 0, 15, 25, 16];
// function MoveToZero(arr) {
//     let t = 0;
//     let nul = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             t++;
//             continue;
//         }
//         nul.push(arr[i]);
//     }
//     for (let j = 1; j <= t; j++) nul.push(0);
//     return nul;
// }
// console.log(MoveToZero(arr));




// 7-misol a sonini raqamlar yig'indisi

// let num = 265;
// function numberSumm(num) {
//     let s = 0;
//     let len = String(num).length;
//     for (let i = 1; i <= len; i++) {
//         if (num < 10) {
//             s += num;
//         } else {
//             s += num % 10;
//             num = Math.floor(num / 10);
//         }
//     }
//     return s;
// }
// console.log(numberSumm(num));




// problem-1   TwoSum

// let mas = [3, 2, 11, 3];
// let num = 14;
// let arr = []
// for (let i = 0; i < mas.length; i++) {
//     for (let j = i + 1; j < mas.length; j++) {
//         if (mas[i] + mas[j] == num) {
//             arr[0] = i;
//             arr[1] = j;
//         }
//     }
// }
// console.log(arr);




// problem-2   isPalindrome

// let m = prompt("m=");
// let palindrom = 1;
// for (let i = 0; i <= m.length / 2; i++) {
//     if (m[i] != m[m.length - 1 - i]) {
//         palindrom = 0;
//     }
// }
// (palindrom == 1) ? console.log(true): console.log(false);




// problem-3

// let mas = ['apple', 'cherry', 'limon'];
// for (let i = 0; i < mas.length; i++) {
//     let arr = (mas[i].split('')).reverse();
//     let s = '';
//     for (let j = 0; j < arr.length; j++) {
//         s += arr[j];
//     }
//     mas[i] = s;
// }
// console.log(mas);