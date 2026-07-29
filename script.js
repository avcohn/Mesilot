let registrations=[];

function registerMeal(){

let family=document.getElementById("family").value;

let date=document.getElementById("date").value;

let cook=document.getElementById("cook").value.trim();

if(family=="" || date=="" || cook==""){

alert("יש למלא את כל השדות");

return;

}

let exists=registrations.find(r=>

r.family==family &&

r.date==date

);

if(exists){

alert("התאריך כבר תפוס עבור המשפחה שנבחרה");

return;

}

registrations.push({

family,

date,

cook

});

updateTable();

document.getElementById("family").value="";

document.getElementById("date").value="";

document.getElementById("cook").value="";

}

function updateTable(){

let tbody=document.querySelector("#table tbody");

tbody.innerHTML="";

registrations.sort((a,b)=>{

return a.family.localeCompare(b.family);

});

registrations.forEach(r=>{

tbody.innerHTML+=`

<tr>

<td>${r.family}</td>

<td>${r.date}</td>

<td>${r.cook}</td>

</tr>

`;

});

}
