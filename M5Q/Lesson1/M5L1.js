const quizData = [ // ja lesson 2 module5 to, di ko alam gagawin mo sa images eh
    {
        question: "1. It is the region bounded by an arc of the circle and the two radii to the endpoints of the arc.",
        a: " tangent of a circle",
        b: " secant of a circle",
        c: " sector of a circle",
        d: " segment of a circle",
        correct: "c",
    },
    {
        question: "2.It is the region bounded by an arc and the segment joining its endpoints.",
        a: " tangent of a circle",
        b: " secant of a circle",
        c: " sector of a circle",
        d: " segment of a circle",
        correct: "d",
    },
    {
        question: "3. The area of the segment is equal to the area of the sector minus the area of the ______. ",
        a: "circle",
        b: "polygon",
        c: "square",
        d: "triangle",
        correct: "d",
    },
    {
        question: "4. Find the area of the shaded region of circle P.",
        a: "654.50 sq cm.",
        b: "324.85 sq. cm",
        c: "155.56 sq. cm",
        d: " 94.28 sq. cm",
        correct: "a",
    },
    {
        question: "5. Find the area of the segment formed by a central angle of 45o and a radius of 8 inches.",
        a: "10.18 sq in",
        b: "24.43 sq in",
        c: "42.34 sq in",
        d: "54.58 sq in",
        correct: "b,
    },
    {       
        question: "6.  At how many points does a secant line intersect the circle?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "c",
    },
    {
        question: "7. How many lines can be tangent to a given point? ",
        a: "0",
        b: "1",
        c: "2",
        d: "more than 2",
        correct: "c",
    },
    {
        question: "8.Segments AB and AC are tangents to circle O at B and C respectively. What can you conclude about the measure of segments AB and AC?",
        a: "The measure of AB and AC are congruent.",
        b: "The measure of AB is greater than the measure of AC.",
        c: "The measure of AC is greater than the measure of AB.",
        d: "The measures of AB and AC cannot be determined.",
        correct: "b",
    },
    {
        question: "9. 11.The measure of the angle formed on the circle by a secant and a tangent is one-half the measure of its ____.",
        a: "central angle",
        b: "intercepted arc",
        c: "subtended angle",
        d: "tangent line",
        correct: "b",
    },
    {
        question: "10. A sector of a circle is region bounded by an (1)________ of the circle and the two radii to the endpoints of the arc. ",
        a: "arc",
        b: "radius,
        c: "endpoints",
        d: "pizza",
        correct: "a",
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
  
  