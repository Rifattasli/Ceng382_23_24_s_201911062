document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const elementsToToggle = document.querySelectorAll('p, div');
    const showFormButton = document.getElementById('showFormButton');
    const form = document.getElementById('sumForm');
    const calculateButton = document.getElementById('calculateButton');
    const sumResult = document.getElementById('sumResult');

    
    toggleButton.addEventListener('click', function() {
        elementsToToggle.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = ''; 
            } else {
                element.style.display = 'none'; 
            }
        });
    });

    
    showFormButton.addEventListener('click', function() {
        form.style.display = form.style.display === 'none' ? '' : 'none';
    });

    
    calculateButton.addEventListener('click', function() {
        const input1 = document.getElementById('input1').value;
        const input2 = document.getElementById('input2').value;
        const sum = parseFloat(input1) + parseFloat(input2);
        sumResult.textContent = isNaN(sum) ? "Please enter valid numbers." : `Sum: ${sum}`;
    });
});
