var num =23;
var_two=2;


var sum = num + num_two;
console.log("sum",sum);


var num_three =40;
var num_four =4;

var num_two =num_three + num_four;
console.log =("sum", sum);

// functions 
function summation(){
    var num_five=40;

    var num_six=6;

    var sum_three = num_five + num +num_six;
    console.log("sum_three:", sum_three);
}

//return funtion
function summation_two(){
    var num_five=40;
    var num_six=43;

    var sum_three=num_five+num_six;
    return sum_three;
}

//use it by printing the value  drectly on the terminal
console.log("sum_four:",summation_two());

// assigning the value of a varriable
var sum_four=summation_two();

var sum_four= summation();
console.log(sum_five);

//function with parameters
function summation_three(num_five,num_six){
    var sum_six=num_five+num_six;

    console.log("sum six:",sum_six);
}

summation_three(40,4);
summation_three(100,2);
summation_three(100000,56);

//returning function with parameters
function summation_four(num_five,num_six){
    return num_five+num_six;;
}

// use it by printin the value directly on the terminal
console.log("sum_five:",summation_four(23,5));

//assigning the value to variable
var sum_five=summation_four(263,58);

// asking user name
function greetuser(){
    let name = prompt("please enter your name");
    return("Gyebaleko mukulu",greetuser +"?");
}

// printing the function
console.log();


// function that accepts the selling price , cost pice , and number of units sold
function maize_flour(){
    let S_P=prompt("Please enter selling price");
    let C_P= prompt("Please enter cost price");
    let N_UNITS=prompt("Please enter number of units sold");
    return("Profit=",S_P-C_P*N_UNITS);
}

// PRINTING THE PROFIT
console.log();