function Emi_calculator(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get input values as strings
    let Loan_amount_str = document.querySelector('#loanAmount').value;
    let Interest_rate_str = document.querySelector('#interestRate').value;
    let Loan_tenure_str = document.querySelector('#loanTenure').value;

    // Convert strings to floats
    let Loan_amount = parseFloat(Loan_amount_str);
    let Interest_rate = parseFloat(Interest_rate_str);
    let Loan_tenure = parseFloat(Loan_tenure_str);

    // Check if any of the inputs are NaN
    if (isNaN(Loan_amount) || isNaN(Interest_rate) || isNaN(Loan_tenure)) {
        alert('Please enter valid numeric values.');
        return;
    }

    let r = Interest_rate / (12 * 100); // One month interest
    let t = Loan_tenure * 12; // One Month period
    let emi = (Loan_amount * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

    // Calculate total repayment and total interest payable
    let totalRepayment = emi * t;
    let totalInterest = totalRepayment - Loan_amount;
ṭ
    // Display the results
    document.getElementById('emi-result').textContent = emi.toFixed(2);
    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
    document.getElementById('totalRepayment').textContent = totalRepayment.toFixed(2);
}
