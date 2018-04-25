$(document).ready(function(){


  //jQuery Function Number 1, hide/fadeIn
$("#title").hide(0).delay(500).fadeIn(3000);
$(".home-icon").hide(0).delay(500).fadeIn(3000);
$("#header").hide(0).delay(500).fadeIn(3000);
$("#timeline-container").hide(0).delay(500).fadeIn(3000);
$("#meet").hide(0).delay(500).fadeIn(3000);
$(".content-container").hide(0).delay(500).fadeIn(3000);


 //jQuery Function Number 2, mouseEnter
$("#title").mouseenter(function(){
        $(".home-icon").fadeTo("fast", 0);
    });

//jQuery Function Number 3, mouseLeave
$("#title").mouseleave(function(){
        $(".home-icon").fadeTo("fast", 1);
    });

//jQuery Function Number 4, hover
//jQuery Function Number 5, css
$(".allergy-name").hover(function(){
	$(".allergy-name").css("color","#031261")
});

//jQuery Function Number 6, click
//jQuery Function Number 7, text
$(".icon").click(function(){
        $(".bio").text("LOL");
    });

//jQuery Function Number 8, addClass
$("#header").click(function(){
        $(".date").addClass("event");
    });

});
