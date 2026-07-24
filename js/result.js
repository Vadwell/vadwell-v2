// VadWell Result Engine


document.addEventListener(
"DOMContentLoaded",
function(){


const data =
JSON.parse(
localStorage.getItem("vadwellResult")
);



if(!data){

window.location.href="index.html";

return;

}


// Общий результат

document.getElementById(
"wellnessScore"
).innerHTML =
data.wellnessScore;



// Категории


document.getElementById(
"energyScore"
).innerHTML =
data.energy + "%";


document.getElementById(
"recoveryScore"
).innerHTML =
data.recovery + "%";


document.getElementById(
"activityScore"
).innerHTML =
data.activity + "%";


document.getElementById(
"habitsScore"
).innerHTML =
data.habits + "%";


document.getElementById(
"selfCareScore"
).innerHTML =
data.selfCare + "%";



// Определяем слабую зону


let categories = {


"Энергия":
data.energy,


"Восстановление":
data.recovery,


"Активность":
data.activity,


"Привычки":
data.habits,


"Забота о себе":
data.selfCare


};



let lowestCategory =
Object.keys(categories)
.reduce(function(a,b){

return categories[a] <
categories[b] ? a : b;

});




// Вывод зоны


document.getElementById(
"mainZone"
).innerHTML =
lowestCategory;



// Рекомендации


let recommendations = {


"Энергия":
"Обратите внимание на ежедневный режим, восстановление сил и поддержку уровня энергии.",


"Восстановление":
"Вашему организму может быть полезно больше внимания к отдыху, расслаблению и восстановлению после нагрузки.",


"Активность":
"Добавление регулярного движения может помочь улучшить ощущение легкости и общего состояния.",


"Привычки":
"Небольшие изменения ежедневных привычек могут стать хорошей основой для улучшения самочувствия.",


"Забота о себе":
"Важно находить время для себя и создавать устойчивые полезные привычки."


};



document.getElementById(
"recommendationText"
).innerHTML =
recommendations[lowestCategory];


});
