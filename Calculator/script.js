const numZeroBtn = document.querySelector('#zero');
const numOneBtn = document.querySelector('#one');
const numTwoBtn = document.querySelector('#two');
const numThreeBtn = document.querySelector('#three');
const numFourBtn = document.querySelector('#four');
const numFiveBtn = document.querySelector('#five');
const numSixBtn = document.querySelector('#six');
const numSevenBtn = document.querySelector('#seven');
const numEightBtn = document.querySelector('#eight');
const numNineBtn = document.querySelector('#nine');
const pointBtn = document.querySelector('#point');

const changeSignBtn = document.querySelector('#changeSign');
const deleteBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#deleteAll');

const sumBtn = document.querySelector('#sum');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');

const resultOutput = document.querySelector('#result');

let numberFirt = 0;
let operator = '';

function resetAll(){
    resultOutput.textContent = '0';
    numberFirt = 0;
    operator = '';
}

function deleteLastCharacter(){
    if(resultOutput.textContent.length > 1){
        resultOutput.textContent  = resultOutput.textContent .slice(0, -1);
    } else{
        resultOutput.textContent = '0';
    }
}

function changeSign(){
    let inputNum = resultOutput.textContent;
    let regex = "-"
    if(!(inputNum.indexOf(regex) > -1)){
        resultOutput.textContent = '-' + resultOutput.textContent ;
    } else {
        resultOutput.textContent = resultOutput.textContent.slice(1);
    }
}

function addNum(num){
    if(resultOutput.textContent == '0'){
        resultOutput.textContent = `${num}`
    } else{
        resultOutput.textContent = `${resultOutput.textContent}${num}`
    }
    if((num == '0') && (resultOutput.textContent.length == 1)){
        resultOutput.textContent = '0'
    }
}

function addPoint(){
    let inputNum = resultOutput.textContent;
    let regex = "."
    if(!(inputNum.indexOf(regex) > -1)){
        resultOutput.textContent = resultOutput.textContent + '.';
    }
}

function addOperator(action, num){
    if(!(operator == '')){
        doEqual(num)
    } else{
        // numberFirt = Math.floor(num);
        numberFirt = parseFloat(num);
    }

    operator = action;
    
    resultOutput.textContent = '0';
    console.log(numberFirt);
    console.log(operator);
}

function doEqual(num){
    if(!(operator == '')){
        let result;
        if(operator == '+'){
            result = numberFirt + parseFloat(num);
        } else if(operator == '-'){
            result = numberFirt - parseFloat(num);
        } else if(operator == 'x'){
            result = numberFirt * parseFloat(num);
        } else if(operator == '/'){
            result = numberFirt / parseFloat(num);
        } 
        
        resultOutput.textContent = `${result}`;
            numberFirt = result;
            operator = '';
            console.log(num);
            console.log(numberFirt);
    }
}

numZeroBtn.addEventListener('click', () => addNum(0));
numOneBtn.addEventListener('click', () => addNum(1));
numTwoBtn.addEventListener('click', () => addNum(2));
numThreeBtn.addEventListener('click', () => addNum(3));
numFourBtn.addEventListener('click', () => addNum(4));
numFiveBtn.addEventListener('click', () => addNum(5));
numSixBtn.addEventListener('click', () => addNum(6));
numSevenBtn.addEventListener('click', () => addNum(7));
numEightBtn.addEventListener('click', () => addNum(8));
numNineBtn.addEventListener('click', () => addNum(9));

sumBtn.addEventListener('click', () => addOperator('+', resultOutput.textContent))
minusBtn.addEventListener('click', () => addOperator('-', resultOutput.textContent))
multiplyBtn.addEventListener('click', () => addOperator('x', resultOutput.textContent))
divideBtn.addEventListener('click', () => addOperator('/', resultOutput.textContent))

pointBtn.addEventListener('click', () => addPoint())
equalBtn.addEventListener('click', () => doEqual(resultOutput.textContent))

changeSignBtn.addEventListener('click', () => changeSign())
clearBtn.addEventListener('click', () => resetAll());
deleteBtn.addEventListener('click', () => deleteLastCharacter())