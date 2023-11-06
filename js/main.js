"use strict"
let equation = "";
$(".key").on("click",(e)=>{
    const regex = /.*[+-/*]{2}.*/;
    equation += e.target.value;

    if(equation.length === 25 || regex.test(equation)){
        $(".display").html("Error");
        equation = "";
    } else {
        $(".display").html(equation);
    }
});

$("#reset").on("click",()=>{

    equation = "";
    $(".display").html(equation);
});

$("#equals").on("click",(e)=>{

    $(".display").html(eval(equation));
});