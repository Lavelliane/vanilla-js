let word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//LIST OF WORDS
const words = [
    'Almost before we knew it, We had left the ground.',
    'Love Her Wild',
    'I just need you and some sunsets',
    'The mind forgets, what the heart remembers',
    `It's a lonely thing, protecting a breakable heart`,
    'We were strange in love her and I. Too wild to last, too rare to die',
    'Break my heart and you will find yourself inside',
    'New love is the best cure for old love gone bad.',
    'She tore poems from my flesh, in fights, in love, and sex',
    `You've touched me, without even touching me`,
    'I see home in your eyes, but home is so far away',
    'twice I would die, for a little more once with you',
    'A sky full of stars and he was staring at her',
]

let randomWord;
let score = 0;
let time = 25;
let letterIterator = 0;
text.focus();
initializeDifficulty();

const bonusTime = [10,7,5];
let bonusTimeSelected = bonusTime[localStorage.getItem('difficulty')];

//Countdown
const timeInterval = setInterval(updateTimeScene, 1000);


addWordToDOM();
console.log(randomWord.slice(0,5))
//FUNCTIONS

//Function to get a random word from the list
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}
function addWordToDOM () {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}
//FUNCTION TO SHOW WHAT HAPPENS EVERY 1 SECOND
function updateTimeScene(){
    time--;
    timeEl.innerHTML = time + 's'
    if(time === 0){
        clearInterval(timeInterval);
        //END GAME
        gameOver();
    }
}
function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final Score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endGameEl.style.display = 'flex'
}
function storeDifficulty() {
    localStorage.setItem('difficulty', difficultySelect.selectedIndex);
}
function initializeDifficulty(){
    const difficultyStored = localStorage.getItem('difficulty');
    if(difficultyStored === null){
        storeDifficulty();
        return;
    }
}


//EVENT LISTENERS

//DIFFICULTY CHANGE LISTENER
difficultySelect.addEventListener('change', (e) => {
    storeDifficulty();
    bonusTimeSelected = bonusTime[localStorage.getItem('difficulty')];
});


//TEXT INPUT LISTENER
text.addEventListener('input', e => {
    const insertedText = e.target.value;    
    if(insertedText === randomWord){
        addWordToDOM();
        e.target.value = '';
        time += bonusTimeSelected;
        letterIterator = 0;
        updateScore();
    } else if(insertedText === randomWord.slice(0,letterIterator+1)){
        console.log(insertedText)
        letterIterator++;
        const wordTextContent = randomWord;
        let newText = '';
        newText += '<span style="color:#1bf659">'+wordTextContent.slice(0,letterIterator)+'</span>'
                +'<span style="color:#fff">'+wordTextContent.slice(letterIterator, wordTextContent.length)+'</span>';
        word.innerHTML = newText;
    } 
})
