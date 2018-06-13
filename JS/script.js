function play(){
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='hidden';
    var pagina_card=document.getElementById('chooseCard');
    pagina_card.style.visibility='visible';
}

function credits(){
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='hidden';
    var pagina_credits=document.getElementById('credits');
    pagina_credits.style.visibility='visible';
}


function clicCard(){
   
        
    var pagina_card=document.getElementById('chooseCard');
    pagina_card.style.visibility='visible';
    var chooseCard2=document.getElementById('chooseCard2');
    chooseCard2.style.visibility='visible';

    
}
document.getElementById("carta").onclick = function(){
    if(document.getElementById("cartaAnim").className == "personatgeAnimat"){
        document.getElementById("cartaAnim").className = "personatgeAnimatfinal";
    }else{
        document.getElementById("cartaAnim").className= "personatgeAnimat";
    }
    }

function start(){
    var pagina_card=document.getElementById('chooseCard');
    pagina_card.style.visibility='hidden';
    var chooseCard2=document.getElementById('chooseCard2');
    chooseCard2.style.visibility='hidden';

    var VS=document.getElementById('VS');
    VS.style.visibility='visible';
}

function fight(){
    var VS=document.getElementById('VS');
    VS.style.visibility='hidden';
    var combat=document.getElementById('combat');
    combat.style.visibility='visible';
}

function win(){
    var combat=document.getElementById('combat');
    combat.style.visibility='hidden';
    var win=document.getElementById('win');
    win.style.visibility='visible';
    document.getElementById('imatgebo').style.visibility='hidden';
    document.getElementById('imatgedol').style.visibility='hidden';
    
}

function home(){
    var win=document.getElementById('win');
    win.style.visibility='hidden';
    var pagina_credits=document.getElementById('credits');
    pagina_credits.style.visibility='hidden';
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='visible';
}
function atack(){
   
        
    var atackgo=document.getElementById('attack');
    atackgo.style.visibility='hidden';
}
document.getElementById("attack").onclick = function(){
    if(document.getElementById("foc1").className == "llamarada1"){
        document.getElementById("foc1").className = "llamarada1final";
    }else{
        document.getElementById("foc1").className= "llamarada1";
    }
     if(document.getElementById("moc3").className == "vava1"){
        document.getElementById("moc3").className = "vava1final";
    }else{
        document.getElementById("moc3").className= "vava1";
    }
    if(document.getElementById("foc3").className == "focAnimat"){
        document.getElementById("foc3").className = "focAnimatfinal";
    }else{
        document.getElementById("foc3").className= "focAnimat";
    }
    if(document.getElementById("moc1").className == "mocAnimat"){
        document.getElementById("moc1").className = "mocAnimatfinal";
    }else{
        document.getElementById("moc1").className= "mocAnimat";
    }
    if(document.getElementById("vidaEnemic").className == "vidadudley"){
        document.getElementById("vidaEnemic").className = "vidadudleyfinal";
    }else{
        document.getElementById("vidaEnemic").className= "vidadudley";
    }
    if(document.getElementById("vidaDrake").className == "vidadrake1"){
        document.getElementById("vidaDrake").className = "vidadrake1final";
    }else{
        document.getElementById("vidaDrake").className= "vidadrake1";
    }
    if(document.getElementById("vidaDrakeMenysmenys").className == "vidadrake2"){
        document.getElementById("vidaDrakeMenysmenys").className = "vidadrake2final";
    }else{
        document.getElementById("vidaDrakeMenysmenys").className= "vidadrake2";
    }
    if(document.getElementById("vidaEnemicMort").className == "vidadudley2"){
        document.getElementById("vidaEnemicMort").className = "vidadudley2final";
    }else{
        document.getElementById("vidaEnemicMort").className= "vidadudley2";
    }
    if(document.getElementById("flecha").className == "passar"){
        document.getElementById("flecha").className = "passarfinal";
    }else{
        document.getElementById("flecha").className= "passar";
    }
    if(document.getElementById("attack").className == "hidenatack"){
        document.getElementById("attack").className = "hidenatackfinal";
    }else{
        document.getElementById("attack").className= "hidenatack";
    }
    }

