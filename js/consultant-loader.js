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
  },

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
  new URLSearchParams(window.location.search);

const consultantFromUrl =
  consultantParams.get("id");

let consultantId;


// 1. Если консультант указан в ссылке,
// ссылка ВСЕГДА имеет приоритет

if (
  consultantFromUrl &&
  consultants[consultantFromUrl]
) {

  consultantId = consultantFromUrl;

  localStorage.setItem(
    "vadwellConsultantId",
    consultantId
  );

}


// 2. Если ID в ссылке нет,
// продолжаем путь с ранее сохранённым консультантом

else {

  const savedConsultantId =
    localStorage.getItem(
      "vadwellConsultantId"
    );

  if (
    savedConsultantId &&
    consultants[savedConsultantId]
  ) {

    consultantId =
      savedConsultantId;

  }

  else {

    consultantId =
      "vadim-samara";

  }

}


// Получаем данные активного консультанта

const consultant =
  consultants[consultantId];


// Сохраняем полный профиль

localStorage.setItem(
  "consultant",
  JSON.stringify(consultant)
);

localStorage.setItem(
  "vadwellConsultantId",
  consultantId
);
