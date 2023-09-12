const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYG";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberCase = '123456789';
const symbolCase = "!@#$%^&*()_+/";


//selectors 
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (Password = "") => {
    if(upperInput.checked){
        Password += getRandomData(upperCase);
    }
    if(lowerInput.checked){
        Password += getRandomData(lowerCase);
    }
    if(numberInput.checked){
        Password += getRandomData(numberCase);
    }
    if(symbolInput.checked){
        Password += getRandomData(symbolCase);
    }
    if(Password.length < totalChar.value) {
        return generatePassword(Password);
    }
    passBox.innerText = truncateString(Password,totalChar.value);
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",function (){
        generatePassword();
    }
)

function truncateString(str,num) {
    if(str.length > num ){
        let subStr = str. substring(0,num);
        return subStr;
    } else{
        return str;
    }
}

function factorial (n){
    if (n==0 || n===1){    
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(12));