let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");


const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}
const drawGame=()=>{
    //console.log("Game was a Draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="black";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        //console.log("YOU WON");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        //console.log("YOU LOSE");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor="red"

    }

}
const playGame=(userChoice)=>{
    //console.log("user choice is:",userChoice);
    const compChoice= genCompChoice();
    //console.log("computer choice is:",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper"){
            userWin=compChoice==="Scissor"?false:true;
        }
        else{
            userWin=compChoice==="Rock"?false:true;

        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});