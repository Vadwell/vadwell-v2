// VadWell Contact Handler


document
.getElementById("contactForm")
.addEventListener(
"submit",
function(event){


event.preventDefault();


// Получаем данные пользователя

const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const telegram =
document.getElementById("telegram").value;


const city =
document.getElementById("city").value;



// Получаем результат теста

const result =
JSON.parse(
localStorage.getItem("vadwellResult")
);


// Получаем консультанта

const consultant =
JSON.parse(
localStorage.getItem("consultant")
);



// Создаем заявку

const lead = {


id:
Date.now(),


date:
new Date().toLocaleString("ru-RU"),


consultant:
consultant || "default",


name:name,


phone:phone,


telegram:telegram,


city:city,


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



// Сохраняем локально

localStorage.setItem(

"vadwellLead",

JSON.stringify(lead)

);



// Имитация отправки

console.log(
"Новая заявка VadWell:",
lead
);



// Сообщение пользователю

alert(
"Спасибо! Ваш результат сохранен. Консультант VadWell свяжется с вами."
);



// Переход

window.location.href =
"index.html";


});
