const FUNNEL_URL =
"https://script.google.com/macros/s/AKfycbwopKCJF7Mf1jcpcMbIqNKMosEIk0uPyNAPyqDfsYH310i0bspaZbvgokDgmXpF3xVZIg/exec";

function getVisitorId() {

  let visitorId =
    localStorage.getItem("vadwellVisitorId");

  if (!visitorId) {

    visitorId =
      "vw_" +
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .substring(2, 10);

    localStorage.setItem(
      "vadwellVisitorId",
      visitorId
    );
  }

  return visitorId;
}


function getVadwellSource() {

  return (
    localStorage.getItem("vadwellSource")
    || "direct"
  );
}


function sendFunnelEvent(
  eventName,
  score = "",
  mainZone = ""
) {

  const payload = {

    type: "funnel",

    visitorId:
      getVisitorId(),

    event:
      eventName,

    source:
      getVadwellSource(),

      consultantId:
    localStorage.getItem("vadwellConsultantId")
    || "vadim-samara",

    score:
      score,

    mainZone:
      mainZone

  };


  fetch(
    FUNNEL_URL,
    {
      method: "POST",
      body: JSON.stringify(payload)
    }
  )
  .catch(function(error) {

    console.log(
      "VadWell analytics:",
      error
    );

  });

}
