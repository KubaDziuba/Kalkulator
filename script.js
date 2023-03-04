let loan 
let ownContribution 
let installments
let rate
let commission
let calculate
let tableFR, tableDR
let newtr, tdInstallment, tdCapital, tdInterest, tdPayment


let capital
let interest
let payment
let totalInterest

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    loan = document.querySelector('#loan')
    ownContribution = document.querySelector('#ownContribution')
    installments = document.querySelector('#installments')
    rate = document.querySelector('#rate')
    commission = document.querySelector('#commission')
    calculate = document.querySelector('#calculate')
    tableDR = document.querySelector('#decreasingInstallment')
    tableFR = document.querySelector('#fixedInstallment')

}

const prepareDOMEvents = () => {
    calculate.addEventListener('click', finalCalculation)
}

//TODO
// 1. funkcje na liczenie poszczególnych elementów
// 2. deklaracja zmiennych + ich opis
// 3. zabezpieczenia przed idiotami
// 4. dopieszczenie wyglądu w HTML - tips etc pełne chowanie tabeli 
// 5. dodać komentarze sensowne wszędzie

const calculateInterestDecreasingInstallments = (loanL, capitalL, installmentL, rateL) => {

    return (loanL - capitalL*(installmentL-1))*((rateL/100)/12)
}

const installmentsCalculationDecreasing = () => {
    let nbrOfInstallments = (installments.value * 1)
    capital = ((loan.value * 1 - ownContribution.value * 1) / (installments.value * 1)).toFixed(2)
    let loanAmount = loan.value * 1
    let rateAsDecimal = (rate.value *1) + (commission.value * 1)
    console.log(rateAsDecimal)
    tableDR.innerHTML = ''
    for (let i = 1; i <= nbrOfInstallments; i++) {
        interest = calculateInterestDecreasingInstallments(loanAmount, capital, i, rateAsDecimal).toFixed(2)
        payment = (capital * 1 + interest * 1).toFixed(2)
        newtr = document.createElement('tr')
        tableDR.append(newtr)

        tdInstallment = document.createElement('td')
        tdInstallment.textContent = i
        newtr.append(tdInstallment)

        tdCapital = document.createElement('td')
        tdCapital.textContent = capital
        newtr.append(tdCapital)

        tdInterest = document.createElement('td')
        tdInterest.textContent = interest
        newtr.append(tdInterest)

        tdPayment = document.createElement('td')
        tdPayment.textContent = payment
        newtr.append(tdPayment)

      }
}

const installmentsCalculationFixed = () => {
    let nbrOfInstallments = (installments.value * 1)
    capital = ((loan.value * 1 - ownContribution.value * 1) / (installments.value * 1)).toFixed(2)
    let loanAmount = loan.value * 1
    let rateAsDecimal = (rate.value *1) + (commission.value * 1)
    tableFR.innerHTML = ''
    for (let i = 1; i <= nbrOfInstallments; i++) {
        interest = calculateInterestDecreasingInstallments(loanAmount, capital, i, rateAsDecimal).toFixed(2)
        payment = (capital * 1 + interest * 1).toFixed(2)
        newtr = document.createElement('tr')
        tableFR.append(newtr)

        tdInstallment = document.createElement('td')
        tdInstallment.textContent = i
        newtr.append(tdInstallment)

        tdCapital = document.createElement('td')
        tdCapital.textContent = capital
        newtr.append(tdCapital)

        tdInterest = document.createElement('td')
        tdInterest.textContent = interest
        newtr.append(tdInterest)

        tdPayment = document.createElement('td')
        tdPayment.textContent = payment
        newtr.append(tdPayment)

      }
}

const finalCalculation = () => {
    installmentsCalculationDecreasing()
    installmentsCalculationFixed()
}

document.addEventListener('DOMContentLoaded', main)