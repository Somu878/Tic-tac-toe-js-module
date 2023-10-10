const buttons = document.querySelectorAll('.btns');
const options = ["rock", "paper", "scissors"];
const wl =document.querySelector('.wl')

buttons.forEach(element => {
    element.addEventListener('click', () => {
        const player = element.innerText.toLowerCase();
        const computer = options[Math.floor(Math.random() * options.length)];
        rockPaperScissor(player,computer);
        document.querySelector('.player').innerText = `The player: ${player}`;
        document.querySelector('.computer').innerText=`The computer:${computer}`
        
       
    });
   
});
function rockPaperScissor(player,computer) {
    
    if (player === computer) {
        // window,alert();
        wl.innerText="It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        // window,alert(`You win! Computer chose ${computer}.`);
        wl.innerText=`You win! Computer chose ${computer}.`;
        
    } else {
        // window,alert(`You lose! Computer chose ${computer}.`);
        wl.innerText=`You lose! Computer chose ${computer}.`;
    }
    
}
