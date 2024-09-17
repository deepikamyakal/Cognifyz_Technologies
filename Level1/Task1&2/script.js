// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // 1. Button that Changes Color When Clicked
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Apply the random color as the button's background
        colorButton.style.backgroundColor = randomColor;
    });

    // 2. Alert Box with Greeting Based on Current Time
    const greetButton = document.getElementById('greetButton');
    greetButton.addEventListener('click', function() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        alert(greeting);
    });

    // 3. Basic Calculator that Adds Two Numbers
    const calculatorForm = document.getElementById('calculator');
    const calcResult = document.getElementById('calcResult');

    calculatorForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get the values from the input fields
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);

        // Check if inputs are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            calcResult.textContent = "Please enter valid numbers.";
            calcResult.style.color = "red";
            return;
        }

        // Calculate the sum
        const sum = num1 + num2;

        // Display the result
        calcResult.textContent = `Result: ${sum}`;
        calcResult.style.color = "green";
    });

});
