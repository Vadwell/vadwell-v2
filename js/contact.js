// VadWell Contact Handler

document
.getElementById("contactForm")
.addEventListener(
"submit",
async function(event){

event.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const telegram =
document.getElementById("telegram").value;

const city =
document.getElementById("city").value;

const result =
JSON.parse(
localStorage.getItem("vadwellResult")
);

const consultant =
JSON.parse(
localStorage.getItem("consultant")
);

const lead = {

id: Date.now(),

date:
new Date().toLocaleString("ru-RU"),

consultant:
consultant || "default",

name: name,

phone: phone,

telegram: telegram,

city: city,

score:
result ? result.wellnessScore : 0,

energy:
result ? result.energy : 0,

recovery:
result ? result.recovery : 0,

activity:
result ? result.activity : 0,

habits:
result ? result.habits : 0,

selfCare:
result ? result.selfCare : 0,

status:
"Новая заявка"

};

localStorage.setItem(
"vadwellLead",
JSON.stringify(lead)
);

try {

const response = await fetch(
"https://script.google.com/macros/s/AKfycbwopKCJF7Mf1jcpcMbIqNKMosEIk0uPyNAPyqDfsYH310i0bspaZbvgokDgmXpF3xVZIg/exec",
{
method: "POST",
body: JSON.stringify(lead)
}
);

const data =
await response.json();

if(data.ok){

alert(
"Спасибо! Ваша заявка отправлена. Консультант VadWell свяжется с вами."
);

window.location.href =
"index.html";

}

else{

throw new Error(
data.error || "Ошибка отправки"
);

}

}

catch(error){

console.error(
"Ошибка отправки заявки:",
error
);

alert(
"Не удалось отправить заявку. Попробуйте ещё раз."
);

}

}
);
