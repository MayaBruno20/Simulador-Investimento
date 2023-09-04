function calculateInvestment() {
    var principal = parseFloat(document.getElementById('principalAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var years = parseInt(document.getElementById('numberOfYears').value);

    var totalAmount = principal * (1 + interestRate / 100) ** years;
    var interestEarned = totalAmount - principal;

    document.getElementById('totalAmount').innerHTML = 'R$ ' + totalAmount.toFixed(2);
    document.getElementById('interestEarned').innerHTML = 'R$ ' + interestEarned.toFixed(2);
}