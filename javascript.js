var signeUser;
var signeIA;
var aleatoire;
var username;
var userWin = 0;
var IAWin = 0;
var addManche;

//Changer nom utilisateur

function gamertag() {

    username = prompt("Please enter your name");
    document.getElementById("gamertag").innerHTML = username;
}

function modifyGamertag() {
    username = prompt("Please enter your name");
    document.getElementById("gamertag").innerHTML = username;

}

//Modifier le compteur de manches

function changeMancheCompteur() {
    addManche = document.getElementById("manche_compteur").innerHTML;
    if (addManche < 3) {
        addManche++;
        document.getElementById("manche_compteur").innerHTML = addManche;
    }
    else if (addManche == 3) {
        addManche = 0;
        document.getElementById("manche_compteur").innerHTML = addManche;
    }
}

//Modifier le score de manche

function afficherScore() {
    document.getElementById("manche_score__utilisateur").innerHTML = userWin;
    document.getElementById("manche_score__ordinateur").innerHTML = IAWin;
}

//Choisir un signe aléatoire pour l'ordinateur

function changeImageIA() {

    var aleatoire = Math.floor((Math.random() * 3) + 1);
    if (aleatoire == 1) {
        document.getElementById("ordinateur_signe").src = "images/rock.svg";
        signeIA = "pierre";
    }
    else if (aleatoire == 2) {
        document.getElementById("ordinateur_signe").src = "images/paper.svg";
        signeIA = "feuille";
    }
    else if (aleatoire == 3) {
        document.getElementById("ordinateur_signe").src = "images/scissors.svg";
        signeIA = "ciseaux";
    }

}

//Choisir son signe

function changeImageRock() {

    if (document.getElementById("utilisateur_signe").src = "images/uncertainty.svg") {
        document.getElementById("utilisateur_signe").src = "images/rock.svg";
        signeUser = "pierre";
    }
    else {
        document.getElementById("utilisateur_signe").src = "images/uncertainty.svg";
    }
}

function changeImagePaper() {

    if (document.getElementById("utilisateur_signe").src = "images/uncertainty.svg") {
        document.getElementById("utilisateur_signe").src = "images/paper.svg";
        signeUser = "feuille";
    }
    else {
        document.getElementById("utilisateur_signe").src = "images/uncertainty.svg";
    }
}

function changeImageScissors() {

    if (document.getElementById("utilisateur_signe").src = "images/uncertainty.svg") {
        document.getElementById("utilisateur_signe").src = "images/scissors.svg";
        signeUser = "ciseaux";
    }
    else {
        document.getElementById("utilisateur_signe").src = "images/uncertainty.svg";
    }

}


//Modifier le compteur de score//

