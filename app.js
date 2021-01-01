// work on calculator
function insert(num){
    document.calculator.calc.value +=num; 
}
function clean(){
    document.calculator.calc.value = "";
}
function back(){
    let backspace = document.calculator.calc.value;
    let wbc = document.calculator.calc.value = backspace.substring(0,backspace.length-1);
    return wbc;
}
// Generate Random Password
function generatePin(){
    
    let random = Math.random() * 9999;
    if (random>1000){
    let randomNumber = Math.round(random);
    document.getElementById("show-random-pin").value = randomNumber;
    }
    
}
// submit button
function submitBtn(){
    const calcMonitor = document.getElementById("calc-display").value;
    const generatedRandomNumber = document.getElementById("show-random-pin").value;

    if (calcMonitor == generatedRandomNumber){
        const matched = document.getElementById("matched");
        matched.style.display ="block";
    }
    if(calcMonitor != generatedRandomNumber){
        const unmatched = document.getElementById("unmatched");
        unmatched.style.display = "block";
    }
    
    document.getElementById("calc-display").value = "";
    document.getElementById("show-random-pin").value = "";
}
