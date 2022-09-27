const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const outPut = document.querySelector('.input')
const buttons = document.querySelectorAll('.grid-button')
let input1 
let input2 
let result
let outputText = ''

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let result
        let input3
       
        let buttonText = button.innerText
        
        outputText += buttonText
        if (outputText.slice(-1) == 0 && (outputText.charAt(0) == 0)){ outputText =  outputText.substring(1)
            buttonText =  buttonText.substring(1)
        }
       console.log(outputText.slice(-1))
        if (buttonText === 'C') {
            outPut.innerText = ''
            input1 = null
            input2 = null
            outputText = ''

        } else if (!(isNaN(buttonText)) && outPut.innerText.length < 16 || (buttonText==='.' && outPut.innerText.length < 19)) {
            outPut.innerText += buttonText
        }
        
        if (!(isNaN(input1)) && !(isNaN(input2)) && outPut.innerText.length < 6) {
            input2 += buttonText;
            console.log("input21: " + input2)
            input3 = parseFloat(input2); 
            console.log("input3: " + input3)
        }

        if(!isNaN(input1) && isNaN(input2)){  
            input2 = buttonText;
            console.log("input2: " + input2)
        }
    
        if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/'){
            input1 = parseFloat(outPut.innerText);
            outPut.innerText = '';
        }

        if(input1 && input3 ){ 
            if(outputText.includes('+')){
                result = input1 + input3}
            else if(outputText.includes('-')){
                result = input1 - input3}
            else if(outputText.includes('*')){
                result = input1 * input3}
            else if(outputText.includes('/')){
                result = input1 / input3}
        }

        if(buttonText === '=' && !isNaN(result)) { 
        outPut.innerText = result
        input1 = null
        input2 = null 
        outputText = null
        } else if (buttonText === '=' && isNaN(result)) {
            // outPut.innerText = 'SOMETHING MISSING'
            outPut.innerText = 'Missing input'  
        }
    })
})

