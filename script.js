$(document).ready(function(){

var button3 = 0;
$('#button-3').click(function(){
	if(button3 % 2 == 0){
		$(this).css('background-color', 'red');
	}else if(button3 % 2 == 1){
		$(this).css('background-color', 'blue');
	}
	button3 ++;
})

var button4 = 0;
$('#button-4').click(function(){
	if(button4 % 3 == 0){
		$(this).css('background-color', 'red');
	} else if(button4 % 3 == 1){
		$(this).css('background-color', 'blue');
	} else if(button4 % 3 == 2){
		$(this).css('background-color', 'green');
	}
	button4 ++;
})

$("#button-7").on('click', function() {
        $(this).animate({
            width: "70%",
            height: "800px",
            marginLeft: "0.6in",
            borderWidth: "10px"
        }, 1500 );
        $(".button-7").not(this).animate({
            opacity: "0.4"
        }, 1500);
    });


    $("#button-9").click(function(){
        $("#button-9").animate({
            left: '250px',
            height: '-=650px',
            width: '-=150px'
        });
    });

    $("#button-10").click(function(){
        $("hidden").toggle();
    });
		$("alert").click(function(){
	         alert("I told you!");
	     });
		$("moving").click(function(){
			 var div = $("moving");
			 div.animate({height: '300px', opacity: '0.4'}, "slow");
			 div.animate({width: '300px', opacity: '0.8'}, "slow");
			 div.animate({height: '100px', opacity: '0.4'}, "slow");
			 div.animate({width: '100px', opacity: '0.8'}, "slow");
	 });
	 $("movingb").click(function(){
 		 var div = $("movingb");
 		 div.animate({height: '300px', opacity: '0.4'}, "slow");
 		 div.animate({width: '300px', opacity: '0.8'}, "slow");
 		 div.animate({height: '300px', opacity: '0.4'}, "slow");
 		 div.animate({width: '300px', opacity: '0.8'}, "slow");
  });
	$("movingc").click(function(){
		var div = $("movingc");
		div.animate({height: '600px'}, "slow");

		div.animate({height: '100px'}, "slow");

 });
 $("movingd").click(function(){
	 var div = $("movingd");
	 div.animate({left: '600px', opacity: '0.8'}, "fast");

	 div.animate({left: '330px', opacity: '0.8'}, "fast");

});
$("flip").click(function(){
        $("#panel").slideToggle("slow");
    });
var button17 = 0;
		$('#button-17').click(function(){
			if(button4 % 3 == 0){
				$(this).css('background-color', 'red');
			} else if(button4 % 3 == 1){
				$(this).css('background-color', 'blue');
			} else if(button4 % 3 == 2)  $("#gotit").slideToggle("slow");
			button4 ++;
		})
		$("movinge").click(function(){
	 	 var div = $("movinge");
	 	 div.animate({top: '600px', opacity: '0.8'},);
		  	 div.animate({left: '10px', opacity: '0.8'},);
				  div.animate({top: '10px', opacity: '0.8'},);

	 });
	 $("movingf").click(function(){
		var div = $("movingfe");
		div.animate({top: '600px', opacity: '0.8'},);
				div.animate({left: '10px', opacity: '0.8'},);
				 div.animate({top: '10px', opacity: '0.8'},);
				 var div = $("movingf2");
		 		div.animate({left: '220px', opacity: '0.8'},);
		 				div.animate({left: '320px', opacity: '0.8'},);
		 				 div.animate({top: '0px', opacity: '0.8'},);
						 var div = $("movingf3");
				 		div.animate({left: '200px', opacity: '0.8'},);
				 				div.animate({left: '320px', opacity: '0.8'},);
				 				 div.animate({top: '0px', opacity: '0.8'},);
								 var div = $("movingf4");
						 		div.animate({left: '220px', opacity: '0.8'},);
						 				div.animate({left: '320px', opacity: '0.8'},);
						 				 div.animate({top: '0px', opacity: '0.8'},);
									 });

$("help").click(function(){
			 var div = $("#button-20");
			 div.animate({fontSize: '10em'}, "slow");

	 });
$("what").click(function(){
	 			 var div = $("#button-21");
	 			 div.animate({fontSize: '5em'}, "slow");
				 var div = $("#button-22");
	 			 div.animate({fontSize: '5em'}, "slow");
				  });
					$("hide2").click(function(){
						 			 var div = $("#button-21");
						 			 div.animate({opacity: "0"}, "slow");
									 var div = $("#button-22");
						 			 div.animate({opacity: "0"}, "slow");
									  });
$("hide2").click(function(){
											 			 var div = $("#button-21");
											 			 div.animate({opacity: "0"}, "slow");
														 var div = $("#button-22");
											 			 div.animate({opacity: "0"}, "slow");
														  });
															$("wave").click(function(){
																$("#button-23").fadeOut();
$("#button-22").fadeOut("slow");
$("#button-21").fadeOut(3000);
																													  });
																														$("#button-25").click(function(event){
			 $("span").text(event.pageX + ", " + event.pageY);
	 });
	 $("flat").click(function(){
 		var div = $("flat");
 		div.animate({right: '600px'}, "slow");

 		div.animate({left: '100px'}, "slow");

  });
	$("flat").click(function(){
	 var div = $("flat");
	 div.animate({right: '600px'}, "slow");

	 div.animate({left: '100px'}, "slow");

 });
 $("movingx").click(function(){
		var div = $("movingx");
		div.animate({height: '60px', opacity: '0.4'}, "fast");
		div.animate({width: '630px', opacity: '0.8'}, "fast");
		div.animate({height: '300px', opacity: '0.4'}, "fast");
		div.animate({width: '300px', opacity: '0.8'}, "fast");
});

$("movingy").click(function(){
 var div = $("movingx");
 div.animate({opacity:'0.3'}, );

 div.animate({opacity:'0.3'},);
 div.animate({opacity:'0.3'}, );

 div.animate({opacity:'0.3'},);
 var div = $("movingy");
 div.animate({opacity:'0.3'}, );

 div.animate({opacity:'0.3'},);
 var div = $("moving");
 div.animate({opacity:'0.3'}, );

 div.animate({opacity:'0.3'},);

});
$("movings").click(function(){
 var div = $("movingx");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.8'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.8'},"fast");
 var div = $("movingy");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.8'},"fast");
 var div = $("moving");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.8'},"fast");
 var div = $("movings");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.6'},"fast");
 div.animate({opacity:'0.3'}, "fast");

 div.animate({opacity:'0.8'},"fast");

});
var button34 = 0;
$('#button-34').click(function(){
	if(button34 % 3 == 0){
		$('#button-34').css('background-color', 'red');
	} else if(button34 % 3 == 1){
		$('#button-33').css('background-color', 'blue');
	} else if(button34 % 3 == 2){
		$('#button-32').css('background-color', 'green');
	}
	button34 ++;
})


