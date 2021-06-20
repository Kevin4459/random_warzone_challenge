let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let titleOne = document.getElementById('titleOne');
let discriptionOne = document.getElementById('discriptionOne');
let titleTwo = document.getElementById('titleTwo');
let discriptionTwo = document.getElementById('discriptionTwo');
let titleThree = document.getElementById('titleThree');
let discriptionThree = document.getElementById('discriptionThree');
let counter = 1;
let number = [0,1,2,3,4,5,6];
let x;

function random(items){
    return items[Math.floor(Math.random()*items.length)];
}

let MacMuzzle = ["Muzzle Brake", "Flashguard", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"];
let MacBarrel = ["5.3 Extended", "6.5 Cavalry Lancer", "6.1 Reinforced Heavy", "5.3 Ranger", "6.5 Rifled", "5.9 Task Force"];
let MacUnderbarrel = ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"];
let MacMagazine = ["43 Rnd Drum", "Fast Mag", "43 Rnd Speed Mag", "STANAG 53 Rnd Drum", "Vandal Speed Loader", "Salvo 53 Rnd Fast Mag"];
let MacStock = ["Tactical Stock","Wire Stock","Duster Stock","No Stock","SAS Combat Stock","Raider Stock"];

let challanges = [
    {"challange": "one chest", "discription" : "you can only open one chest and only use weapons you get from that one chest"},
    {"challange": "knife only", "discription" : "you are only allowed to use a knife and nothing else"},
    {"challange": "quarantine", "discription" : "you can only stay indoors, you cannot go outside"},
    {"challange": "hot drop", "discription" : "you must land hot drop"},
    {"challange": "snipers only", "discription" : "you must only use a sniper/snipers, marksman rifles dont count and your allowedto use custom classes."},
    {"challange": "pistol only", "discription" : "you must only use a pistol, machine pistols are allowed and you are allowed to use a custom class"},
    {"challange": "random attatchments Mac", "discription" : `you must run a mac 10 with a ${random(MacMuzzle)}, ${random(MacBarrel)}, ${random(MacUnderbarrel)}, ${random(MacMagazine)}, and ${random(MacStock)}`}
];

function giveChallange(){

    if(counter == 1){
        one.style.display = 'inline';
        two.style.display = 'none';
        three.style.display = 'none';
        counter++;
        x = random(number);

        titleOne.innerHTML = `player 1 must do the "${challanges[x].challange}" challenge`;
        discriptionOne.innerHTML = challanges[x].discription;
    }else if(counter == 2){
        two.style.display = 'inline';
        counter++;
        x = random(number);

        titleTwo.innerHTML = `player 2 must do the "${challanges[x].challange}" challenge`;
        discriptionTwo.innerHTML = challanges[x].discription;

    }else if(counter == 3){
        three.style.display = 'inline';
        counter = 1;
        x = random(number);

        titleThree.innerHTML = `player 3 must do the "${challanges[x].challange}" challenge`;
        discriptionThree.innerHTML = challanges[x].discription;

    }
}