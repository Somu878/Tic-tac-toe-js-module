const container = document.querySelector('.container')
const buttons = document.querySelectorAll('.btns')
const con = document.querySelector('.btn')
const rulesbtn = document.querySelector('.rulebtn')
const xbtn = document.querySelector('.xbtn')
const rulelist = document.querySelector('.ruleli')
rulelist.style.display = "none";
const results = document.querySelector('.results')
results.style.display ="none";
const winceleb = document.querySelector('.winceleb')
winceleb.style.display ="none";
const nxtbtn = document.querySelector('.nxtbtn')
const opt = ["rock","paper","scissors"];
const whowin = document.querySelector('.whowin')
const againpc = document.querySelector('.againpc')
const ecllipseani = document.querySelector('.con')
const user = document.querySelector('.userchose')
const comp = document.querySelector('.compchose')
const resplayagain = document.querySelector('.resplayagain')
const playagainbtn = document.  querySelector('.playagainbtn')

let cvalue = parseInt(localStorage.getItem('computerScore')) || 0;
let pvalue = parseInt(localStorage.getItem('playerScore'))||0;
const c = document.getElementById('c')
const p = document.getElementById('p')
c.textContent = cvalue;
p.textContent = pvalue;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        con.style.display = 'none';
        results.style.display ="block";
        const computer = opt[Math.floor(Math.random()*opt.length)];
        const player = button.innerText.toLowerCase();
        RockPaperScissors(player,computer);


    });
});
rulesbtn.addEventListener("click", () => {
  rulelist.style.display = "block";
});
xbtn.addEventListener('click',()=>{
    rulelist.style.display = "none";
})


nxtbtn.addEventListener('click',()=>{
    winceleb.style.display ="block";
    container.style.display = 'none';
    results.style.display ="block";


})


resplayagain.addEventListener('click',()=>{
    con.style.display="block";
    results.style.display ="none";
    ecllipseani.style.display="block";
    ecllipseani.style.left="50px";
    againpc.style.display='block';
    resplayagain.textContent="PLAY AGAIN";
})

playagainbtn.addEventListener('click',()=>{
    winceleb.style.display ="none";
    container.style.display="block";
    results.style.display ="none";
    con.style.display = 'block';

    


})





function RockPaperScissors(player, computer) {
    switch (player) {
        case "rock":
            user.style.backgroundImage ="url('/icons/icons8-fist-67\ 1.png')";
            user.style.backgroundSize = "90px";
            user.style.borderColor="#0074B6";
            switch (computer) {
                case "rock":
                    comp.style.backgroundImage="url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#0074B6";
                    whowin.innerText="TIE UP";
                    againpc.style.display='none';
                    ecllipseani.style.display='none';
                    nxtbtn.style.display="none";
                    resplayagain.textContent="REPLAY";
                    console.log("It's a tie!");
                    break;
                case "paper":
                    comp.style.backgroundImage="url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#FFA943";
                    whowin.innerText="YOU LOST";
                    nxtbtn.style.display="none";
                    console.log("Computer wins! Paper beats rock");
                    ecllipseani.style.left ="600px";
                    cvalue+=1;
                    break;
                case "scissors":
                    comp.style.backgroundImage="url('/icons/17911\ 1.png')";
                    comp.style.backgroundSize='50px';
                    comp.style.borderColor="#BD00FF";
                    whowin.innerText="YOU WIN";
                    nxtbtn.style.display="block";
                    pvalue += 1;
                    console.log("You win! Rock beats scissors");
                    break;
            }
            break;
        case "paper":
            user.style.backgroundImage="url('/icons/icons8-hand-64\ 1.png')";
            user.style.backgroundSize = "90px";
            user.style.borderColor="#FFA943";
            switch (computer) {
                case "rock":
                    comp.style.backgroundImage="url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#0074B6";
                    whowin.innerText="YOU WIN";
                    nxtbtn.style.display="block";
                    pvalue+=1;
                    console.log("You win! Paper beats rock");
                    break;
                case "paper":
                    comp.style.backgroundImage="url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#FFA943";
                    againpc.style.display='none';
                    whowin.innerText="TIE UP";
                    nxtbtn.style.display="none";
                    ecllipseani.style.display='none';
                    resplayagain.textContent="REPLAY";
                    console.log("It's a tie!");
                    break;
                case "scissors":
                    comp.stylebackgroundImage="url('/icons/17911\ 1.png')";
                    comp.style.borderColor="#BD00FF";
                    whowin.innerText="YOU LOST";
                    ecllipseani.style.left ="600px";
                    nxtbtn.style.display="none";
                    cvalue+=1;
                    console.log("Computer wins! Scissors beats paper");
                    break;
            }
            break;
        case "scissors":
            user.style.backgroundImage ="url('/icons/17911\ 1.png')";
            user.style.borderColor="#BD00FF";
            user.style.backgroundSize='50px';
            switch (computer) {
                case "rock":
                    comp.style.backgroundImage="url('/icons/icons8-fist-67\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#0074B6";
                    whowin.innerText="YOU LOST";
                    ecllipseani.style.left ="600px";
                    nxtbtn.style.display="none";
                    cvalue+=1;
                    console.log("Computer wins! Rock beats scissors");
                    break;
                case "paper":
                    comp.style.backgroundImage="url('/icons/icons8-hand-64\ 1.png')";
                    comp.style.backgroundSize = "90px";
                    comp.style.borderColor="#FFA943";
                    whowin.innerText="YOU WIN";
                    nxtbtn.style.display="block";
                    pvalue+=1;
                    console.log("You win! Scissors beats paper");
                    break;
                case "scissors":
                    comp.style.backgroundImage="url('/icons/17911\ 1.png')";
                    comp.style.borderColor="#BD00FF";
                    comp.style.backgroundSize='50px';
                    againpc.style.display='none';
                    whowin.innerText="TIE UP";
                    ecllipseani.style.display='none';
                    nxtbtn.style.display="none";
                    resplayagain.textContent="REPLAY";
                    console.log("It's a tie!");
                    break;
            }
            break;
        default:
            console.log("Error Occured!!!!!");
            break;
    }
    c.textContent= cvalue
    p.textContent=pvalue
    localStorage.setItem('computerScore', cvalue.toString());
    localStorage.setItem('playerScore', pvalue.toString());
}
