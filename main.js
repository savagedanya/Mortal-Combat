const $arenas = document.querySelector('.root .arenas');
const player1 = {
    name : 'Scorpion',
    hp : 80,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = "/caracter/scorpion.gif",
    attack : function () {
        console.log(player1.name,'fight...');
    }
}
const player2 = {
    name : 'Kitana',
    hp : 10,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = "/caracter/kitana.gif",
    attack : function () {
        console.log(player2.name,'fight...');
    }
}
function createPlayer (player,character){
    const $player1 = document.createElement('div');
    $player1.className = player;

    const $progressbar =document.createElement('div');
    $progressbar.className = "progressbar";

    const $character =document.createElement('div');
    $character.className = "character";

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    

    const $life =  document.createElement('div');
    $life.className = 'life';
    $life.style.width = character.hp + "%" ;
    const $name = document.createElement('div');
    $name.className = 'name';
    $name.innerText = character.name;

    const $img = document.createElement('img');
    $img.src = character.img;    
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img)
    $arenas.appendChild($player1);
}
createPlayer('player1',player1);
createPlayer('player2',player2);

