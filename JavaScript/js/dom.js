// // lay id:so it
// var layid = document.getElementById('heading');
// // lay class:lay all class co ten heading
// var layclass = document.getElementsByClassName('heading');
// // lay tag:lay ten the
// var laytagName = document.getElementsByTagName('h2');
// // css selecter:dung giong css
// var cssSelecter = document.querySelector('.ngu .heading:first-child')
//     // css selecter so nhieu
// var cssSelecters = document.querySelectorAll('.heading');


// // lay the h2 trong ngu
// var h2Ngu = document.querySelector('.ngu h2')
//     // c2:
// var Ngu = document.querySelector('.ngu')
// Ngu.querySelectorAll('h2');


// var boxHTMLCollection = document.getElementsByClassName('box');
// var box1Element = document.querySelector('.container .box:first-child');
// var box2Element = document.querySelector('.container .box:last-child');
// var allItemElements = document.getElementsByTagName('li');
// var box1ItemElements = box1Element.querySelector('li');
// var box1ItemElements = box2Element.querySelector('li');


// var h1Element = document.getElementsByTagName('h1');
// var h2Element = document.getElementsByTagName('h2');
// var h3Element = document.getElementsByTagName('h3');



// addd attributes

// var heading = document.querySelector('.heading');
// //  heading. ten attributes can them
// heading.setAttribute('class', 'headingg')
// heading.setAttribute('href', 'headingg')
// // lay ra attributes
// heading.getAttribute('class')


// text:innerText

// var heading = document.querySelector('.heading');
// // heading.innerText        lay ra noi dung cuar them. 
// // heading.textContent        lay ra noi dung cuar them bo qua css
// //  heading.innerText='ngu'        them nd vao the


// // innerHTML
// heading.innerHTML = '<h1 title="heading>Ngu hoc</h1>'
// // outerHTML
// heading.outerHTML = '<h1 title="heading>Ngu hoc</h1>'   ghi de tu the do

// DOm style
// var heading = document.querySelector('.heading');
// heading.style.width = '100px'
// heading.style.height = '100px'
// heading.style.background = 'red'

// Object.assign(heading.style, {
//     width: '200px',
//     width: '200px',
//     background: 'blue'
// })\


// class list

// var heading = document.querySelectorAll('.heading');
// heading.classList.add('red');
// heading.classList.contains('red'); kiem tra co class ko
// heading.classList.remove('red'); xoa class
// heading.classList.toggle('red'); neu  co thi xoa, ko co thi them
// heading[0].textContent = 'ngu';



// dom events

// var h5Element = document.querySelector('h5')
// h5Element.onclick = function() {
//     console.log(Math.random())
// }
// var h5Elements = document.querySelectorAll('h5');
// for (var i = 0; i < h5Elements.length; i++) {
//     h5Elements[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }
// lay dltu input
// var inputElement = document.querySelector('input[type="text"]')
// inputElement.oninput = function(e) {
//     console.log(e.target.value)
// }
// var inputElement = document.querySelector('input[type="checkbox"]')
// inputElement.onchange = function(e) {
//     console.log(e.target.checked)
// }

// var selectElement = document.querySelector('select')
// selectElement.onchange = function(e) {
//     console.log(e.target.value)
// }

// var inputElement = document.querySelector('input[type="text"]')
// inputElement.onkeydown = function(e) {
//     console.log(e)
// }
// document.onkeydown = function(e) {
//     switch (e.whith) {
//         case 27:
//             console.log('EXIT')
//             break;
//         case 13:
//             console.log('senchat')
//             break;
//     }
// }


// prevendefaut

// var aElement = document.links;
// for (var i = 0; i < aElement.length; i++) {
//     aElement[i].onclick = function(e) {
//         if (!e.target.href.startsWith('http://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }
// stopProgatation
// document.querySelector('div').onclick = function(e) {
//     console.log('DIV')
// }
// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me')
// }

// var btn = document.getElementById('btn');
// // btn.onclick = function() {

// //     console.log('viec 1')
// //     console.log('viec 2')
// //     alert('viec 3')
// // }
// btn.addEventListener('click', function(e) {
//     console.log(Math.random());
// })


// json: là 1 định dạng dữ liệu(javaScript Object Notation)
// json: number, null, Boolean, Araay, object
// mã hóa(encode)/ mã hóa(decode)
// JSON
// stringify/ parrse
// var json='["javaScript","php"]';
// var json='{"name":"manh","age":18}'
// var a = '2';
// console.log(JSON.parse(a))
// console.log(JSON.stringify(true))

