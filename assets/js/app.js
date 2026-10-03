let students = ["Rahul", "Priya", "Aman", "Sneha", "Riya"];

let result=`<ul>`
let skills=[]
for(let i=0;i<students.length;i++){
     skills.push(students[i]);

    result +=`
    <li class="list-group-item d-flex justify-content-between mb-2">
    <strong>${students[i]}</strong>
    <div>
    <button type="button" class="btn btn-primary btn-sm">Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Remove</button>
     </div>
     </li>`
}
result+=`</ul>`
let students1=document.getElementById("students1")
students1.innerHTML=result
console.log(skills)



let companies = ["Google","Microsoft","Amazon","Apple","Meta"];

let result1=`<ul>`
let com1=[]
for(let i=0;i<companies.length;i++){
    com1.push(companies[i]);
    
   result1 +=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${companies[i]}</strong>
   <div>
   <button type="button" class="btn btn-primary btn-sm">Edit</button>
 <button type="button" class="btn btn-danger btn-sm">Remove</button>
    </div>
    </li>
   ` 
}
result1+=`</ul>`
let skills1=document.getElementById("skills1")
skills1.innerHTML=result1
console.log(com1)

let cities = ["Pune", "Mumbai", "Delhi", "Hyderabad", "Bangalore"];

let result2= `<ul>`
let city =[]
for (let i=0;i<cities.length;i++){
   city.push(cities[i])

   result2+=`
   <li class="list-group-item d-flex justify-content-between mb-4">
   <strong>${cities[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">Edit city</button>
 <button type="button" class="btn btn-danger btn-sm">Delete city</button>
 </div>
 </li>
   `
}
result2+=`<ul>`
let cities1=document.getElementById("cities1")
cities1.innerHTML=result2
console.log(city)

let products = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];

let result3=`<ul>`
let product=[]
for (let i=0;i<products.length;i++){
   product.push(products[i])

   result3+=`
   <li class="list-group-item d-flex justify-content-between mb-4">
   <strong>${products[i]}</strong>
   <div>
   <button type="button" class="btn btn-info btn-sm">Edit</button>
   <button type="button" class="btn btn-warning btn-sm">Buy</button>
   </div>
   </li>
   `
}
result3+=`</ul>`
let products1=document.getElementById("info")
info.innerHTML=result3
console.log(product)

let food = ["Pizza", "Burger", "Pasta", "Sandwich", "Biryani"];

let result4=`<ul>`
let foods=[]
for(let i=0;i<food.length;i++){
   foods.push(food[i])


result4+=
`<li class=list-group-item d-flex justify-content-between mb-5">
<strong>${food[i]}</strong>
<div>
<button type="button" class="btn btn-warning btn-sm">order</button>
<button type="button" class="btn btn-danger btn-sm">remove</button>
</div>
</li>
`
}
result4+=`</ul>`
let food1=document.getElementById("info1")
info1.innerHTML=result4
console.log(foods)

let students2 = ["Rahul", "Priya", "Aman", "Sneha", "Riya"];
let result5=`<ul>`
let list=[]
for (let i=0; i<students2.length;i++){
   list.push(students[i])

   result5+=
   `<li class="list-group-item d-flex  justify-content-between mb-4">
   <strong>${students2[i]}</strong>
   <div>
   <button type="button" class="btn btn-info btn-sm">view</button>
   <button type="button" class="btn btn-warning btn-sm">Edit</button>
   <button type="button" class="btn btn-danger btn-sm">Delete</button>
   </div>
   </li>
   `
}
result5+=`</ul>`
let studentsS=document.getElementById("info2")
info2.innerHTML=result5
console.log(list)


let movies = ["Avatar", "Titanic", "Inception", "Interstellar"];
let result6=`<ul>`

for (let i=0; i<movies.length;i++){
   movies[i]

   result6+=
   `<li class="list-group-item d-flex justify-content-between mb-4">
   <strong>${movies[i]}</strong>
   <div>
   <button type="button" class="btn btn-warning btn-sm">watch</button>
   <button type="button" class="btn btn-danger btn-sm">remove</button>
   </div>
   </li>
   `
}
result6+=`</ul>`
let movies1=document.getElementById("info3")
info3.innerHTML=result6
console.log(movies)

let jobs = ["Frontend Developer", "Backend Developer", "UI Designer", "Data Analyst"];
 let result7=`<ul>`
 for (let i=0; i<jobs.length;i++){
   jobs[i]

   result7+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${jobs[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">Apply</button>
   <button type="button" class="btn btn-primary btn-sm">view detail</button>
   </div>
   </li>

   `
 }
 result7+=`</ul>`
 let jobs1=document.getElementById("info4")
 info4.innerHTML=result7
 console.log(jobs)


 let courses = ["Java", "Python", "C++", "Web Development", "Angular"];
 let result8=`<ul>`
 for(let i=0;i<courses.length;i++){
   courses[i]

   result8+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${courses[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">Apply</button>
   <button type="button" class="btn btn-primary btn-sm">view courses</button>
   </div>
   </li>
`
 }
 result8+=`</ul>`
 let courses1=document.getElementById("info5")
 info5.innerHTML=result8
 console.log(courses)

 let cart = ["T-Shirt", "Jeans", "Shoes", "Watch"];
 let result9=`<ul>`
 for(let i=0;i<cart.length;i++){
   cart[i]

   result9+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${cart[i]}</strong>
   <div>
   <button type="button" class="btn btn-warning btn-sm">Add</button>
   <button type="button" class="btn btn-danger btn-sm">remove</button>
   </div>
   </li>
`
 }
 result9+=`</ul>`
 let cart1=document.getElementById("info6")
 info6.innerHTML=result9
 console.log(cart)

let tasks = ["Study JavaScript", "Practice CSS", "Complete Assignment"];

let result10=`<ul>`
 for(let i=0;i<tasks.length;i++){
   tasks[i]

   result10+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${tasks[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">todo list</button>
   <button type="button" class="btn btn-danger btn-sm">remove</button>
   </div>
   </li>
`
 }
 result10+=`</ul>`
 let task1=document.getElementById("info7")
 info7.innerHTML=result10
 console.log(cart)

let songs = ["Song 1", "Song 2", "Song 3", "Song 4"];

let result11=`<ul>`
for(let i=0;i<songs.length;i++){
   songs[i]

   result11+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${songs[i]}</strong>
   <div>
   <button type="button" class="btn btn-primary btn-sm">play</button>
   <button type="button" class="btn btn-danger btn-sm">remove</button>
   </div>
   </li>
`
 }
 result11+=`</ul>`
 let song1=document.getElementById("info8")
 info8.innerHTML=result11
 console.log(songs)

 let notifications = [
    "New message",
    "Assignment submitted",
    "New friend request"
];
let result12=`<ul>`
for(let i=0;i<notifications.length;i++){
   notifications[i]

   result12+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${notifications[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">read</button>
   <button type="button" class="btn btn-info btn-sm">Delete</button>
   </div>
   </li>
`
 }
 result12+=`</ul>`
 let note=document.getElementById("info9")
 info9.innerHTML=result12
 console.log(notifications)


let students4 = ["Rahul", "Priya", "Aman", "Sneha"];
let result13=`<ul>`
for(let i=0;i<students.length;i++){
   students[i]

   result13+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${students4[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">persent</button>
   <button type="button" class="btn btn-danger btn-sm">Absent</button>
   </div>
   </li>
`
 }
 result13+=`</ul>`
 let att=document.getElementById("info10")
 info10.innerHTML=result13
 console.log(students4)

 let expenses = ["Food", "Travel", "Shopping", "Books"];
 let result14=`<ul>`
for(let i=0;i<expenses.length;i++){
   expenses[i]

   result14+=`
   <li class="list-group-item d-flex justify-content-between mb-3">
   <strong>${expenses[i]}</strong>
   <div>
   <button type="button" class="btn btn-success btn-sm">persent</button>
   <button type="button" class="btn btn-danger btn-sm">Absent</button>
   </div>
   </li>
`
 }
 result14+=`</ul>`
 let ex=document.getElementById("info11")
 info11.innerHTML=result14
 console.log(students4)




