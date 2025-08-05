const body = document.body;

const btn1 = document.getElementById('memTim')
btn1.textContent = 'Member Tim'

btn1.style.padding = '10px'
btn1.style.borderRadius = '6px'
btn1.style.boxShadow = '2px 2px 6px rgba(0, 0, 0, 0.3)'
btn1.style.backgroundColor = 'green'
btn1.style.color = 'white'

function hoverMouse() {
    console.log('button hovered')
    btn1.style.backgroundColor = 'darkgreen'
}

function unhoverMouse() {
    console.log('button unhovered')
    btn1.style.backgroundColor = 'green'
}

function buttonClicked() {
    console.log('button Member Tematik clicked!')
    window.location.href = 'https://docs.google.com/spreadsheets/d/1atHxN55_Xz_l3eh2A2SAOh3lCusQXpPc1zNvYCMc6BQ/edit?usp=sharing'
}
