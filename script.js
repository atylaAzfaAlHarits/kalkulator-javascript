let result = document.getElementById('result');

function clearResult(){
    result.textContent = '0';
}

function appendValue(number){
    if(result.textContent === '0'){
        result.textContent = number;
    } else if(result.textContent.length < 13){
        result.textContent += number;
    }
}

function appendOperator(operator){
    result.textContent += operator;
}

function calculateResult(){
    let expression = result.textContent;
    let calculatedResult = eval(expression);
    result.textContent = calculatedResult;
}