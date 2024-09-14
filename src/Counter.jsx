import React, { useState } from "react";
let arr=[["0","full"],["1/6","5/6"],["1/5","4/5"],["1/4","3/4"],["1/3","2/3"],
["2/5","3/5"],["1/2","1/2"],["3/5","2/5"],["2/3","1/3"],["3/4","1/4"],["4/5","1/5"],["5/6","1/6"],["full","0"]]

var b1="1/6".toString();
var b2="5/6".toString();

const Counter=()=>{
    const [score,setScore]=useState(1);
   
   

    const increase_score=()=>{
        if(score>=arr.length){
            alert("you won")
            setScore(0);
        }
        else{

            b1=arr[score][0].toString();
            b2=arr[score][1].toString();   

            console.log(b1,b2);
            setScore(score+1);
        }
    }
    const decs_score=()=>{
        b1=arr[score][0];
        b2=arr[score][1];

        if(score>=1){
            setScore(score-1);
        }
        else{
            alert("your score is less than zero you cannont decrease more!!")
        }
    }

    
    return(
    <div className="h-full flex-col">
       <h1 className="text-3xl font-medium h-1/4 flex justify-center items-center">Your Score is {score}</h1>
       <div className="h-3/4 bg-slate-600 flex">
            <div className={"h-full bg-blue-950 w-"+b1+" flex justify-center items-center"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={increase_score}>Team 1 {b1}</button>
            </div>
            <div className={"bg-red-950 h-full w-"+b2+" flex justify-center items-center"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={decs_score}>Team 2 {b2}</button>
            </div>
       </div>
    </div>
    );
}

export default Counter;