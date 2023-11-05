"use strict"
//TODO   need to work fix edge cases like a user trying to input more than one arithmetic symbol
let equation = "";
$(".key").on("click",(e)=>{

    equation += e.target.value;

    $(".display").html(equation);
});

$("#reset").on("click",()=>{

    equation = "";
    $(".display").html(equation);
});

$("#equals").on("click",(e)=>{

    $(".display").html(eval(equation));
});