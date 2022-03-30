const axios = require('axios')
const prompt = require('prompt-sync')();
    

const calculate = async (operator, firstNum, secondNum) => {
    try {
        const response = await axios.get(`http://localhost:8099/calculate?firstNum=${firstNum}&secondNum=${secondNum}&operator=${operator}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const calc = async (operator, firstNum, secondNum) => {
    try {
        const body = {
            operator: operator,
            firstNum: firstNum,
            secondNum: secondNum
        }
        const response = await axios.post(`http://localhost:8099/calc`, body);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const main = async () => {
    try {
        while(1) {
            const firstNum = prompt('Enter first number:');
            const secondNum = prompt('Enter second number:');
            const operator = prompt('Enter operator:');
            const result = await calc(operator, firstNum, secondNum);
            console.log(result);
            const ctn = prompt('Continue (y|n):');
            if (ctn != "y") {
                break;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

main();