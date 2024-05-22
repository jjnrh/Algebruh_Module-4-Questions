const quizData = [ // ja lesson 2 module5 to, di ko alam gagawin mo sa images eh
    {
        question: "1. What line intersects the circle at exactly one point?",
        a: " chord ",
        b: " radius ",
        c: " tangent ",
        d: " secant ",
        correct: "c",
    },
    {
        question: "2. Which of the following segments represent a secant?",
        a: "B̅C̅", 
        b: "D̅E̅",
        c: "A̅P̅",
        d: "D̅P̅",
        correct: "b",
    },
    {
        question: "3. Give the measure of ∠PAD ",
        a: "30°",
        b: "60°",
        c: "90°",
        d: "120°",
        correct: "c",
    },
    {
        question: "4. If A̅P̅ = 5 and A̅D̅ = 8, find the measure of D̅P̅.",
        a: "√3",
        b: "√13",
        c: "√39",
        d: " √89",
        correct: "d",
    },
    {
        question: "5.If D̅P̅ = 11 and the radius of ⨀P is 6, what is the measure of D̅G̅?",
        a: "√5",
        b: "√17",
        c: "√85",
        d: "√157",
        correct: "c",
    },
    {       
        question: "6.A tangent line intersects the circle at exactly one point while a _________ line intersects the circle at exactly two points.",
        a: "Tangent",
        b: "Secant",
        c: "Perpendicular",
        d: "Congruent",
        correct: "b",
    },
    {
        question: "7. The radius of the circle is always ________ to the point of tangency. ",
        a: "Chord",
        b: "Tangent",
        c: "Perpendicular",
        d: "Secant",
        correct: "c",
    },
    {
        question: "8.There is only one _________ line that can be drawn to a given point on the circle.",
        a: "Perpendicular",
        b: "Congruent",
        c: "Tangent",
        d: "None of the Above",
        correct: "c",
    },
    {
        question: "9. Tangent segments intersecting the circle from the same external point are_________.",
        a: "Congruent",
        b: "Tangent",
        c: "Chord",
        d: "None of the Above",
        correct: "a",
    },
    {
        question: "10. A secant line contains a _________ of the circle. ",
        a: "Line",
        b: "Secant",
        c: "Circle",
        d: "Chord",
        correct: "d",
    },
    

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const numberOfQuestion = document.getElementById("numberOfQuestion");
const numberOfAllQuestion = document.getElementById("numberOfAllQuestion");

let indexOfQuestion;
let indexOfPage = 0;

numberOfAllQuestion.innerHTML = quizData.length;

let currentQuiz = 0
let score = 0

let time = 120;
    const countDownEl = document.getElementById("countdown");   
    
    let counter = setInterval(updateCountdown, 1000);
    
    function updateCountdown(){
    
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds: seconds;
    
        minutes = minutes < 10 ? "0" + minutes: minutes;
    
        countDownEl.innerHTML = `${minutes}:${seconds}`;
    
        time--;
    
        
    
        if(minutes <= 0 && seconds == 0) {
            const timeText = document.querySelector(".timer_text");
            timeText.textContent = "Time is over";
            //alert("Quiz over");
            Swal.fire({
                icon: 'error',
                title: 'Oops...time is up!',
                text: 'But you can restart the quiz',
                showConfirmButton: false,
                footer: '<a href="start.html" style="background-color:#44b927; padding: 1rem; text-decoration: none; color: white;">Restart the Quiz</a>'
              })
            clearInterval(counter);
        }
    
        
    }

loadQuiz()

function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <div class="end_quiz">
            <h3 class="end-title">You answered ${score}/${quizData.length} questions correctly</h3>
            <button onclick="location.reload()" class="reload">Reload</button>
          </div>
        `;
      }
    }
  });
  
  

function selectAnswer(choiceId) {
    deselectAnswers();
    document.getElementById(choiceId).classList.add('selected');
  }
  
  function deselectAnswers() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.classList.remove('selected'));
  }
  
  function getSelected() {
    let selectedChoice;
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
      if (choice.classList.contains('selected')) {
        selectedChoice = choice.id;
      }
    });
    return selectedChoice;
  }

  function selectAnswer(choiceId) {
    deselectAnswers();
    document.getElementById(choiceId).classList.add('selected');
  }
  
  function deselectAnswers() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.classList.remove('selected'));
  }
  
  function getSelected() {
    let selectedChoice;
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
      if (choice.classList.contains('selected')) {
        selectedChoice = choice.id;
      }
    });
    return selectedChoice;
  }
  
  