let loan //loan amount - USER INPUT
let ownContribution //own contribution - USER INPUT  - optional
let installments //number of installments - USER INPUT
let rate //load rate - USER INPUT
let commission //bank commission - USER INPUT - optional

let calculate //button activating calculation
let tableFR, tableDR //tables to display results
let newtr, tdInstallment, tdCapital, tdInterest, tdPayment //table elements to display results

let capital //capital part of given installment
let interest //calculated interest part for given installment
let payment // total amount to be paid for given installments


//main function
const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

//getting all needed elements from site
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

//function with all interactions
const prepareDOMEvents = () => {
    calculate.addEventListener('click', finalCalculation)
}

/// calculates interests of each decreasing installments
/// parameter's names matches global ones, L = local variable 
const calculateInterestDecreasingInstallments = (loanL, capitalL, installmentL, rateL) => {
    return (loanL - capitalL*(installmentL-1))*((rateL/100)/12)
}


/// making necessary calculation and adds rows to the table for decreasing payments
const installmentsCalculationDecreasing = () => {

    let nbrOfInstallments = (installments.value * 1)
    let loanAmount = loan.value * 1
    let rateAsDecimal = (rate.value *1) + (commission.value * 1)

    capital = ((loan.value * 1 - ownContribution.value * 1) / (installments.value * 1)).toFixed(2)
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

/// making necessary calculation and adds rows to the table for fixed payments
const installmentsCalculationFixed = () => {
    let nbrOfInstallments = (installments.value * 1)
    let loanAmount = loan.value * 1
    let rateAsDecimal = (rate.value *1) + (commission.value * 1)

    capital = ((loan.value * 1 - ownContribution.value * 1) / (installments.value * 1)).toFixed(2)
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

/// activates calculation functions
const finalCalculation = () => {
    installmentsCalculationDecreasing()
    installmentsCalculationFixed()
}

document.addEventListener('DOMContentLoaded', main)

//TODO
// 1. funkcje na liczenie poszczególnych elementów
// 2. deklaracja zmiennych + ich opis
// 3. zabezpieczenia przed idiotami
// 4. dopieszczenie wyglądu w HTML - tips etc pełne chowanie tabeli 