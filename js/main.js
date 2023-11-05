"use strict"
//TODO   need to work on edge cases like a user trying to input more than one arithmetic symbol
let equation = "";
$(".key").on("click",(e)=>{

    equation += e.target.value;
    if(equation.length === 25) {
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