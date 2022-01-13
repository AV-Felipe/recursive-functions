// ELEMENTS
const inputField = document.getElementById('inputField');
const buttonCalculate = document.getElementById('calculateButton');
const displayResult = document.getElementById('resultDisplay');
const displayError = document.getElementById('errorDisplay');

// MAIN FUNCTION - função da questão 1 da atividade
function calculateFactorial(_num){
    
    const num = Number(_num);
    let result = undefined;

    if (Number.isInteger(num) && num > 0){
        calculator(num);
    }else{
        console.log('error: invalid value')
        return('error')
    }

    console.log(result)
    return(result);

    function calculator(number){
        if(number === num ){
            result = number;
        }else if(number > 0){
            result = result * number;
        }else{
            return;
        }
        calculator(--number);
    }
    
}


// INTERFACE FUNCTIONS
buttonCalculate.addEventListener('click', submitValue);

function submitValue(){
    if(inputField.value === ''){
        inputField.setAttribute('placeHolder','Digite um valor');
        return;
    }

    inputField.setAttribute('placeHolder','');
    displayError.style.display = 'none';

    const value = inputField.value;

    const result = calculateFactorial(value);

    if(Number.isInteger(result)){
        displayResult.innerText = result;
    }else{
        displayError.style.display = 'block';
    }

}