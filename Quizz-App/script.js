const _question= document.getElementById('question');
const _options= document.querySelector('#answer-btns');
const _category= document.querySelector('.category');

async function loadQuestion(){
    const apiUrl= 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
    const response= await fetch(`${apiUrl}`);
    const data= await response.json();
    // console.log(data.results[0]);
    Question(data.results[0]);
    nextButton.style.display= "none";
}


function Question(data){
    currentCorrectAnswer = data.correct_answer;
    let correctAnswer= data.correct_answer;
    let incorrectAnswer= data.incorrect_answers;
    let optionList= incorrectAnswer;
    optionList.splice(Math.floor(Math.random()*(incorrectAnswer.length+1)), 0, correctAnswer);
    // console.log(optionList);
    // console.log(correctAnswer);
    // console.log(currentCorrectAnswer);
    
    _question.innerHTML= `${data.question}`;
    _options.innerHTML = "";
    _category.innerHTML = `${data.category}`;

    for (let i = 0; i < optionList.length; i++) {
        _options.innerHTML += `<li class="btn">${optionList[i]}</li>`;
    }
}
loadQuestion();

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-btns");
const nextButton= document.getElementById("nxt-btn");

answerButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        if(e.target.innerText === currentCorrectAnswer){
            e.target.style.backgroundColor = 'lightgreen';
        }else{
            e.target.style.backgroundColor = '#ff9393';
        }
        const allBtns = document.querySelectorAll('#answer-btns .btn');
        allBtns.forEach(btn => {
            btn.style.pointerEvents = "none";       
        });
        const correctBtn = [...allBtns].find(btn => btn.innerText === currentCorrectAnswer);
        correctBtn.style.backgroundColor = "lightgreen";
        nextButton.style.display= "block";
    }
});

function nextQuestion() {
    // Re-enable all previous buttons (if they still exist)
    const allBtns = document.querySelectorAll('#answer-btns .btn');
    allBtns.forEach(btn => {
        btn.style.pointerEvents = "auto";
        btn.style.opacity = "1";
        btn.style.backgroundColor = ""; // reset color
    });

    // Load new question
    loadQuestion();
}
nextButton.addEventListener("click", nextQuestion);


