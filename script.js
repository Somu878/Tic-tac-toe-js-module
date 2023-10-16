// Selecting DOM elements
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btns');
const con = document.querySelector('.btn');
const rulesbtn = document.querySelector('.rulebtn');
const xbtn = document.querySelector('.xbtn');
const rulelist = document.querySelector('.ruleli');
rulelist.style.display = "none";
const results = document.querySelector('.results');
results.style.display = "none";
const winceleb = document.querySelector('.winceleb');
winceleb.style.display = "none";
const nxtbtn = document.querySelector('.nxtbtn');
const opt = ["rock", "paper", "scissors"];
const whowin = document.querySelector('.whowin');
const againpc = document.querySelector('.againpc');
const ecllipseani = document.querySelector('.con');
const user = document.querySelector('.userchose');
const comp = document.querySelector('.compchose');
const resplayagain = document.querySelector('.resplayagain');
const playagainbtn = document.querySelector('.playagainbtn');

// Retrieving scores from local storage, defaulting to 0 if not present
let cvalue = parseInt(localStorage.getItem('computerScore')) || 0;
let pvalue = parseInt(localStorage.getItem('playerScore')) || 0;

// Updating score display in the DOM
const c = document.getElementById('c');
const p = document.getElementById('p');
c.textContent = cvalue;
p.textContent = pvalue;

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        con.style.display = 'none';
        results.style.display = "block";
        // Generating random choice for computer
        const computer = opt[Math.floor(Math.random() * opt.length)];
        // Getting player choice from button text
        const player = button.innerText.toLowerCase();
        // Calling RockPaperScissors function with player and computer choices
        RockPaperScissors(player, computer);
    });
});

// Event listener for rules button to display rules
rulesbtn.addEventListener("click", () => {
    rulelist.style.display = "block";
});

// Event listener to close rules
xbtn.addEventListener('click', () => {
    rulelist.style.display = "none";
});

// Event listener for next button to display win celebration
nxtbtn.addEventListener('click', () => {
    winceleb.style.display = "block";
    container.style.display = 'none';
    results.style.display = "block";
});

// Event listener to replay the game
resplayagain.addEventListener('click', () => {
    con.style.display = "block";
    results.style.display = "none";
    ecllipseani.style.display = "block";
    ecllipseani.style.left = "50px";
    againpc.style.display = 'block';
    resplayagain.textContent = "PLAY AGAIN";
});

// Event listener to play the game again
playagainbtn.addEventListener('click', () => {
    winceleb.style.display = "none";
    container.style.display = "block";
    results.style.display = "none";
    con.style.display = 'block';
});

// Function to handle game logic
function RockPaperScissors(player, computer) {
    // Switching based on player choice
    switch (player) {
        case "rock":
            // Updating user UI based on choice
            user.style.backgroundImage = "url('/icons/icons8-fist-67\ 1.png')";
            user.style.backgroundSize = "90px";
            user.style.borderColor = "#0074B6";
            // Switching based on computer choice
            switch (computer) {
                case "rock":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#0074B6";
                    // Displaying tie message and adjusting UI elements
                    whowin.innerText = "TIE UP";
                    againpc.style.display = 'none';
                    ecllipseani.style.display = 'none';
                    nxtbtn.style.display = "none";
                    resplayagain.textContent = "REPLAY";
                    console.log("It's a tie!");
                    break;
                case "paper":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#FFA943";
                    // Displaying loss message and adjusting UI elements
                    whowin.innerText = "YOU LOST";
                    nxtbtn.style.display = "none";
                    console.log("Computer wins! Paper beats rock");
                    ecllipseani.style.left = "600px";
                    cvalue += 1;
                    break;
                case "scissors":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/17911\ 1.png')";
                    comp.style.backgroundSize = '50px';
                    comp.style.borderColor = "#BD00FF";
                    // Displaying win message and adjusting UI elements
                    whowin.innerText = "YOU WIN";
                    nxtbtn.style.display = "block";
                    pvalue += 1;
                    console.log("You win! Rock beats scissors");
                    break;
            }
            break;
        case "paper":
            // Updating user UI based on choice
            user.style.backgroundImage = "url('/icons/icons8-hand-64\ 1.png')";
            user.style.backgroundSize = "90px";
            user.style.borderColor = "#FFA943";
            // Switching based on computer choice
            switch (computer) {
                case "rock":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#0074B6";
                    // Displaying win message and adjusting UI elements
                    whowin.innerText = "YOU WIN";
                    nxtbtn.style.display = "block";
                    pvalue += 1;
                    console.log("You win! Paper beats rock");
                    break;
                case "paper":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#FFA943";
                    // Displaying tie message and adjusting UI elements
                    againpc.style.display = 'none';
                    whowin.innerText = "TIE UP";
                    nxtbtn.style.display = "none";
                    ecllipseani.style.display = 'none';
                    resplayagain.textContent = "REPLAY";
                    console.log("It's a tie!");
                    break;
                case "scissors":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/17911\ 1.png')";
                    comp.style.borderColor = "#BD00FF";
                    // Displaying loss message and adjusting UI elements
                    whowin.innerText = "YOU LOST";
                    ecllipseani.style.left = "600px";
                    nxtbtn.style.display = "none";
                    cvalue += 1;
                    console.log("Computer wins! Scissors beats paper");
                    break;
            }
            break;
        case "scissors":
            // Updating user UI based on choice
            user.style.backgroundImage = "url('/icons/17911\ 1.png')";
            user.style.borderColor = "#BD00FF";
            user.style.backgroundSize = '50px';
            // Switching based on computer choice
            switch (computer) {
                case "rock":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#0074B6";
                    // Displaying loss message and adjusting UI elements
                    whowin.innerText = "YOU LOST";
                    ecllipseani.style.left = "600px";
                    nxtbtn.style.display = "none";
                    cvalue += 1;
                    console.log("Computer wins! Rock beats scissors");
                    break;
                case "paper":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor = "#FFA943";
                    // Displaying win message and adjusting UI elements
                    whowin.innerText = "YOU WIN";
                    nxtbtn.style.display = "block";
                    pvalue += 1;
                    console.log("You win! Scissors beats paper");
                    break;
                case "scissors":
                    // Updating computer UI based on choice
                    comp.style.backgroundImage = "url('/icons/17911\ 1.png')";
                    comp.style.borderColor = "#BD00FF";
                    comp.style.backgroundSize = '50px';
                    // Displaying tie message and adjusting UI elements
                    againpc.style.display = 'none';
                    whowin.innerText = "TIE UP";
                    ecllipseani.style.display = 'none';
                    nxtbtn.style.display = "none";
                    resplayagain.textContent = "REPLAY";
                    console.log("It's a tie!");
                    break;
            }
            break;
        default:
            console.log("Error Occurred!!!!!");
            break;
    }
    // Updating score display in the DOM
    c.textContent = cvalue;
    p.textContent = pvalue;
    // Storing scores in local storage
    localStorage.setItem('computerScore', cvalue.toString());
    localStorage.setItem('playerScore', pvalue.toString());
}
