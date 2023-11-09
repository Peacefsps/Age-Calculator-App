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
const inputEl = document.querySelector('input')


form.addEventListener('submit', function(e) {
    e.preventDefault()
        let dayData = userDay.value
        let monthData = userMonth.value
        let yearData = userYear.value
    if (dayData == '' && monthData == '' && yearData == '') {
        dayError.innerHTML = 'This field is required'
        monthError.innerHTML = 'This field is required'
        yearError.innerHTML = 'This field is required'
        return;
    }
    if (dayData < 1 || dayData > 31) {
        dayError.innerHTML = "Must be a valid date"
    }
    else if (monthData < 0 || monthData > 11) {
        monthError.innerHTML = "Must be a valid month"
    }
    else if (yearData > 3000) {
        yearError.innerHTML = "Must be in the past"
    }
    else {
        let now = new Date()
        let dateDiff = Math.abs(now.getDate() - dayData)
        let monthDiff = now.getMonth() - monthData
        let yearDiff = now.getFullYear() - yearData
        dayDisplay.innerHTML = dateDiff
        monthDisplay.innerHTML = monthDiff
        yearDisplay.innerHTML = yearDiff
    }
})

form.addEventListener('input', function() {
    let dayData = userDay.value
    let monthData = userMonth.value
    let yearData = userYear.value
    if (dayData == '') {
        dayError.innerHTML = 'This field is required'
    }
    else if (dayData < 1 || dayData > 31) {
        dayError.innerHTML = "Must be a valid date"
    }
    if (monthData == '') {
        monthError.innerHTML = 'This field is required'
    }
    else if (monthData < 0 || monthData > 11) {
        monthError.innerHTML = "Must be a valid month"
    }
    if (yearData == '') {
        yearError.innerHTML = 'This field is required'
    }
    else if (yearData > 3000) {
        yearError.innerHTML = "Must be in the past"
    }
})