const $arenas = document.querySelector('.root .arenas');
const $button = document.querySelector('.button');
const player1 = {
    name : 'Scorpion',
    hp : 100,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = "/caracter/scorpion.gif",
    player : 1,
    attack : function () {
        console.log(player1.name,'fight...');
    }
}
const player2 = {
    name : 'Kitana',
    hp : 100,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = "/caracter/kitana.gif",
    player : 2,
    attack : function () {
        console.log(player2.name,'fight...');
    }
}
function createElement (tag, className){
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag
}
function createPlayer (character){
    const $player = createElement('div',"player" + character.player);

    const $progressbar = createElement('div', 'progressbar');

    const $character = createElement('div', 'character');

    const $life =  createElement('div','life');

    const $name = createElement('div','name');

    const $img = document.createElement('img');


    
    $life.style.width = character.hp + "%" ;
    $name.innerText = character.name;
    $img.src = character.img; 

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img)
    $player.appendChild($progressbar);
    $player.appendChild($character);
    return $player
}
function randomHp(){
    const $hp = Math.ceil(Math.random()* 20);
    return $hp
}
function changeHp(character, random){
    const $playerLife = document.querySelector(`.player${character.player} .life`);
    character.hp -= random;
    if (character.hp <= random) {
        character.hp = 0;
        if (character.player == 1){
        $arenas.appendChild(playerWins(player2.name));           
        }else{
            $arenas.appendChild(playerWins(player1.name));
        }
        $button.disabled = true;
    }
    $playerLife.style.width = character.hp + '%';
}
function playerWins(name) {
    const $winsTitle = createElement('div','winsTitle');
    $winsTitle.innerText = name + " Wins";
    return $winsTitle
}
$button.addEventListener('click',function(){
    changeHp(player2,randomHp());
    changeHp(player1,randomHp());
})
$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
