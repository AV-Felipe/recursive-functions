// ELEMENTS
const inputField = document.getElementById('inputField');
const buttonCalculate = document.getElementById('logButton');
const displayResult = document.getElementById('resultDisplay');
const displayError = document.getElementById('errorDisplay');


// MAIN FUNCTION - função da questão 2 da atividade
function logArray(_array){
    const inputObject = _array;

    if(Array.isArray(inputObject)){

        const arrayLength = inputObject.length;
        let index = 0;

        if(arrayLength > 0){
            logElements(inputObject);
            return('ok')
        }else{
            console.log('empty array');
            return('ok');
        }

        function logElements(arrayObject){
            console.log(inputObject[index]);
            if(index < (arrayLength - 1)){
                index++;
                logElements(inputObject);
            }else{
                return;
            }
        }
        
    }else{
        console.log('error: input is not an array')
        return ('error')
    }

}

// INTERFACE FUNCTIONs
buttonCalculate.addEventListener('click', submitValue);

function submitValue(){

    displayError.style.display = 'none';

    if(inputField.value !== ""){
        const arrayValues = inputField.value;
        const inputedArray = arrayValues.split(' ');

        console.log(inputedArray);

        logArray(inputedArray);
    }else{
        displayError.style.display = 'block';
    }
    
}

