let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));
let displayValue = '';
let operatorFlag = false;
let equalsFlag = false;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if(buttonText === 'C') {
            displayValue = '';
            operatorFlag = false;
        } else if(buttonText === '=') {
            try {
                displayValue = eval(displayValue);
                equalsFlag = true;
            } catch {
                displayValue = "Error!";
            } finally {
                operatorFlag = false;
            }
        } else if(['+', '-', '*', '/'].indexOf(buttonText) > -1) {
            if(!operatorFlag && !equalsFlag) {
                displayValue += buttonText;
                operatorFlag = true;
                equalsFlag = false;
            }
        } else {
            if(equalsFlag) {
                displayValue = '';
                equalsFlag = false;
            }
            displayValue += buttonText;
        }
        
        display.value = displayValue;
    });
});
