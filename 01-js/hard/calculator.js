/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

   constructor( res = 0 ){
    this.res = res; 
   }

   add(num){
    this.res += num;
   }

   subtract(num){
    this.res -= num;
   }

   multiply(num){
     this.res = this.res*num;
   }

   divide(num){
    if(num == 0){
      throw new Error("Division by zero");
    }
     this.res= this.res/num;
   }

   clear(){
    this.res = 0;
   }

   getResult(){
    return this.res;
   }

   precedence(operator){
    if(operator == '*' || operator == '/'){
       return 2;
    }

    else if(operator == '+' || operator == '-'){
      return 1;
    }

    else {
      return -1;
    }

   }

 // was trying to convert the infix to postfix and then solve but later found a better way on internet  
//    calculate(expression){
//     expression = expression
//                  .split(' ')
//                  .join('')

//     console.log(expression);
//    const n = expression.length ;
//    let result = [];
//    let st = [];
//    let temp = "";
//    for(let i = 0; i < n; i++){
     
//     if( (expression[i] >= 'a' && expression[i] <= 'z') || (expression[i] >= 'A' && expression[i] <= 'Z')){
//         throw new Error("Invalid input");
//     }


//     if (expression[i] == '('){
//       st.push(expression[i]);
//     }

//     else if(expression[i] == ')'){
//       if(temp != ""){
//         result.push(temp);
//         temp = "";
//       }
   
//       while(st[st.length-1] != '('){
//         result.push(st[st.length-1]);
//         st.pop();
//       }
//       st.pop();
//     }

//    else if(expression[i] >= '0' && expression[i] <= '9'){
//       temp += expression[i];
//     }
//     else {
//       if(temp != ""){
//         result.push(temp);
//         temp = "";
//       }
     
//       while(st.length > 0 && this.precedence(expression[i]) <= this.precedence(st[st.length-1]) &&  st[st.length-1] != '('){  
//         result.push(st[st.length-1]);
//         st.pop();
//       }
//       st.push(expression[i]);
//     }
    
//     // console.log(i + "->" + st);
//     // console.log(result);
//    }
  
//    result.push(temp);
//    while(st.length > 0){
//     result.push(st[st.length-1]);
//     st.pop();
//   }
 
//   console.log(result);
//   let m = result.length;


//   for(let i = 0 ; i < m ;i++){
//     if(result[i] == '*' || result[i] == '/' || result[i] == '+' || result[i] == '-'){
//       const a = st.pop();
//       const b = st.pop();
//       let ans = 0;

//      if(result[i] == '*'){
//       ans += a*b;
//      }

//      if(result[i] == '/'){
//       ans += b/a;
//      }

//      if(result[i] == '+'){
    
//       ans += a+b;
//      }

//      if(result == '-'){
//       ans += a-b;
//      }

//      st.push(ans);
//     }

//    else{
//     const x = Number(result[i]);
//     st.push(x);
//     // console.log(i + "->"+x);
  
//    }

//   // console.log(i + "->" + st);
//   }

//   this.res = st.pop();
//   return this.res;
//   }


calculate(expression){
  expression = expression
               .split(' ')
               .join('')

    // console.log(expression);
   
    this.res = eval(expression);
  //  console.log(this.res);
    if(this.res === Infinity){
      throw new Error("Division by zero");
    }
  
     return this.res;
  
}
}


   

module.exports = Calculator;
