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
}

function home(){
    var win=document.getElementById('win');
    win.style.visibility='hidden';
    var pagina_credits=document.getElementById('credits');
    pagina_credits.style.visibility='hidden';
    var paginaportada=document.getElementById('portada');
    paginaportada.style.visibility='visible';
}
