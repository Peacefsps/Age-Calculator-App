const userDay = document.querySelector('#day')
const userMonth = document.querySelector('#month')
const userYear = document.querySelector('#year')
const dayDisplay = document.querySelector('#day-display')
const monthDisplay = document.querySelector('#month-display')
const yearDisplay = document.querySelector('#year-display')
const form = document.querySelector('form')
const dayError = document.querySelector('.day-error')
const monthError = document.querySelector('.month-error')
const yearError = document.querySelector('.year-error')
const labelDay = document.querySelector('#label-day')
const labelMonth = document.querySelector('#label-month')
const labelYear = document.querySelector('#label-year')



form.addEventListener('submit', function(e) {
    e.preventDefault()
        let dayData = userDay.value
        let monthData = userMonth.value
        let yearData = userYear.value
        let now = new Date()
    if (dayData == '') {
        dayError.innerHTML = 'This field is required'
        userDay.classList.add('invalid')
        labelDay.classList.add('invalid')
    } 
    else if (dayData < 1 || dayData > 31) {
        dayError.innerHTML = "Must be a valid date"
        userDay.classList.add('invalid')
        labelDay.classList.add('invalid')
    }
    else {
        let dateDiff = Math.abs(now.getDate() - dayData)
        dayDisplay.innerHTML = dateDiff
        userDay.classList.remove('invalid')
        labelDay.classList.remove('invalid')
    }
    if (monthData == '') {
        monthError.innerHTML = 'This field is required'
        userMonth.classList.add('invalid')
        labelMonth.classList.add('invalid')
    }
    else if (monthData < 0 || monthData > 11) {
        monthError.innerHTML = "Must be a valid month"
        userMonth.classList.add('invalid')
        labelMonth.classList.add('invalid')
    }
    else {
        let monthDiff = now.getMonth() - monthData
        monthDisplay.innerHTML = monthDiff
        userMonth.classList.remove('invalid')
        labelMonth.classList.remove('invalid')
    }
    if (yearData == '') {
        yearError.innerHTML = 'This field is required'
        userYear.classList.add('invalid')
        labelYear.classList.add('invalid')
    }
    else if (yearData > 3000) {
        yearError.innerHTML = "Must be in the past"
        userYear.classList.add('invalid')
        labelYear.classList.add('invalid')
    }
    else {
        let yearDiff = now.getFullYear() - yearData
        yearDisplay.innerHTML = yearDiff
        userYear.classList.remove('invalid')
        labelYear.classList.remove('invalid')
    }
})

form.addEventListener('input', function() {
    let dayData = userDay.value
    let monthData = userMonth.value
    let yearData = userYear.value
    if (dayData === '') {
        dayError.innerHTML = 'This field is required'
        userDay.classList.add('invalid')
        labelDay.classList.add('invalid')
    }
    else if (dayData < 1 || dayData > 31) {
        dayError.innerHTML = "Must be a valid date"
        userDay.classList.add('invalid')
        labelDay.classList.add('invalid')
    }
    else {
        dayError.innerHTML = ''
        userDay.classList.remove('invalid')
        labelDay.classList.remove('invalid')
    }    
    if (monthData === '') {
        monthError.innerHTML = 'This field is required'
        userMonth.classList.add('invalid')
        labelMonth.classList.add('invalid')
    }
    else if (monthData < 0 || monthData > 11) {
        monthError.innerHTML = "Must be a valid month"
        userMonth.classList.add('invalid')
        labelMonth.classList.add('invalid')
    }
    else {
        monthError.innerHTML = ''
        userMonth.classList.remove('invalid')
        labelMonth.classList.remove('invalid')
    }
    if (yearData == '') {
        yearError.innerHTML = 'This field is required'
        userYear.classList.add('invalid')
        labelYear.classList.add('invalid')
    }
    else if (yearData > 3000) {
        yearError.innerHTML = "Must be in the past"
        userYear.classList.add('invalid')
        labelYear.classList.add('invalid')
    }
    else {
        yearError.innerHTML = ''
        userYear.classList.remove('invalid');
        labelYear.classList.remove('invalid')
    }
})