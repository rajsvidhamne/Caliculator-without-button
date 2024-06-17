document.getElementById('expressionInput').addEventListener('input', function() {
   const input = this.value;
   const resultDiv = document.getElementById('result');
   
   if (input.trim() === '') {
       resultDiv.style.display = 'none';
       return;
   }

   const regex = /^(\d+)\s*([\+\-\*\/])\s*(\d+)$/;
   const match = input.match(regex);
   
   if (!match) {
       resultDiv.textContent = 'Invalid input format';
       resultDiv.className = 'result-box result-error';
       resultDiv.style.display = 'block';
       return;
   }

   const operand1 = parseFloat(match[1]);
   const operator = match[2];
   const operand2 = parseFloat(match[3]);
   let result;

   switch (operator) {
       case '+':
           result = operand1 + operand2;
           break;
       case '-':
           result = operand1 - operand2;
           break;
       case '*':
           result = operand1 * operand2;
           break;
       case '/':
           if (operand2 === 0) {
               resultDiv.textContent = 'Cannot divide by zero';
               resultDiv.className = 'result-box result-error';
               resultDiv.style.display = 'block';
               return;
           }
           result = operand1 / operand2;
           break;
       default:
           resultDiv.textContent = 'Unknown operator';
           resultDiv.className = 'result-box result-error';
           resultDiv.style.display = 'block';
           return;
   }

   resultDiv.textContent = `Result: ${result}`;
   resultDiv.className = 'result-box result-success';
   resultDiv.style.display = 'block';
});
