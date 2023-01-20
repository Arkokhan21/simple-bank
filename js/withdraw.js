
// withdraw input field section - 
document.getElementById('btn-Withdraw').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-withdraw')
    const userWithdrawValue = userWithdraw.value
    const userWithdrawValueNumeric = parseFloat(userWithdrawValue)
    userWithdraw.value = ''

    if (isNaN(userWithdrawValueNumeric)) {
        alert('please provid a valid number')
        return;
    }

    // withdraw section -
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdraw = withdrawTotal.innerText
    const withdrawNumeric = parseFloat(withdraw)

    // reduce balance section - 
    const balanceTotal = document.getElementById('balance-total')
    const balance = balanceTotal.innerText
    const balanceNumeric = parseFloat(balance)

    if (balanceNumeric < userWithdrawValueNumeric) {
        alert('sorry! apnar bank a eto taka nai')
        return;
    }

    const currentWithdraw = withdrawNumeric + userWithdrawValueNumeric
    withdrawTotal.innerText = currentWithdraw

    const reduceBalance = balanceNumeric - userWithdrawValueNumeric
    balanceTotal.innerText = reduceBalance

})