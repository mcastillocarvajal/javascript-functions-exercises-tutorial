function rapid(x){
    let newStr = x.replace(/[aeiouAEIOU]/g,"");
    upperCaseNewStr = newStr.toUpperCase();
    return upperCaseNewStr;
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));