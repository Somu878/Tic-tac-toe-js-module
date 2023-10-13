const buttons = document.querySelectorAll('.btns');
const container = document.querySelector('.btn');
const rules = document.querySelector('.ruleli')
const xbtn = document.querySelector('.xbtn')
const rulebtn = document.querySelector('.rulebtn')
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

