function ids(element){
    return document.getElementById(element)
}
function classess(element){
    return document.getElementsByClassName(element)
}

function getHistory(){
    return ids('history-value').innerText;
}

function printHistory(num){
    ids('history-value').innerText=num
}
function getOutput(){
    return ids('output-value').innerText;
}

function printOutput(num){
    if (num=="") {
        ids('output-value').innerText=num
    }else{
    ids('output-value').innerText=getNumberFormat(num)
    }
}
function getNumberFormat(num){
    if (num=="-") {
        return ""
    }
   n = Number(num)
   value = n.toLocaleString("en")
   return value
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

number = classess('number')
console.log(number)
for (let i = 0; i < number.length; i++) {
    const btn_num = number[i];
    console.log(btn_num)
    btn_num.addEventListener('click', function(){
        number_convertion = reverseNumberFormat(getOutput());
      if (number_convertion!=NaN) {
        output = number_convertion+this.id
          printOutput(output)
      }
    })
    
}

operator = classess('operator')
for (let i = 0; i < operator.length; i++) {
    const btn_opera = operator[i];
    btn_opera.addEventListener('click', function(){
        if (this.id=="clear") {
            printHistory('')
            printOutput('')
        }else if(this.id=='backspace'){
           output=reverseNumberFormat(getOutput()).toString();
           if (output) {
               output = output.substr(0,output.length-1)
               printOutput(output)
           }
        }else{
            
            output = getOutput()
            if (this.id!="") {
                output=reverseNumberFormat(output)
                added=getHistory()+output;
                if (this.id=="=") {
                    result = eval(added)
                    printOutput(result)
                    printHistory("")
                }else{
                    to_display = added+this.id
                    printHistory(to_display)
                    printOutput("")
                }
            }
        }
    })
    
}
