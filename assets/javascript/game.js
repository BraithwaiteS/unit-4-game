var randomNumber = []
var bob = []
var playersScore = 0

$(document).ready(function(){


    function init() {

        var randomNumber = Math.floor(Math.random() * 20);
        document.getElementById("randomNumber").innerHTML = "" + randomNumber
        console.log(randomNumber);
        
        playersScore = 0;
        $('#playersNum').text(playersScore)
        
        var bob = Math.floor(Math.random() * 10)
        $("#bob").click(function(){
            document.getElementById("bob").innerHTML = "#playersNum" + bob
            console.log(bob)
            playersScore = playersScore + bob
            $('#playersNum').text(playersScore)
        });

       var linda = Math.floor(Math.random() * 10)
        $("#linda").click(function(){
            document.getElementById("linda").innerHTML = "#playersNum" + linda
            console.log(linda)
            playersScore = playersScore + linda
            $('#playersNum').text(playersScore)
        });

        var tina = Math.floor(Math.random() * 10)
        $("#tina").click(function(){
            document.getElementById("tina").innerHTML = "#playersNum" + tina
            console.log(tina)
            playersScore = playersScore + tina
            $('#playersNum').text(playersScore)
        });

        var louise = Math.floor(Math.random() * 10)
        $("#louise").click(function(){
            document.getElementById("louise").innerHTML = "#playersNum" + louise
            console.log(louise)
            playersScore = playersScore + louise
            $('#playersNum').text(playersScore)
            
        });
  
    }

    $("#bob").mousedown('click', function (){
        if(randomNumber < playersScore){
        alert("You're a Loser!!")
        window.onload = init();
    }
   else if(randomNumber === playersScore){
        alert("You're a Winner!!")
        window.onload = init();
    }
    else{
        console.log("Keep going!")
    }
    });
    $("#linda").mousedown('click', function (){
        if(randomNumber < playersScore){
        alert("You're a Loser!!")
        window.onload = init();
    }
   else if(randomNumber === playersScore){
        alert("You're a Winner!!")
        window.onload = init();
    }
    else{
        console.log("Keep going!")
    }
    });
    $("#tina").mousedown('click', function (){
        if(randomNumber < playersScore){
        alert("You're a Loser!!")
        window.onload = init();
    }
   else if(randomNumber === playersScore){
        alert("You're a Winner!!")
        window.onload = init();
    }
    else{
        console.log("Keep going!")
    }
    });
    $("#louise").mousedown('click', function (){
        if(randomNumber < playersScore){
        alert("You're a Loser!!")
        window.onload = init();
    }
   else if(randomNumber === playersScore){
        alert("You're a Winner!!")
        window.onload = init();
    }
    else{
        console.log("Keep going!")
    }
    });
    

    init()

    
});

