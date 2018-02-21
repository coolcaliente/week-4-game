$(document).ready(function () {

    // variables in the game

    var darkCrystalPower;
    var collectiveGemPower;
    var gemOnePower;
    var gemTwoPower;
    var gemThreePower;
    var gemFourPower;
    var winCounter = 0;
    //document.getElementById('winCount');
    //winCount.innerHTML = winCounter;
    //$("#winCount").html(winCounter);
    var lossCounter = 0;
    //document.getElementById('lossCount');
    //lossCount.innerHTML = lossCounter;
   // $("#lossCount").html(lossCounter);

    
   // functions being used in this game

   //fuction that pick random numbers 
   function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //variable initializes random values of crystal and gems 
    var intitalizeValues = function() {
        updateWinLoss();
        darkCrystalPower = getRandomInt(19, 120)
        console.log(darkCrystalPower);
        // replace placeholder with new value in html
        //document.getElementById('darkCrystal');
        //darkCrystal.innerHTML = darkCrystalPower;
        $("#darkCrystal").html(darkCrystalPower);

        collectiveGemPower = 0;
        console.log(collectiveGemPower);
        // reset with 0 in html
        //document.getElementById('gemPower');
        //gemPower.innerHTML = collectiveGemPower;
        $("#gemPower").html(collectiveGemPower);

        gemOnePower = getRandomInt(1, 12)
        console.log(gemOnePower);

        gemTwoPower = getRandomInt(1, 12)
        console.log(gemTwoPower);

        gemThreePower = getRandomInt(1, 12)
        console.log(gemThreePower);

        gemFourPower = getRandomInt(1, 12)
        console.log(gemFourPower);

    }

    //variable that updates the win and loss counters
    var updateWinLoss = function() {
        $("#winCount").html(winCounter);
        $("#lossCount").html(lossCounter);
    }


    // when game starts random values are assigned to the dark crystal, each gem, and Gem Power is set to 0

    intitalizeValues();


  
// variable with a funciton that updates the gem power counter  based on selecting a gem button and determines if the user wins or looses and then updates the win and loss counter 

    var gemClick = function (theGem) {
        collectiveGemPower = collectiveGemPower + theGem;
        //document.getElementById('gemPower');
        //gemPower.innerHTML = collectiveGemPower;
        $("#gemPower").html(collectiveGemPower);

        if (collectiveGemPower === darkCrystalPower ) { 
            alert("You defeated the Dark Crystal!"); 
            winCounter++;
            //document.getElementById('winCount');
            //winCount.innerHTML = winCounter;
            //$("#winCount").html(winCounter);
            intitalizeValues();
        } else if ( collectiveGemPower > darkCrystalPower) { 
            alert("You were defeated!"); 
            lossCounter++;
            //document.getElementById('lossCount');
            //lossCount.innerHTML = lossCounter;
            //$("#lossCount").html(lossCounter);
            intitalizeValues();
        }
        updateWinLoss();

    }
      
    // assign the gemClick to each of the gems

    $("#gemOne").on("click", function () {
        gemClick(gemOnePower);
        // collectiveGemPower = collectiveGemPower + gemOnePower;
        // document.getElementById('gemPower');
        // gemPower.innerHTML = collectiveGemPower;
        // if (collectiveGemPower === darkCrystalPower ) { 
        //     alert("You defeated the Dark Crystal!"); 
        //     winCounter++;
        //     document.getElementById('winCount');
        //     winCount.innerHTML = winCounter;
        //     intitalizeValues();
        // } else if ( collectiveGemPower > darkCrystalPower) { 
        //     alert("You were defeated!"); 
        //     lossCounter++;
        //     document.getElementById('lossCount');
        //     lossCount.innerHTML = lossCounter;
        //     intitalizeValues();
        // }
    });

    $("#gemTwo").on("click", function () {
        gemClick(gemTwoPower);
    });

    $("#gemThree").on("click", function () {
        gemClick(gemThreePower);
    });

    $("#gemFour").on("click", function () {
        gemClick(gemFourPower);
    });
});