// VadWell Contact Handler

document
.getElementById("contactForm")
.addEventListener(
"submit",
async function(event){

event.preventDefault();

const submitButton =
document.querySelector(
  '#contactForm button[type="submit"]'
);

submitButton.disabled = true;
submitButton.innerHTML =
"Отправляем заявку...";

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const telegramElement =
document.getElementById("telegram");

const telegram =
telegramElement ? telegramElement.value : "";

const city =
document.getElementById("city").value;

const source =
localStorage.getItem("vadwellSource") || "direct";

const goal =
document.getElementById("goal").value;

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

  goal: goal,

  source: source,

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

  const url =
  "https://script.google.com/macros/s/AKfycbwopKCJF7Mf1jcpcMbIqNKMosEIk0uPyNAPyqDfsYH310i0bspaZbvgokDgmXpF3xVZIg/exec";

  const blob =
  new Blob(
    [JSON.stringify(lead)],
    {
      type: "text/plain;charset=utf-8"
    }
  );

  const sent =
  navigator.sendBeacon(
    url,
    blob
  );

  if (!sent) {
    throw new Error(
      "Не удалось отправить заявку"
    );
  }

  sendFunnelEvent(
    "LEAD",
    result ? result.wellnessScore : ""
  );

  window.location.href =
  "thanks.html";

}

catch(error){

  console.error(
    "Ошибка отправки заявки:",
    error
  );

  submitButton.disabled = false;

  submitButton.innerHTML =
  "Получить 15 минут в подарок";

  alert(
    "Не удалось отправить заявку. Попробуйте ещё раз."
  );

}

}
);