// promise (sync(đồng bộ),async(bất đồng bộ))
// setTimeout(() => {
//     console.log(1)
// }, 1000);
// console.log(2)

//  pain:callBack hell, 

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//             setTimeout(() => {
//                 console.log(4)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // thanh cong: resolve()
//         // resolve();
//         // reject();
//         // that bai :reject()
//     }
// );
// promise
//     .then(function() {
//         console.log('Successully');
//         // khi thanhcong
//     })
//     .catch(function() {
//         console.log('Failure');
//         // khi thatbai
//     })
//     .finally(function() {
//         console.log('Done');
//         // thanhcong hoac that bai duoc thuc thi
//     })
//     promise: sinh ra để giải quết vấn đề về bất đồng bộ.Promised dùng từ khóa Promise() để tạo thành. promise sinh ra 2 tham số 
//     resolve(thành công) và reject(thất bại).promise khi thực thi cần khải có ít nhất .then và .catch

// giải quết call back hell bằng promise
// var promise = new Promise(

//     function(resolve, reject) {
//       resolve()
//     }
// );
// promise
//     .then(function() {
//         return 1;

//     })
//     .then(function() {
//         console.log('2')
//         return 2
//     })
//     .catch(function() {
//         console.log('Failure');

//     })
//     .finally(function() {
//         console.log('Done');

//     })
// function sleep(ms) {
//     return new Promise(
//         function(resolve) {
//             setTimeout(resolve, ms)
//         }
//     );
// }
// sleep(1000)
//     .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(3)
//         return sleep(1000)
//     })


// 1. Promise.resolve,reject
// var promise=new Promise.resolve('success')
// var promise=new Promise.reject('success')
// promise
// .then(function(result){
//     console.log('result:',result)
// })
// .catch(function(err){
//     console.log('result',err)
// })
// 2. promise.all
// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve(1)
//     }, 1000);
// })
// var promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2, 3])
//     }, 1000);
// })
// Promise.all([promise1, promise2])
//     .then(function(result) {
//         console.log(result)
//     })

// var users = [{
//         id: 1,
//         name: 'Manh'

//     },
//     {
//         id: 2,
//         name: 'Thanh'

//     },
//     {
//         id: 3,
//         name: 'Hoang'

//     }
// ];
// var comments = [{
//         id: 1,
//         user_id: 1,
//         content: "haizz"
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: "haizzz"
//     }
// ];
// //1. lay comment
// //2. tu comment lay ra user_id
// //3.tu user_id lay ra user tuong ung

