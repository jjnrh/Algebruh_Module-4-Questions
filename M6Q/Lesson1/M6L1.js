const quizData = [ 
    {
        question: "1. A line is ___________ to a circle if it lies on the plane of the circle and intersects the circle in one and only one point.",
        a: " Point of tangency ",
        b: " Tangent segment ",
        c: " Secant ",
        d: " Tangent ",
        correct: "d",
    },
    {
        question: "2.This point is called the _________________. (Refer to the above question)",
        a: " Point of tangency ",
        b: " Tangent segment ",
        c: " Secant ",
        d: " None of the Above ",
        correct: "a",
    },
    {
        question: "3. For instance, ←JK→ is tangent at ⊙ U at point M. Point M is the point of tangency. J̅K̅ is the ______________ from point J to ⊙ U. ",
        a: "Secant",
        b: "Secant segment",
        c: "Tangent segment",
        d: "Point of tangency",
        correct: "c",
    },
    {
        question: "4. A line is a  _____________ to a circle if it intersects the circle in two points. ←TV→ is a secant of ⊙ W. ",
        a: "Tangent",
        b: "Secant",
        c: "Tangent segment",
        d: "None of the Above",
        correct: "b",
    },
    {
        question: "5.  It intersects the circle in points N and Q. T̅N̅ is a _______________ from T to circle W. ",
        a: " Point of tangency ",
        b: " Tangent segment ",
        c: " Secant ",
        d: " Tangent ",
        correct: "c",
    },
    {   
        question: "6. What do you call a line that intersects a circle at exactly two points? ",
        a: "Center",
        b: "Radius",
        c: "Chords",
        d: "Secant",
        correct: "d",
    },
    {
        question: "7. What do you call a region in the circle bounded by two radii and the minor arc? ",
        a: "Circle",
        b: "Sector",
        c: "Diameter",
        d: "Arc",
        correct: "b",
    },
    {
        question: "8. What is the measure of a given angle with its vertex on a circle, formed by a secant ray and a tangent ray?",
        a: "Half the measure of the minor arc",
        b: "Half the measure of the major arc",
        c: "Half the measure of the intercepted arc",
        d: "Half the measure of the circle",
        correct: "c",
    },
    {
        question: "9. The area of a sector of a circle is determined by the Area of a sector / Area of a circle = _________? ",
        a: "(θ/360º) × πr2",
        b: "A=πr2",
        c: "A=a2",
        d: "A=wl",
        correct: "a",
    },
    {
        question: "10. What do you call a line that is perpendicular to the radius drawn to the point of contact? ",
        a: "Chord",
        b: "Radius",
        c: "Secant",
        d: "Tangent",
        correct: "d",
    },
    {
      question: "11. A line, segment, or ray that intersects a circle at exactly two points.",
      a: "Central",
      b: "Secant",
      c: "Inscribed",
      d: "Circle",
      correct: "b",
    },
    {
      question: "12. A set of all points in a plane that are a given distance from a given point",
      a: "Center",
      b: "Radius",
      c: "Circle",
      d: "Sector",
      correct: "c",
    },
    {
      question: "13. A/An _____ angle has its vertex at the center of the circle",
      a: "Semicircle",
      b: "Central",
      c: "Diameter",
      d: "None of the above",
      correct: "b",
    },
    {
      question: "14. A/An ______ angle has its vertex on any point on the circle.",
      a: "Sector",
      b: "Radius",
      c: "Tangent",
      d: "Inscribed",
      correct: "d",
    },
    {
      question: "15. It is an arc whose endpoints are also the endpoints of a diameter.",
      a: "Semicircle",
      b: "Circle",
      c: "Diameter",
      d: "None of the above",
      correct: "a",
    },
    {
      question: "16. A line segment that intersects a circle at exactly one point.",
      a: "Sector",
      b: "Secant",
      c: "Radius",
      d: "Tangent",
      correct: "d",
    },
    {
      question: "17. The fixed point in the circle.",
      a: "Sector",
      b: "Secant",
      c: "Inscribed",
      d: "Center",
      correct: "d",
    },
    {
      question: "18. It is the distance from the center to any point in the circle.",
      a: "Diameter",
      b: "Radius",
      c: "Line",
      d: "Secant",
      correct: "b",
    },
    {
      question: "19. A line segment whose endpoints are on the circle.",
      a: "Diameter",
      b: "Center",
      c: "Segment",
      d: "Endpoints",
      correct: "a",
    },
    {
      question: "20. It is a part of the circle bounded by two radii and an arc.",
      a: "Line",
      b: "Endpoints",
      c: "Sector",
      d: "Circle",
      correct: "c",
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
  
  