$("opacity").click(function(){
	var div = $("div");
	div.animate({opacity:'0.6'},"fast");
  div.animate({opacity:'0.3'}, "fast");

  div.animate({opacity:'0.8'},"fast");
	div.animate({opacity:'0.6'},"fast");
	div.animate({opacity:'0.3'}, "fast");

	div.animate({opacity:'0.8'},"fast");
	div.animate({opacity:'0.6'},"fast");
	div.animate({opacity:'0.3'}, "fast");

	div.animate({opacity:'0.8'},"fast");
	div.animate({opacity:'0.6'},"fast");
	div.animate({opacity:'0.3'}, "fast");

	div.animate({opacity:'0.8'},"fast");
	 });
	 var button36 = 0;
	 $('#button-36').click(function(){
	 	if(button36 % 3 == 0){
	 		$('div').css('background-color', 'red');
	 	} else if(button36 % 3 == 1){
	 		$('div').css('background-color', 'blue');
	 	} else if(button36 % 3 == 2){
	 		$('div').css('background-color', 'green');
	 	}
	 	button36 ++;
	 })
	 var button37 = 0;
	 $('#button-37').click(function(){
	 	if(button37 % 3 == 1){
	 		$('div').css('background-color', 'red');
	 	} else if(button37 % 3 == 3){
	 		$('div').css('background-color', 'blue');
	 	} else if(button37 % 3 == 2){
	 		$('div').css('background-color', 'green');
	 	}
	 	button37 ++;
	 })
	 $("kick").click(function(){
	         $("div").slideToggle("slow");
	     });
			 $("please").click(function(){
			 			 var div = $("div");
			 			 div.animate({fontSize: '5em'}, "slow");

			 	 });
				 $("please").click(function(){
							var div = $("div");
							div.animate({fontSize: '5em'}, "slow");

					});
					$("warning").click(function(){
			        $("hidden").toggle();
			    });
					$("warning").click(function(){
				         alert("there is nothing!");
				     });
						 $("off").click(function(){
				 	 	 var div = $("div");
				 	 	 div.animate({top: '2600px', opacity: '0.8'},);


				 	 });
					 $("no").click(function(){
					 var div = $("off");
					 div.animate({opacity: '0'},);

				});
				$("oh").click(function(){
		        $("oh").animate({
		            width: '-=150px'
		        });
		    });
				$("spin").click(function(){
		        $("div").animate({
		            width: '-=150px'
		        });
		    });
				$("er").click(function(){
						$("div").animate({

								top: '-=150px'
						});
				});
				$("fi").click(function(){
						$("div").animate({

								top: '+=150px'
						});
				});
				$("kh").click(function(){
						$("div").animate({

								left: '+=150px',
								top: '-=150px',
						});
				});
				$("kx").click(function(){
					 var div = $("div");
					 div.animate({height: '60px', opacity: '0.4',}, );
					 div.animate({width: '630px', opacity: '0.8'}, );
					 div.animate({height: '300px', opacity: '0.4'}, );
					 div.animate({width: '300px', opacity: '0.8'}, );
			 });

			 $("ks").click(function(){
					var div = $("div");
					div.animate({height: '60px', opacity: '0.4',}, );

			});





















});
