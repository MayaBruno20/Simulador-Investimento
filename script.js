/**
 * Calcula o montante total e os juros ganhos com base nos dados de investimento inseridos pelo usuário.
 */
function calculateInvestment() {
    // Obtém o principal (valor inicial do investimento) do usuário
    var principal = parseFloat(document.getElementById('principalAmount').value);
    
    // Obtém a taxa de juros anual do usuário
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    
    // Obtém o número de anos para o investimento
    var years = parseInt(document.getElementById('numberOfYears').value);

    // Calcula o montante total usando a fórmula de juros compostos
    var totalAmount = principal * (1 + interestRate / 100) ** years;
    
    // Calcula os juros ganhos
    var interestEarned = totalAmount - principal;

    // Exibe o montante total formatado em Reais (BRL)
    document.getElementById('totalAmount').innerHTML = 'R$ ' + totalAmount.toFixed(2);

    // Exibe os juros ganhos formatados em Reais (BRL)
    document.getElementById('interestEarned').innerHTML = 'R$ ' + interestEarned.toFixed(2);
}
