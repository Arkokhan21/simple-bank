
// Deposit Input Field section -
document.getElementById('btn-deposit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-deposit')
    const userDepositValue = userDeposit.value
    const userDepositValueNumeric = parseFloat(userDepositValue)
    userDeposit.value = ''

    if (isNaN(userDepositValueNumeric)) {
        alert('please provid a valid number')
        return;
    }

    // Deposit-section -
    const depositTotal = document.getElementById('deposit-total')
    const deposit = depositTotal.innerText
    const depositNumeric = parseFloat(deposit)

    const currentDeposit = depositNumeric + userDepositValueNumeric
    depositTotal.innerText = currentDeposit

    // Balance-section -
    const balanceTotal = document.getElementById('balance-total')
    const balance = balanceTotal.innerText
    const balanceNumeric = parseFloat(balance)

    const currentBalance = balanceNumeric + userDepositValueNumeric
    balanceTotal.innerText = currentBalance

})