
const quizData = [
    {
        question: "What is An Ai Agent?",

        options: [
            "autonomous decision maker",
            "Generates pictures only",
            "Deeplearning model",
            "Generative AI",
        ],

        answer: "autonomous decision maker",
    },

    {
        question: "What is Spec-driven-development",

        options: [
            "Vibe coding",
            "specifications become executable",
            "Generative AI",
            "Colorful Style Sheets",
        ],
        answer: "specifications become executable",
    },

    {
        question: "Which language is commonly used in AI?",

        options: ["Python", "C++", "JavaScript", "Java"],

        answer: "Python",
    },

    {
        question: "which framework is used to make deep agents",

        options: ["Scikit-lear", "Langsmith", "Langgraph", "Langchain"],

        answer: "Langgraph",
    },

    
        





];

let currentQuesIndex = 0;

let score = 0;

const mainQuizContainer = document.querySelector(".main");

const startScreen = document.querySelector(".startScreen");

const resultScreen = document.querySelector(".resultScreen");

const resultDisplay = document.querySelector(".score");

const resultScoreNum = document.querySelector(".score-num");

const startQuiz = () => {
    startScreen.classList.add("hidden");
    mainQuizContainer.classList.remove("hidden");
    showData();
};

const restartQuiz = () => {
    currentQuesIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    mainQuizContainer.classList.remove("hidden");
    showData();
};

const showResult = () => {
    mainQuizContainer.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultDisplay.innerHTML = `You Scored ${score} out of ${quizData.length}`;
    resultScoreNum.innerText = score;
};

const delayData = () => {
    setTimeout(() => {
        showData();
    }, 1000);
};

const showData = () => {
    if (currentQuesIndex < quizData.length) {
        let currentQues = quizData[currentQuesIndex];
        let progress = ((currentQuesIndex) / quizData.length) * 100;

        mainQuizContainer.innerHTML = `
                <div class="quiz-app-container">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3>Question ${currentQuesIndex + 1} of ${quizData.length}</h3>
                        <span style="font-size: 11px; color: var(--text-muted)">${Math.round(progress)}%</span>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${progress}%"></div>
                    </div>
                    <h1 id="question">${currentQues.question}</h1>
                    <div class="buttons">
                        <button onclick="checkAns(this)" class="btn">${currentQues.options[0]}</button>
                        <button onclick="checkAns(this)" class="btn">${currentQues.options[1]}</button>
                        <button onclick="checkAns(this)" class="btn">${currentQues.options[2]}</button>
                        <button onclick="checkAns(this)" class="btn">${currentQues.options[3]}</button>
                    </div>
                </div>`;

    } else {
        showResult();
    }
};

const checkAns = (btn) => {
    const userAns = btn.innerText;
    const correctAns = quizData[currentQuesIndex].answer;

    const allBtns = document.querySelectorAll(".buttons .btn");
    allBtns.forEach(b => b.disabled = true);

    if (userAns === correctAns) {
        btn.classList.add("correct-ans");
        score++;
    } else {
        btn.classList.add("wrong-ans");
        allBtns.forEach(b => {
            if (b.innerText === correctAns) b.classList.add("correct-ans");
        });
    }

    currentQuesIndex++;
    delayData();
};