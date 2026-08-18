// VadWell Consultant Loader

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

  "gulnara-samara": {

   id: "gulnara-samara",
   name: "Гульнара",
   city: "Самара",
   telegram: "@gylnara70",
   photo: ""

  }
  
};


// Получаем ID консультанта из ссылки

const consultantParams =
new URLSearchParams(
  window.location.search
);

let consultantId =
consultantParams.get("id");


// Если ID отсутствует в текущей ссылке,
// берём консультанта, сохранённого ранее

if (!consultantId) {

  consultantId =
  localStorage.getItem(
    "vadwellConsultantId"
  );

}


// Если консультант ещё не определён,
// используем Вадима по умолчанию

if (!consultantId) {

  consultantId =
  "vadim-samara";

}


// Проверяем существование консультанта

let consultant =
consultants[consultantId];


// Если в ссылке указан неизвестный ID

if (!consultant) {

  consultantId =
  "vadim-samara";

  consultant =
  consultants[consultantId];

}


// Сохраняем консультанта

localStorage.setItem(
  "consultant",
  JSON.stringify(consultant)
);

localStorage.setItem(
  "vadwellConsultantId",
  consultantId
);
