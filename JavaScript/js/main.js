// // tb 1 nut
// alert('Ngu học');
// // tb 1 nut

// confirm('ngu');
// // tb nhap
// prompt('ngu')

// // doi tg roi chay
// setTimeout(function() {
//         alert('ngu')

//     }, 1000)
//     // chay code trong n giay
// setInterval(console.log('11'), 1000)




// var a = 1 && NaN || 'Hi' && null && 100
// var b = 1 || NaN && 'Hi' || null && 100
// console.log(a);
// console.log(b);

var myString = "Hoc JS tai F8!";
// 1.Length
// console.log(myString.length);
// var s = myString.length;
//  2.find index(tim kiem vi tri)
// console.log(myString.indexOf('fHoc'));
// chuoi dau tien nhin thay
// vi tri ' tu vi tri nào do'
// console.log(myString.indexOf('JS',6));
// vi tri cua 'js' cuoi cung
// console.log(myString.lastIndexOf('JS'));
// 3.Cut tring
// console.log(myString.slice(4,6));
// cat du dau den cuoi:  0;
// cat du vi tri bat ki den cuoi den cuoi:  myString.slice(4);
// cat tu phai qua trai thi viet so am
// 4.replace
// console.log(myString.replace('js','javascript'));
// sua tat ca js thanh javascipt
// console.log(myString.replace(/js/g,'javascript'));
// 5.convert to upper case
// console.log(myString.toLocaleUpperCase());
// 6.convert to lower case
// console.log(myString.toLocaleLowerCase());
// 7.Trim(xoa khoang trang)
// console.log(myString.trim());
// 8.split(cat chuoi thanh array)
// var languages='javascript, PHP, Ruby';
// console.log(languages.split(', '));
// // cat tuing chu cai
// var languages='javascript';
// console.log(languages.split(''));
// 9.get a charater by index
// var myString2 = "DInh Manh";
// console.log(myString2.charAt(1));
// ko ton tai tra ve undefined
// console.log(myString2[1]);


// array

// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];
// // 1.to string
// console.log(languages.toString());
// // 2.join->>array thanh chuoi
// console.log(languages.join(''));
// console.log(languages.join('-'));
// console.languages(languages.join(', '));
// // 3.pop--> xoa pt cuoi va tra ve pt da xoa
// console.log(languages.pop());
// // 4.push-->them pt vao cuoi mmang
// console.log(languages.push('ngu'));
// console.log(languages.push('ngu', 'hoc'));
// // 5.shift--> xoa pt dau mang va tra ve pt da xoa
// console.log(languages.shift());
// // 6.unshift--> them pt vao dau mang
// console.log(languages.unshift('ngu'));
// console.log(languages.unshift('ngu', 'hoc'));
// // 7.splicing--> xoa,chen pt vao vt bat ki
// languages.splice(1, 1);
// tu vi tri xoa 1 phan tu
// languages.splice(1, 0, 'ngu');
// them ngu vao vi tri 1;
// languages.splice(1, 1, 'ngu');
// xoa vi tri 1 them ngu vao vt 1;
// // 8.concat--> noi aray
// var languages2=['ngu','hoc'];
// console.log(languages.concat(languages2));
// // 9.slicing--> cat tu vi tri 1 den 2
// console.log(languages.slice(1,2));
// console.log(languages.slice(0)); lay all mang
// so am lay tu cuoi length
// var anArray = [
//     '1', '2', '3', '4'
// ]
// anArray.splice(1, 1, 'g', 'g');
// // if (anArray.length < 3) anArray.splice(0, 1)
// // else if (anArray.length > 2) anArray.splice(-2, 2);
// console.log(anArray)

// function calculateTriangleArea(a, h) {
//     if (typeof a === "number" && typeof h === "number" && !isNaN(a, h)) {
//         if (a > 0 && h > 0) return 0.5 * a * h;
//         else return false;
//     } else return false;
// }
// console.log(calculateTriangleArea(1, 'a'));
// function checkExistIdol(idos,ios) {
// idos.typeOf
// }
// checkExistIdol('Maria Ozawe', 'Maria Ozawe', 'Maria Ozawe');



// // date
// lay ra ngay thang
// var date = new Date();
// console.log(date);

// var year=date.getFullYear();
// // vi no tut 1 thang nen + 1
// var month=date.getMonth()+1;
// var day=date.getDate();

// var hours=date.getHours();
// var minutes=date.getMinutes();
// var seconds=date.getSeconds();
// var date = new Date();

// function getCurrentYear() {
//     return date.getFullYear();
// }
// console.log(getCurrentYear());


// function getDifferentSeconds(seconds_1, seconds_2) {
//     seconds_1 = new Date('2020/06/31 16:00:00');
//     seconds_2 = new Date('2020/06/31 16:00:10');

//     return Math.floor((+seconds_2.getTime() / 1000) - (+Math.floor(+seconds_1.getTime() / 1000)));