// //fake API

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments)
//         }, 1000)
//     })
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function() {
//             resolve(result);
//         }, 1000)

//     })
// }

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id
//         })
//         return getUsersByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             });
//     })

// .then(function(data) {

//     var commentBlock = document.getElementById('comment-block');
//     var html = '';
//     data.comments.forEach(function(comment) {
//         var user = data.users.find(function(user) {
//             return user.id === comment.user_id;
//         });
//         html += `<li>${user.name} : ${comment.content}</li>`;

//     });
//     commentBlock.innerHTML = html;
// });

// fetch

// var posstAPI = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch(posstAPI)
//     .then(function(response) {
//         return response.json();

//     })
//     .then(function(post) {
//         console.log(post)
//     })
//     .catch(function(err) {
//         console.log("Cos looix")
//     })

// json sever: API sever

// var costAPI = "http://localhost:3000";
// fetch(costAPI)
//     .then(function(response) {
//         return response.json()

//     })
//     .then(function(costAPI) {
//         console.log(costAPI)
//     })

// postman
// CRUD:
//     create-> POST
//     Read->GET
//     Update->PUT/PATCH
//     Delete-> DELETE


// var coursesApi = 'http://localhost:3000/cost'

// function start() {
//     getCourses(renderCourses)
//     handleCreateForm();
// }
// start();

// function getCourses(callBack) {
//     fetch(coursesApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callBack);
// }

// function createCourses(data, callBack) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(coursesApi, options)
//         .then(function(response) {
//             return response.json.type()
//         })
//         .then(callBack)
// }

// function handledeleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     }
//     fetch(coursesApi + '/' + id, options)
//         .then(function(response) {
//             return response.json()
//         })
//         // .then(callBack)
//         .then(function() {
//             var coursesItem = document.querySelector('.course-item-' + id)
//             if (coursesItem) coursesItem.remove();
//         })
// }


// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses')
//     var htmls = courses.map(function(course) {
//         return `<li class="course-item-${course.id}">
//         <h4>${course.name}</h4>
//         <p>${course.Description}</p>
//         <button onclick="handledeleteCourse(${course.id})">Xoa</button>
//        </li>`

//     })
//     listCoursesBlock.innerHTML = htmls.join('')

// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create')
//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value
//         var Description = document.querySelector('input[name="Description"]').value
//         var formData = {
//             name: name,
//             Description: Description
//         }
//         createCourses(formData, function() {
//             getCourses(renderCourses)
//         })
//     }

// }















// ECMAscript6
// let & const
// var/let,const: scope(pv truy cap),hosting
// const/var,let:assignment
// code block:if else,loop,{}
// scope
//  var:kb toan cuc
//  let:cuc Bo
//  const:cuc bo
// hosting(dua len dau)
//  var:ho tro
// vd:ok
// a=1;
// var a;
//  let:ko ho reo
//  const:ko ho tro
// vd:ko duoc
// a=1;
// let a;

// assignment
// var a=1;
// a=100;
// console.log(a);
// var/let: ko loi
// const:loi


// template literals

// const courseName = 'javaScript';
// const description = `course Name:${courseName}`
// console.log(description);
// const lines = `lines1
// Line2`

// arrow function
// const sum = (a, b) => a + b;
// const summ = (a, b) => ({ a: a, b: b });

// classes
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
// }
// const PhpCourse = new Course('PHP', 1000);
// const JsCourse = new Course('javaScript', 1200);

// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;

//     }
//     getName(){
//         return this.name;
//     }
//     getPrice(){
//         return this.price;
//     }

// }

// const PhpCourse = new Course('PHP', 1000);
// const JsCourse = new Course('javaScript', 1200);

// default pramenter value
// dat gt mac dinh khi ko co du lieu
// function logger(log='Gia tri mac dinh',isAlert=false){
//     if(isAlert) alert('')
//     console.log(log);
// }
// logger();

// enhanced object literals
// 1.định nghĩa key:value cho object
// 2. định nghĩa method cho object
// 3.định nghiawx key cho object dưới dạng biến

// var name='javaScript';
// var price=1000;

// var course={
//     name,
//     price,
//     getname(){
//         return name;
//     }

// };
// console.log(course)
// var fieldName='name';
// var fieldPrice='price';
// const course={
//     [fieldName]:'javaScript',
//     [fieldPrice]:1000
// };

// destructuring: phan ra

// var arr = ['javaScript', 'PHP', 'Ruby'];
// var [a, b, c] = arr;
// console.log(a, b, c)

// rest lay ra phan con lai
// var arr = ['javaScript', 'PHP', 'Ruby'];

// var [a, ...rest] = arr;
// console.log(a)
// console.log(rest)


// var course = {
//     name: 'javaScript',
//     price: 1000,
//     children: {
//         name: 'ReactJs'

//     }
// };
// var { name, price } = course
// console.log(name, price)

// var {name,...deleteNameTrick}=course;
//  console.log(deleteNameTrick)

// var { name, children: { name: childrenName } } = course;
// console.log(childrenName)

// var { name, description = 'default Value' } = course
// console.log(description)

// function logger({ name, price, ...rest }) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }
// logger({
//     name: 'javaScript',
//     price: 1000,
//     description: 'description content'
// })

// spread
// var arr = ['javaScript', 'PHP', 'Ruby'];
// var arr2 = ['ReactJs', 'Dart'];
// var arr3 = [...arr2, ...arr];
// console.log(arr3)

// var ob1 = { name: 'javaScript' }
// var ob2 = { price: 1000 }
// var ob3 = {...ob1,
//     ...ob2
// }
// console.log(ob3)


// tagged template literals

// function highLight([first, ...strings], ...values) {
//     return values.reduce(
//             (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]
//         )
//         .join('')
// }
// var brand = 'f8';
// var course = 'javaScript';
// const html = highLight `Hoc lap trinh ${course} tai ${brand}!`;
// console.log(html);

// Modules:import/export

// import logger from './logger.js';
// logger('test message', 'warn') 

// optional chaining (?.)