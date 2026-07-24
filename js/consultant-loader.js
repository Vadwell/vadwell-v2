// VadWell Consultant Loader


const consultants = {


"vadim-samara": {

id:"vadim-samara",

name:"Вадим",

city:"Самара",

telegram:"@vadwell",

photo:"images/vadim.jpg"

}


};



// Получаем ID из ссылки

const params =
new URLSearchParams(
window.location.search
);


let consultantId =
params.get("id");



// Если ID нет,
// используем значение по умолчанию

if(!consultantId){

consultantId =
"vadim-samara";

}



// Находим консультанта

const consultant =
consultants[consultantId];



// Сохраняем данные

if(consultant){

localStorage.setItem(

"consultant",

JSON.stringify(consultant)

);

}
