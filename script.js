const buttons = document.querySelectorAll('.btns');
const container = document.querySelector('.btn');
const rules = document.querySelector('.ruleli')
const xbtn = document.querySelector('.xbtn')
const rulebtn = document.querySelector('.rulebtn')
const play =document.querySelector('.play')
const con = document.querySelector('.con')
const compchose =document.querySelector('.compchose')
rules.style.display ='none';
rulebtn.addEventListener('click',()=>{
    rules.style.display ='block';
})
xbtn.addEventListener("click", () => {
    rules.style.display ='none';
});
buttons.forEach(button => {
    button.addEventListener('click', () => {
        container.style.display = 'none';
    });
});


play.addEventListener('click', () => {
    con.style.left = '600px';
    compchose.style.backgroundImage = `url('/icons/icons8-fist-67\ 1.png')`;
    compchose.style.backgroundSize = "90px"
    compchose.style.borderColor = "#FFA943"
});