// }
// console.log(getDifferentSeconds())




// for

// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }



// array
// 1.forEach():duyet qua tung pt cua mang
var a = [{
            g: '1',
            h: '1'
        },
        {
            g: '1',
            h: '2'
        }

    ]
    // a.forEach(function(aa) {
    //     console.log(aa.h);
    // });
    // // every:kiem tra tat ca theo dk
    // var isFree = a.every(function(aa, aaa) {
    //     return aa.g === '1'
    // });
    // console.log(isFree);
    // some:1 phan tu thoa man dk
    // var isFree = a.some(function(aa, aaa) {
    //     return aa.h === '1'
    // });
    // console.log(isFree);
    // find: tim kiem
    // var search = a.find(function(aa, aaa) {
    //     return aa.h === '2'
    // });
    // console.log(search);
    // filter: tim va tra tat ca pt thoa man
    // var filters = a.filter(function(aa) {
    //     return aa.g = '2'
    // });
    // console.log(filters.);



// function getRequestBodyFromValues(formValues) {
//     var data = {};
//     formValues.forEach(function(key, values) {
//         return data[key.field] = key.value;

//     })
//     return data;
// }



// function findEqualValues(array1, array2) {
//     var data = [];

//     for (var i = 0; i < array1.length; i++) {
//         for (var j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) data.push(array1[i]);
//         }
//     }
//     return data;
// }
// console.log(findEqualValues([1, 2, 6, 8], [2, 9, 6]));



//    map:them value  them key
// var newCourses = a.map(function(value) {
//     return {
//         g: value.g,
//         h: ` ngu:${ value.h }`
//     };

// });
// var newCourses = a.map(function(value) {
//     return value.g;



// });
// console.log(newCourses);

// redece

// var newCourses = a.reduce(function(accumulator,currentValue,currentIndex,originArray) {

// },0);
// // 0: khoi tao gt ban dau cho bien luu tru
// console.log(newCourses);
// Làm bài tập tại đây

// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this)

//     }
//     return result;
// }
// var numbers = [1, 2, 3, 4, 5];
// var result = numbers.reduce((total, number) => { return total + number }, 0);
// console.log(result);

// includes method:
// tim kiem tra ve bloobean
// var title = 'responsive web design';
// console.log(title.includes('web', 0))
// var courses = ['java', 'php', 'ngu'];
// console.log(courses.includes('php', 0))
// 3+(-1)
// neu la so am thi tim tu vi tri (do dai mang +(vt am))


// math object
// console.log(Math.pi)
// re ve so pi
// console.log(Math.round())  lam tron so
// console.log(Math.abs()) tri tuyet doi  
// console.log(Math.ceil()) lam tron tren
// console.log(Math.floor) lam tron duoi 
// console.log(Math.random()) tr ve so nho bat ki nho hon 1  
// console.log(Math.min(5,8,0,8,3)) lay ra mho mhat  
// console.log(Math.min(5,8,0,8,3)) lay ra lon mhat  


// forEach:ko chay qua phan tu empty
// Array.prototype.forEach2 = function(callback) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) console.log(index);

//     }
// }
// var courses = ['javascript', 'php', 'ruby']
// courses.forEach2(function(courses, index, arrar) {
//     console.log(courses, index, arrar)
// })

// filter: ko lap qua empty
// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//         }
//         if (result) { output.push(this[index]) }
//     }
//     return output;
// }
// var courses = ['javascript', 'php', 'ruby']
// var result = courses.filter2(function(courses, index, arrar) {
//     return courses === 'php'
// })
// console.log(result)

// some:tra ve 1 phan tu dung

// var courses = [{
//         name: 'javascript',
//         coin: 1,
//         inFinish: true
//     },
//     {
//         name: 'php',
//         coin: 1,
//         inFinish: false
//     },
//     {
//         name: 'ruby',
//         coin: 1,
//         inFinish: true
//     }
// ]
// Array.prototype.some2 = function(callback) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {

//             if (callback(this[i], i, this)) return true;
//         }
//     }
//     return false;
// }
// var result = courses.some2(function(courses, index, arrar) {
//     return courses.inFinish === true
// })
// console.log(result)

// every:tat ca dung hoac sai

// var courses = [{
//         name: 'javascript',
//         coin: 1,
//         inFinish: true
//     },
//     {
//         name: 'php',
//         coin: 1,
//         inFinish: false
//     },
//     {
//         name: 'ruby',
//         coin: 1,
//         inFinish: true
//     }
// ]
// Array.prototype.every2 = function(callback) {
//     var output = true;
//     for (var i in this) {
//         if (this.hasOwnProperty(i)) {
//             var result = callback(this[i], i, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }

//         }
//     }
//     return output;
// }
// var result = courses.every2(function(courses, index, arrar) {
//     return courses.inFinish
// })
// console.log(result)