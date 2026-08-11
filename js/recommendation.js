document.addEventListener("DOMContentLoaded", function () {

const data =
JSON.parse(
localStorage.getItem("vadwellResult")
);

if (!data) {
    return;
}

let title = "";
let text = "";

const categories = {
    "Энергия": data.energy,
    "Восстановление": data.recovery,
    "Активность": data.activity,
    "Привычки": data.habits,
    "Забота о себе": data.selfCare
};

const lowestCategory =
Object.keys(categories)
.reduce(function(a, b) {

    return categories[a] <
    categories[b] ? a : b;

});

switch (lowestCategory) {

    case "Энергия":

        title =
        "Поддержите уровень энергии";

        text =
        "По вашим ответам видно, что в течение дня ресурса может не всегда хватать. Обратите внимание на режим, отдых и регулярное восстановление. Персональная рекомендация поможет выбрать наиболее подходящий первый шаг.";

        break;


    case "Восстановление":

        title =
        "Уделите больше внимания восстановлению";

        text =
        "После нагрузки организму может требоваться больше времени для отдыха. Хорошим первым шагом может стать регулярное расслабление и время для восстановления, в том числе процедура «Лёгкие ноги».";

        break;


    case "Активность":

        title =
        "Добавьте больше лёгкости в движение";

        text =
        "По вашим ответам движению и ощущению лёгкости в теле стоит уделить больше внимания. Небольшие регулярные изменения могут помочь улучшить общее самочувствие.";

        break;


    case "Привычки":

        title =
        "Начните с небольших ежедневных изменений";

        text =
        "Ваш результат показывает, что привычки могут стать одной из точек роста. Лучше начинать с простых действий, которые легко выполнять регулярно.";

        break;


    case "Забота о себе":

        title =
        "Найдите больше времени для себя";

        text =
        "Регулярная забота о себе помогает поддерживать ресурс и восстановление. Даже небольшие действия могут постепенно стать устойчивой частью вашего дня.";

        break;


    default:

        title =
        "Продолжайте заботиться о себе";

        text =
        "Ваш профиль VadWell поможет определить простые шаги для поддержания хорошего самочувствия.";

}

const titleElement =
document.getElementById(
"legsRecommendationTitle"
);

const textElement =
document.getElementById(
"legsRecommendationText"
);

if (titleElement) {
    titleElement.innerHTML = title;
}

if (textElement) {
    textElement.innerHTML = text;
}

});
