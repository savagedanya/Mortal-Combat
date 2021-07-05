const $arenas = document.querySelector('.arenas');
const player1 = {
    name : 'Scorpion',
    hp : 80,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = ("/caracter/scorpion.gif"),
    attack : function () {
        console.log(player1.name,'fight...');
    }
}
const player2 = {
    name : 'Kitana',
    hp : 50,
    img : '',
    weapon : ['glock','katana','knife'],
    img : src = ("/caracter/kitana.gif"),
    attack : function () {
        console.log(player2.name,'fight...');
    }
}
player1.attack()
function createPlayer (playerId,playerName,hp,imgHero) {
    const $player1 = document.createElement('div');
    $player1.className = playerId;

    const $progressbar =document.createElement('div');
    $progressbar.className = "progressbar";

    const $character =document.createElement('div');
    $character.className = "character";

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    
    

    const $life =  document.createElement('div');
    $life.className = 'life';
    $life.innerHTML = hp;
    const $name = document.createElement('div');
    $name.className = 'name';
    $name.innerHTML = playerName;

    const $img = document.createElement('img');
    $img.src = imgHero;    
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img)
    $arenas.appendChild($player1);
    console.log($player1);
}
createPlayer('player1',player1['name'],player1['hp'],player1["img"]);
createPlayer('player2',player2['name'],player2['hp'],player2["img"])
