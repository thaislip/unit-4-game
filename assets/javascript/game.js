
var randomResult;
var lose = 0;
var win = 0;
var  counter = 0;

var startReset = function () {

    $(".crystals").empty();

    var images = [
            'https://www.pngfind.com/pngs/m/104-1045437_the-legend-of-zelda-clipart-rupee-color-rupee.png',
            'https://cdn.imgbin.com/21/10/14/imgbin-the-legend-of-zelda-ocarina-of-time-link-indian-rupee-the-legend-of-zelda-breath-of-the-wild-rupee-NNZJNHbKrMLcw7ecUXaf1F1Qq.jpg',
            'https://www.pngfind.com/pngs/m/62-629044_the-legend-of-zelda-clipart-rupee-color-legend.png',
            'https://cdn.imgbin.com/1/13/18/imgbin-the-legend-of-zelda-skyward-sword-the-legend-of-zelda-twilight-princess-hd-indian-rupee-link-rupee-CRTdwmYn8EyyuzX19YcMQECrD.jpg'];

    randomResult = Math.floor(Math.random() * 101 ) + 19;
 
    $("#result").html('Random Result: ' + randomResult);
    for(var i = 0; i < 4; i++){
       
        var random = Math.floor(Math.random() * 11) + 1;
    
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })
    
            $(".crystals").append(crystal);
    
    }

    $("#counter").html("Total Score: ", + counter);
}    

startReset();


//event delegation
$(document).on('click', ".crystal", function() {
   
    var num = parseInt($(this).attr('data-random'));

    counter += num;


    $("#counter").html("Total Score: " + counter);

    console.log(counter);

   if(counter > randomResult){

        lose++; 

        $("#lose").html("You Lost: " + lose);

        console.log("you lose!");

        counter = 0;

        startReset();

   }
    else if( counter === randomResult){

        win++;

        $("#win").html("You Won: " + win);

        console.log("you win!");

        counter = 0;

        startReset();
    }

});


//crystal game: 4 crystals and random result
// every crystal needs to have a random number between 1-12
// the random number at the beginning of the game should be between 19 - 120.
// a new number should be generated every single time win or lose the game.
//when clicking any crystal, selected numbers should add with previous numbers until it matches the random generated number.
// if it is not equal, the game resets. and the user loses.
// if it is equal, the user score goes up.


