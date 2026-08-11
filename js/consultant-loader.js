// VadWell Consultant Loader


const consultants = {


const consultants = {

  "vadim-samara": {

    id: "vadim-samara",

    name: "Вадим",

    city: "Самара",

    telegram: "@vadwell",

    photo: "images/vadim.jpg"

  },


  "elena-samara": {

    id: "elena-samara",

    name: "Елена",

    city: "Самара",

    telegram: "@Lenwell28",

    photo: ""

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

localStorage.setItem(
  "vadwellConsultantId",
  consultantId
);
  
}
