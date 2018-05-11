$(function(){
var general={
    donut: 0,
generateur: 0,
generateurachete : 0
}
 //on met à jour toutes les 5secondes
 setInterval(function(){
     ajour();
 },1000);

 function ajour(){
    donutajour();
    generateurajour();
    generateurreqajour();
}
function ajoutdon(){
    ++general.donut;
}
function ajoutgenerateur(){
    var nbrereq = 30 + general.generateurachete * 10;
    if(general.donut>=nbrereq){
        ++general.generateur;
        ++general.generateurachete;
        general.donut-=nbrereq;
    }
}
function donutajour(){
    general.donut+=general.generateur;
    $("#nbredonut").text(general.donut);
}
function generateurreqajour(){
    $("#nbregenerateurreq").text(30 + general.generateurachete * 10);
    }
function generateurajour(){
    general.generateur=general.generateurachete;
    $("#nbregenerateur").text(general.generateur);
}

$("#donut").click(function(){
    ajoutdon();
})

$("#generateur").click(function(){
    ajoutgenerateur();
})

 });