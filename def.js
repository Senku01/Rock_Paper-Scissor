let userscore= 0;
let compscore=0;
const user_score_span= document.getElementById("user-score");
const comp_score_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock = document.getElementById("o");
const paper = document.getElementById("p");
const sciccor = document.getElementById("s");

function getComputerchoise() {
    const choise = ['r','p','s'];
    const random =Math.floor(Math.random()*3);
    return choise[random];
}


function converttoword(letter){
    if(letter=="r") return"Rock"
    else if(letter=="p") return "Paper"
    else return"Scissors" 
}

function win(userChoise,computerchoise){
    userscore++;
    user_score_span.innerHTML= userscore;
    comp_score_span .innerHTML= compscore;
    const smalluserword = "user".fontsize(4).sub();
    const smallcompword = "comp".fontsize(4).sub();
    result_div.innerHTML= `${smalluserword} ${converttoword(userChoise)}  Beats  ${smallcompword} ${converttoword(computerchoise)}  You Win `

}
function lose(userChoise,computerchoise){
    compscore++;
    user_score_span.innerHTML= userscore;
    comp_score_span .innerHTML= compscore;
    const smalluserword = "user".fontsize(4).sub();
    const smallcompword = "comp".fontsize(4).sub();
    result_div.innerHTML= `${smalluserword} ${converttoword(userChoise)}  Lost To  ${smallcompword} ${converttoword(computerchoise)}  You Lose....!!!!! `

}
function draw(userChoise,computerchoise){
    const smalluserword = "user".fontsize(4).sub();
    const smallcompword = "comp".fontsize(4).sub();
    result_div.innerHTML= `${smalluserword} ${converttoword(userChoise)}  ITs Equal  ${smallcompword} ${converttoword(computerchoise)} ITs An Draw `
}



function game(userChoise) {
    const computerchoise = getComputerchoise();
    switch(userChoise+computerchoise)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise,computerchoise);
            break;

        case "rp":
        case "pr":
        case "sr":
            lose(userChoise,computerchoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise,computerchoise);
            break;
    }
}

 
function main() {
    paper.addEventListener("click",function(){
        game("p");
    })

    sciccor.addEventListener("click", function(){
        game("s");
    })


    rock.addEventListener("click",function(){
        game("r");
    })

}

main();


