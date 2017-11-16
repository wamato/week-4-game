//select a fightr. If the user selects the enemy first, alert them otherwise.
//after the warrior is chosen, place them into the fighting stage.
//once the enemy is chosen, add them into the fighting stage as well.
//every time a successful attack is landed, the characters "grow"
//the character is defeated when the hp=0
//if the selected warrior is the winner, the stats remain and a new enemy needs seletion
//if the intial selcted warrior defeats all the enemies, you win, else, you lose.

var characters = {
    spongebob: {
        hp: 100,
        attack: 15,
        // growth: attack+10,
    },
    patrick: {
        hp: 120,
        attack: 30,
        // growth: hp+5,
    },
    squidward: {
        hp: 105,
        attack: 15,
        // growth: attack+5,
    },
    larry: {
        hp: 90,
        attack: 45,
        // growth: attack+3,
    },
}
console.log(characters.patrick.hp);

//  var person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
// console.log(person.age);
//click events


//warrior clicks
// var warriorClicks = 

$(".sponge-image-left").on("click", function () {
    var spongebobReady = $(".sponge-image-left").appendTo(".stage-left")
    var hideSponge = $(".sponge-image-right").hide("fast")
    var hideSpongeStats = $(".html-sponge-stats").hide("fast")
});

$(".patrick-image-left").on("click", function () {
    var patrickReady = $(".patrick-image-left").appendTo(".stage-left")
    var hidePat = $(".patrick-image-right").hide("fast")
    var hidePatStats = $(".html-pat-stats").hide("fast")

});

$(".squidward-image-left").on("click", function () {
    var squidwardReady = $(".squidward-image-left").appendTo(".stage-left")
    var hideSquid = $(".squidward-image-right").hide("fast")
    var hideSquidStats = $(".html-squid-stats").hide("fast")

});

$(".larry-image-left").on("click", function () {
    var larryReady = $(".larry-image-left").appendTo(".stage-left")
    var hideLarry = $(".larry-image-right").hide("fast")
    var hideLarryStats = $(".html-larry-stats").hide("fast")

});
// };


//enemy  cicks
// var EnemySponge =
$(".sponge-image-right").on("click", function () {
    var spongebobReady = $(".sponge-image-right").appendTo(".stage-right")
    var hideSponge = $(".sponge-image-left").hide("fast")
    var hideSpongeStats = $(".html-sponge-stats").hide("fast")
    console.log(this);
});

$(".patrick-image-right").on("click", function () {
    var patrickReady = $(".patrick-image-right").appendTo(".stage-right")
    var hidePat = $(".patrick-image-left").hide("fast")
    var hidePatStats = $(".html-pat-stats").hide("fast")

});

$(".squidward-image-right").on("click", function () {
    var squidwardReady = $(".squidward-image-right").appendTo(".stage-right")
    var hideSquid = $(".squidward-image-left").hide("fast")
    var hideSquidStats = $(".html-squid-stats").hide("fast")

});

$(".larry-image-right").on("click", function () {
    var larryReady = $(".larry-image-right").appendTo(".stage-right")
    var hideLarry = $(".larry-image-left").hide("fast")
    var hideLarryStats = $(".html-larry-stats").hide("fast")
    // var LarryAll = $(".larry-image-right").on("click",function(){});
    // console.log(LarryAll + "I work ");
});

// if (EnemySponge=true) {
//     console.log(EnemySponge);
//     $(".col-md-3 warrior-choice").hide();
// }