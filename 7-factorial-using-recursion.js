const limit = 5;
console.log(factorial(limit));
function factorial(limit){
    if(limit === 1)
    return 1;
return limit * factorial(limit - 1);
}