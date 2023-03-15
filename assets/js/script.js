const questions = [
    {
        question: "Who is Manchester Uniteds longest serving manager?",
        answers: ["Alex Ferguson", "Matt Busby", "Ron Atkinson", "Jose Mourinho"],

        answerIndex: 0,
    },
    {
        question: "Which of these Manchester United players has not won the Ballon d'or?",
        answers: ["Bobby Charlton", "Eric Cantona", "Cristiano Ronaldo", "George Best"],

        answerIndex: 1,
    },
    {
        question: "In what year was Manchester United founded?",
        answers: ["1904", "1878", "1894", "1910"],

        answerIndex: 1,
    },
    {
        question: "What were Manchester United originally called?",
        answers: ["F.C. United of Manchester", "Manchester North End F.C.", "Northwhich Manchester Villa F.C.", "Newton Heath LYR"],

        answerIndex: 3,
    },
    {
        question: "Who is Manchester United's record signing?",
        answers: ["Paul Pogba", "Cristiano Ronaldo", "Harry Maguire", "Angel Di Maria"],

        answerIndex: 1,
    },
    {
        question: "Who is Manchester United's record goal scorer?",
        answers: ["Mark Hughes", "Dennis Law", "Ruud Van Nistleroy", "Wayne Rooney"],

        answerIndex: 4,
    },
    {
        question: "How many times have Manchester United won the Champions League?",
        answers: ["Never", "Once", "Twice", "Three times"],

        answerIndex: 4,
    },
    {
        question: "In what year did Manchester united win the treble?",
        answers: ["1967/68", "1998/99", "2007/08", "2010/11"],

        answerIndex: 2,
    },
    {
        question: "What is the name of Manchester United's home ground?",
        answers: ["Maine Road", "St Jame's Park", "Old Trafford", "Anfield"],

        answerIndex: 3,
    },
    {
        question: "Who are Manchester United's oldest rivals?",
        answers: ["Liverpool", "Manchester City", "Leeds United", "Arsenal"],

        answerIndex: 1,
    },

];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById('question');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const answerButtonOne = document.getElementById('answer-btn-1');
const answerButtonTwo = document.getElementById('answer-btn-2');
const answerButtonThree = document.getElementById('answer-btn-3');
const answerButtonFour = document.getElementById('answer-btn-4');
const correctScoreElement = document.getElementById('score-correct');
const incorrectScoreElement = document.getElementById('score-incorrect');

function StartGame();

function ShowNextQuestion();

function NextQuestion();

function CheckAnswer();

function IncrementCorrectScore();

function IncrementIncorrectScore();

function EndGame();