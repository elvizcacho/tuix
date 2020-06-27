

function addition(num1,num2){
    
    return num1 + num2
}

function subtraction(num1,num2){
    
    return num1 - num2
}

function multiplication(num1,num2){
    
    return num1 * num2
}

function division(num1,num2){
    
    return num1 / num2
}




function calculator(num1,num2,fn) {

    return fn(num1,num2)
}

console.log(calculator(2,3,division))




/* 
function addition(){
      a=Number;  
      b=Number; 
      c=a+b;
    }

--------------------------

function addition(a,b){  
  
    return a + b
  }
  
  function calculator(a,b,fn) {
      
    return addition(a,b)
  }
  
  console.log(calculator(2,3,addition))
*/