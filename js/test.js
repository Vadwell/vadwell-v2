// VadWell Test Engine

let currentQuestion = 0;

let answers = [];

let categoryScores = {

    energy: 0,
    recovery: 0,
    activity: 0,
    habits: 0,
    selfCare: 0

};


// Максимальные значения категорий

let categoryMax = {

    energy: 30,
    recovery: 30,
    activity: 20,
    habits: 20,
    selfCare: 20

};


// Запуск теста

function startTest(){

    showQuestion();

}


// Показ вопроса

function showQuestion(){

    const question = questions[currentQuestion];


    document.getElementById("questionNumber").innerHTML =
    `${currentQuestion + 1} / ${questions.length}`;


    document.getElementById("category").innerHTML =
    question.title;


    document.getElementById("questionText").innerHTML =
    question.question;



    let answersHTML = "";


    question.answers.forEach((answer,index)=>{


        answersHTML += `

        <button 
        class="answer-button"
        onclick="selectAnswer(${index})">

        ${answer.text}

        </button>

        `;


    });



    document.getElementById("answers").innerHTML =
    answersHTML;


    updateProgress();

}


// Выбор ответа

function selectAnswer(answerIndex){


    const question = questions[currentQuestion];


    const selectedAnswer =
    question.answers[answerIndex];


    answers.push({

        questionId: question.id,

        category: question.category,

        score: selectedAnswer.score

    });



    categoryScores[question.category] +=
    selectedAnswer.score;



    currentQuestion++;



    if(currentQuestion < questions.length){

        showQuestion();

    }

    else{

        finishTest();

    }


}


// Прогресс

function updateProgress(){


    let progress =
    ((currentQuestion) / questions.length) * 100;


    const bar =
    document.getElementById("progressBar");


    if(bar){

        bar.style.width =
        progress + "%";

    }


}


// Завершение теста

function finishTest(){


    const energyPercent =
Math.round(
    (categoryScores.energy / categoryMax.energy) * 100
);

const recoveryPercent =
Math.round(
    (categoryScores.recovery / categoryMax.recovery) * 100
);

const activityPercent =
Math.round(
    (categoryScores.activity / categoryMax.activity) * 100
);

const habitsPercent =
Math.round(
    (categoryScores.habits / categoryMax.habits) * 100
);

const selfCarePercent =
Math.round(
    (categoryScores.selfCare / categoryMax.selfCare) * 100
);

const wellnessScore =
Math.round(
    (
        energyPercent +
        recoveryPercent +
        activityPercent +
        habitsPercent +
        selfCarePercent
    ) / 5
);



    



    let result = {


        wellnessScore: wellnessScore,


        energy:
        Math.round(
            (categoryScores.energy /
            categoryMax.energy) * 100
        ),


        recovery:
        Math.round(
            (categoryScores.recovery /
            categoryMax.recovery) * 100
        ),


        activity:
        Math.round(
            (categoryScores.activity /
            categoryMax.activity) * 100
        ),


        habits:
        Math.round(
            (categoryScores.habits /
            categoryMax.habits) * 100
        ),


        selfCare:
        Math.round(
            (categoryScores.selfCare /
            categoryMax.selfCare) * 100
        )


    };



    localStorage.setItem(

        "vadwellResult",

        JSON.stringify(result)

    );

sendFunnelEvent(
    "FINISH",
    result.wellnessScore
);

    window.location.href =
    "result.html";


}


// запуск

startTest();
