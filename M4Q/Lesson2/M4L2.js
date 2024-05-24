const quizData = [
    {
        question: "1.  In circles or congruent circles, congruent central angles are congruent.",
        a: "Chords",
        b: "Radius",
        c: "Bisector",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "2.  In a circle, if the radius or diameter is to a chord, then it bisects the chord and its arc. (parallel, perpendicular, equal)         ",
        a: "Parallel",
        b: "Perpendicular",
        c: "Diameter",
        d: "Equal",
        correct: "b",
    },
    {
        question: "3. The measure of an inscribed angle is the measure of its intercepted arc. (twice, equal to, half) ",
        a: "Twice",
        b: "Equal to",
        c: "Half",
        d: "Chords",
        correct: "c",
    },
    {
        question: "4. An inscribed angle subtends a semicircle if and only if the angle is  angle. (inscribed, right, central) ",
        a: "Inscribed",
        b: "Right",
        c: "Central",
        d: "Semicircle",
        correct: "b",
    },
    {
        question: "5.  The degree measure of a central angle is the measure of its intercepted arc. (half, equal to, twice) ",
        a: "Half",
        b: "Equal to",
        c: "Twice",
        d: "Chords",
        correct: "b",
    },
    {        question: "6. Quadrilateral ABCD is inscribed in ʘR. If the m∠DAB = 75, what is the measure of its opposite angle ∠BCD?    ",
        a: "285°",
        b: "255°",
        c: "105°",
        d: "15°",
        correct: "c",
    },
    {
        question: "7. ∠ABD and ∠AND are inscribed angles that intercept ÂD̂. The degree the measure of ÂD̂ is 70°. Which of the following statements is correct?        ",
        a: "the m∠ABD = 70°",
        b: "the m∠ABD = m∠AND",
        c: "∠ABD and ∠AND are supplementary angles",
        d: "The measure of ∠AND is twice the measure of ÂD̂",
        correct: "b",
    },
    {
        question: "8. A graph is composed of sectors with central angles that measure 5xo, 4xo, 7xo and 8xo. What is the measure in degrees of the smallest minor arc?",
        a: "15°",
        b: "30°",
        c: "45°",
        d: "60°",
        correct: "d",
    },
    {
        question: "9. Mang Diego has a circular garden with a diameter equal to 12 meters. He decided to fence half of it with an isosceles triangular fence which has vertices on the edge of the circle. What is the perimeter of the fence?        ",
        a: "12 + 12√2 m",
        b: "10 + 10√2 m",
        c: "6 + 6√2 m",
        d: "4 + 4√2 m",
        correct: "a",
    },
    {
        question: "10. ∠M and ∠N are inscribed angles that intercept the same arc. If m∠M =27x and m∠N = 10x + 51, find x.        ",
        a: "6",
        b: "5",
        c: "4",
        d: "3",
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
  
  