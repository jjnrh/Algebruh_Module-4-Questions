const quizData = [
    {
        question: "1. If the coordinates of H is (2,0) and B is at (7,0). How far in units H to B? ",
        a: " 5 units ",
        b: " 4 units ",
        c: " 3 units ",
        d: " 2 units ",
        correct: "a",
    },
    {
        question: "2. If the coordinates of C is (-2,0) and D is at (5,0). How far in units C to D? ",
        a: " 4 units ",
        b: " 5 units ",
        c: " 6 units ",
        d: " 7 units ",
        correct: "d",
    },
    {
        question: "3. In a coordinate plane house A is located at (0,0), house B (0,9) and house C (12,0). How far in units House B to House C?",
        a: " 13 units ",
        b: " 14 units ",
        c: " 15 units ",
        d: " 16 units ",
        correct: "",
    },
    {
        question: "4. A delivery van travels 12 units to the right of the origin of the coordinate plane then takes 16 units upward. If the delivery van started at the origin (0,0), of the coordinate plane, how far in units the delivery van from the starting point? ",
        a: " 21 units ",
        b: " 20 units ",
        c: " 19 units ",
        d: " 18 units ",
        correct: "b",
    },
    {
        question: "5. The school is located at the coordinates (7,8) , if a store is located at (16,8), then how far in units is the school from the store? ",
        a: " 7 units ",
        b: " 8 units ",
        c: " 9 units ",
        d: " 10 units ",
        correct: "c",
    },
    {        
        question: "6. In coordinate plane D is at (7,0) and C is at (11,3), How far in units D to C? ",
        a: " 5 units ",
        b: " 4 units ",
        c: " 3 units ",
        d: " 2 units ",
        correct: "a",
    },
    {
        question: "7 What is the distance between G and H. If the coordinates of G is (2,19) and H is (0,-7)? ",
        a: " 3.75 units ",
        b: " 5.09 units ",
        c: " 12.16 units ",
        d: " 26.08 units ",
        correct: "d",
    },
    {
        question: "8. For numbers 8-10. If a mango tree is located at coordinates (-8,9) and a mango picker A is at (4,0) and mango picker B is at (5,1). How far in units should mango picker A have to walk to get to the mango tree?",
        a: " 14 units ",
        b: " 15 units ",
        c: " 16 units ",
        d: " 17 units ",
        correct: "b",
    },
    {
        question: "9. How far in units should mango picker B has to walk to get to the mango tree? ",
        a: " 14.26 units ",
        b: " 15.26 units ",
        c: " 16.26 units ",
        d: " 17.26 units ",
        correct: "b",
    },
    {
        question: "Which of the two mango pickers is closest to the mango tree? ",
        a: " Mango picker A ",
        b: " Both mango picker A and B ",
        c: " Mango picker B ",
        d: " None of them ",
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
  
  