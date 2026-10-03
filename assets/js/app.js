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
    <li>
   ` 
}
`</ul>`
let skills1=document.getElementById("skills1")
skills1.innerHTML=result1
console.log(com1)