function modifierScore1() {

    if (signeUser == "pierre" && signeIA == "ciseaux") {
        document.getElementById("score1-utilisateur").style.background = "#008000";
        document.getElementById("score1-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "feuille" && signeIA == "pierre") {
        document.getElementById("score1-utilisateur").style.background = "#008000";
        document.getElementById("score1-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "ciseaux" && signeIA == "feuille") {
        document.getElementById("score1-utilisateur").style.background = "#008000";
        document.getElementById("score1-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == signeIA) {
        document.getElementById("score1-utilisateur").style.background = "white";
        document.getElementById("score1-ordinateur").style.background = "white";
    }
    else {
        document.getElementById("score1-utilisateur").style.background = "#b60202";
        document.getElementById("score1-ordinateur").style.background = "#008000";
        IAWin++;
    }
}

function modifierScore2() {

    if (signeUser == "pierre" && signeIA == "ciseaux") {
        document.getElementById("score2-utilisateur").style.background = "#008000";
        document.getElementById("score2-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "feuille" && signeIA == "pierre") {
        document.getElementById("score2-utilisateur").style.background = "#008000";
        document.getElementById("score2-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "ciseaux" && signeIA == "feuille") {
        document.getElementById("score2-utilisateur").style.background = "#008000";
        document.getElementById("score2-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == signeIA) {
        document.getElementById("score2-utilisateur").style.background = "white";
        document.getElementById("score2-ordinateur").style.background = "white";
    }
    else {
        document.getElementById("score2-utilisateur").style.background = "#b60202";
        document.getElementById("score2-ordinateur").style.background = "#008000";
        IAWin++;
    }
}

function modifierScore3() {

    if (signeUser == "pierre" && signeIA == "ciseaux") {
        document.getElementById("score3-utilisateur").style.background = "#008000";
        document.getElementById("score3-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "feuille" && signeIA == "pierre") {
        document.getElementById("score3-utilisateur").style.background = "#008000";
        document.getElementById("score3-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == "ciseaux" && signeIA == "feuille") {
        document.getElementById("score3-utilisateur").style.background = "#008000";
        document.getElementById("score3-ordinateur").style.background = "#b60202";
        userWin++;
    }
    else if (signeUser == signeIA) {
        document.getElementById("score3-utilisateur").style.background = "white";
        document.getElementById("score3-ordinateur").style.background = "white";
    }
    else {
        document.getElementById("score3-utilisateur").style.background = "#b60202";
        document.getElementById("score3-ordinateur").style.background = "#008000";
        IAWin++;
    }
}

function modifierScore() {
    if (addManche == 1) {
        modifierScore1();
    }
    else if (addManche == 2) {
        modifierScore2();
    }
    else if (addManche == 3) {
        modifierScore3();
    }
}

//Afficher le gagnant de la partie

function gagnantPartie() {
    if (addManche == 3 && userWin > IAWin) {
        alert("Vous avez gagné ! Cliquer sur le bouton rejouer");
    }
    else if (addManche == 3 && userWin < IAWin) {
        alert("Vous avez perdu ! Cliquer sur le bouton rejouer");
    }
    else if (addManche == 3) {
        alert("égalité ! Cliquer sur le bouton rejouer");
    }
}

//Reinitialiser le duel automatiquement

function resetGame() {
    if (addManche == 0) {
        document.getElementById("score1-utilisateur").style.background = "black";
        document.getElementById("score1-ordinateur").style.background = "black";
        document.getElementById("score2-utilisateur").style.background = "black";
        document.getElementById("score2-ordinateur").style.background = "black";
        document.getElementById("score3-utilisateur").style.background = "black";
        document.getElementById("score3-ordinateur").style.background = "black";
        userWin = 0;
        IAWin = 0;
    }
}

//Recommencer la partie manuellement

function restartGame() {
    document.getElementById("score1-utilisateur").style.background = "black";
    document.getElementById("score1-ordinateur").style.background = "black";
    document.getElementById("score2-utilisateur").style.background = "black";
    document.getElementById("score2-ordinateur").style.background = "black";
    document.getElementById("score3-utilisateur").style.background = "black";
    document.getElementById("score3-ordinateur").style.background = "black";
    userWin = 0;
    document.getElementById("manche_score__utilisateur").innerHTML = userWin;
    IAWin = 0;
    document.getElementById("manche_score__ordinateur").innerHTML = IAWin;
    addManche = 0;
    document.getElementById("manche_compteur").innerHTML = addManche
}

//Animation de fin de duel

function endOfGame() {
    if (addManche == 3 && userWin > IAWin) {
        document.getElementById("utilisateur_signe").src = "images/trophy-cup.svg";
        document.getElementById("ordinateur_signe").src = "images/screaming.svg";
    }
    else if (addManche == 3 && userWin < IAWin) {
        document.getElementById("utilisateur_signe").src = "images/screaming.svg";
        document.getElementById("ordinateur_signe").src = "images/trophy-cup.svg";
    }
    else if(addManche == 3){
        document.getElementById("utilisateur_signe").src = "images/cycle.svg";
        document.getElementById("ordinateur_signe").src = "images/cycle.svg";
    }
}