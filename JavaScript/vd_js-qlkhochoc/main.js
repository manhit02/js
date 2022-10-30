// // cai json-sever
// // nmp init->npm i json-server
// var coursesApi = 'http://localhost:3000/courses'

// function start() {
//     getCourses(renderCourses);
//     handleCreateForm();

// }
// start();

// function getCourses(callback) {
//     fetch(coursesApi)
//         .then(function(response) {
//             return response.json()

//         })
//         .then(callback);
// }

// function createCourses(data) {
//     var opitions = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { 'Content-Type': 'application/json' }
//     }
//     fetch(coursesApi, opitions)
//         .then(function(response) {
//             response.json();
//         })
//         .then(callback)
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector("#list-courses");
//     var htmls = courses.map(function(courses) {
//         return `<li>
//         <h4>${courses.name}</h4>
//         <p>${courses.description}</p>
//         </li>`

//     });
//     listCoursesBlock.innerHTML = htmls.join("")
// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create');
//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"').value;
//         var description = document.querySelector('input[name="description"').value;
//         var formData = {
//             name: name,
//             description: description
//         }
//         createCourses(formData)
//     }
// }