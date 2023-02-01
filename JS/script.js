const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


// BMI 

const calculateForm = document.getElementById('calculate-form'),
calculateCm = document.getElementById('calculate-cm'),
calculateKg = document.getElementById('calculate-kg'),
calculateMessage = document.getElementById('calculate-message')
const calculateBmi = (e) => {
    e.preventDefault()

    // Check if the their is a value in the input field
    if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Display message
        calculateMessage.textContent = 'Enter your Height and Weight'

        // Remove message after three secs
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)

    } else{
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))  

        if(bmi < 18.5){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😢`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😍`
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are Overweight😢`
        }

        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)

const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.featured__filters,`)
sr.reveal(`.about, .cii, .x, .x2`, {delay:800})
sr.reveal(`.civ`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.home, .ci, .cv, .x1`, {origin: 'left'})
sr.reveal(`.homei, .ciii, .cvi, .x3`, {origin: 'right'})
sr.reveal(`.con`, {interval: 300})
sr.reveal(`.sub`, {interval: 100})