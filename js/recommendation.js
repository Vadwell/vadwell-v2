document.addEventListener(
"DOMContentLoaded",
function(){


const data =
JSON.parse(
localStorage.getItem("vadwellResult")
);


if(!data){
return;
}



let title = "";
let text = "";



// Проверяем нагрузку на ноги

if(data.activityScore >= 7){


title =
"Ваш профиль: Ноги под нагрузкой";


text =
"Ваши ответы показывают высокий уровень нагрузки на ноги. Процедура «Лёгкие ноги» поможет уделить внимание расслаблению и восстановлению после активного дня.";


}


// Проверяем уровень энергии

else if(data.energyScore <= 5){


title =
"Ваш профиль: Восстановление энергии";


text =
"Ваш организм может нуждаться в дополнительном восстановлении. Начните с заботы о теле и регулярных восстановительных процедур.";


}


// Если нет ярко выраженной зоны

else{


title =
"Ваш профиль: Поддержание баланса";


text =
"Процедура «Лёгкие ноги» может стать приятным элементом регулярного восстановления и заботы о себе.";


}



document.getElementById(
"legsRecommendationTitle"
).innerHTML = title;



document.getElementById(
"legsRecommendationText"
).innerHTML = text;



});
