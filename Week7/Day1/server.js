function addOperator(x,y){
    let sum=x+y;
    console.log(sum);
}

function divideOperator(x,y){
    let quotient=x/y;
    console.log(quotient);
}

module.exports={
    addOperator: addOperator,
    divideOperator: divideOperator,
}