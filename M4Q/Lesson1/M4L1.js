const quizData = [
    {
        question: "1. In a circle, a 30° inscribed angle intersects an arc. Find the measure of the intercepted arc.",
        a: " 15° ",
        b: " 30° ",
        c: " 60° ",
        d: " 90° ",
        correct: "c",
    },
    {
        question: "2. ∠A and ∠B are inscribed angles that intercept the same arc. If m∠A = 19x and m∠B = 14x + 9, find x.",
        a: "1.8",
        b: "1.7",
        c: "1.6",
        d: "1.5",
        correct: "a",
    },
    {
        question: "3. O̅R̅  ",
        a: "Diameter",
        b: "Radius",
        c: "Semicircle",
        d: "Center",
        correct: "b",
    },
    {
        question: "4. An angle inscribed in a semicircle is __________.",
        a: "an acute angle",
        b: "a obtuse angle",
        c: "a right angle",
        d: "a zero angle",
        correct: "c",
    },
    {
        question: "5. The opposite angles of a quadrilateral inscribed in a circle are _________.",
        a: "adjacent",
        b: "complementary",
        c: "supplementary",
        d: "vertical",
        correct: "c",
    },
    {        question: "6. In a circle, an inscribed angle intersects an arc that measures 72°.  What is the measure of the inscribed angle?",
        a: "36°",
        b: "72°",
        c: "108°",
        d: "144°",
        correct: "a",
    },
    {
        question: "7. Q̅R̅",
        a: "Chord",
        b: "Diameter",
        c: "Radius",
        d: "Semicircle",
        correct: "a",
    },
    {
        question: "8. Quadrilateral ABCD is inscribed in a circle. If m∠A = 3x + 5 and m∠C = 7x + 15, find the value of x.",
        a: "10",
        b: "11",
        c: "13",
        d: "16",
        correct: "d",
    },
    {
        question: "9. In a circle, ∠A and ∠B are inscribed angles that intercept the same arc. What can you conclude about the measure of these two angles?",
        a: "m∠A =1/2 m∠b",
        b: "m∠A = m∠B",
        c: "m∠A > m∠B",
        d: "m∠A < m∠B",
        correct: "b",
    },
    {
        question: "10. Dianne sliced an egg pie into 8 equal parts. If her brother ate three slices and she ate 2 slices, find the degree measure of what is left.",
        a: "45°",
        b: "90°",
        c: "135°",
        d: "225°",
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
  
  