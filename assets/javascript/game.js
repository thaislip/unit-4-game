
var random_result;
var lost;
var win;

random_result = Math.floor(Math.random() * 101 ) + 19;

// console.log(random_result);

$("#result").html('Random Result: ' + random_result);
for(var i = 0; i < 4; i++){
   
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);


    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);

}



$(".crystal").on('click', function() {
   
    console.log($(this).attr('data-random'));

});


//crystal game: 4 crystals and random result
// every crystal needs to have a random number between 1-12
// the random number at the beginning of the game should be between 19 - 120.
// a new number should be generated every single time win or lose the game.
//when clicking any crystal, selected numbers should add with previous numbers until it matches the random generated number.
// if it is not equal, the game resets. and the user loses.
// if it is equal, the user score goes up.


