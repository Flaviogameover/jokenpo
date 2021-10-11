var player_options = document.querySelectorAll(".player-options > div > img");
var enemy_options = document.querySelectorAll(".enemy-options > div > img");
var player_choice = '';
var enemy_choice = '';
var player_points = 0;
var enemy_points = 0;
var player_victory = 0;
var enemy_victory = 0;

var rounds = 3;

document.getElementById("rounds").innerText = "Melhor de "+rounds;

player_options.forEach((value)=>{
    value.addEventListener("click",(callback)=>{
        reset_opacity(player_options);
        value.style.opacity = 1;
        //player_choice = value.attributes.choice.value; ou
        player_choice = value.getAttribute("choice");
        enemy_play();
        match_start();
    });
});

const reset_opacity = (options) =>{
    options.forEach((value)=>{
        value.style.opacity = 0.3;
    });
}

const enemy_play = () =>{
    let rand = Math.floor(Math.random() * 3);
    reset_opacity(enemy_options);
    enemy_options[rand].style.opacity = 1;
    enemy_choice = enemy_options[rand].getAttribute("choice");
}

const match_start = () =>{
    let pontos = document.getElementById("pontos");
    let result = document.getElementById("result");
    if(player_choice == "rock" && enemy_choice == "rock"){
        result.innerText = "Empate!";
    }else if(player_choice == "paper" && enemy_choice == "rock"){
        result.innerText = "Você ganhou!";
        player_points++;
    }else if(player_choice == "scissor" && enemy_choice == "rock"){
        result.innerText = "Você perdeu!";
        enemy_points++;
    }
    
    else if(player_choice == "rock" && enemy_choice == "paper"){
        result.innerText = "Você perdeu!";
        enemy_points++;
    }else if(player_choice == "paper" && enemy_choice == "paper"){
        result.innerText = "Empate!";
    }else if(player_choice == "scissor" && enemy_choice == "paper"){
        result.innerText = "Você ganhou!";
        player_points++;
    }

    else if(player_choice == "rock" && enemy_choice == "scissor"){
        result.innerText = "Você ganhou!";
        player_points++;
    }else if(player_choice == "paper" && enemy_choice == "scissor"){
        result.innerText = "Você perdeu!";
        enemy_points++;
    }else if(player_choice == "scissor" && enemy_choice == "scissor"){
        result.innerText = "Empate!";
    }

    pontos.innerText = `${player_points} X ${enemy_points}`;
    if (player_points >= rounds || enemy_points >= rounds){
        game_over(pontos);
    }

}

const game_over = (pontos) => {
    let vitorias = document.getElementById("vitorias");
    if (player_points >= rounds){
        player_points = 0;
        enemy_points = 0;
        player_victory++;
    }else{
        player_points = 0;
        enemy_points = 0;
        enemy_victory++;
    }
    pontos.innerText = `${player_points} X ${enemy_points}`;
    vitorias.innerText = `${player_victory} X ${enemy_victory}`;
}