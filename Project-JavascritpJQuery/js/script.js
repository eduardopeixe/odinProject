//check size of the screen to center the GRID

var screenW = $(window).width() - 100 - ($(window).width() - $(window).height());
var screenH = $(window).height()  - 100;


//center the grid

$('.grid').css("left", "50%") ;
$('.grid').css("width", screenW + 50);
$('.grid').css("margin-left",  -(screenW + 50) / 2) ;

$(document).ready(function(){
	genGrid(16,16);
	mouseOver();
	
});

$('.btn').click(function(){
		var s = prompt('What size is it?');		
		delGrid();
		genGrid(s, s);
		mouseOver();
	});

function mouseOver(){
	$('.gcell').mouseover(function(){
		$(this).css('backgroundColor', "red");
	});
}


function delGrid(){
	$('.gcell').remove();
}



function genGrid(x, y){
	var gridSize = x * y;
	var width = (screenW / x) - 2;
	var height = (screenH / y) - 2;
	var a=0;
	
	console.log("width " + width);
	console.log("height: " + height);
	
		for(var i=0; i < gridSize; i++){
		a++;
		$('.grid').append("<div class='gcell'></div>");
	}
	$(".gcell").css("width", width + "px");
	$(".gcell").css("height", height + "px");
	$(".gcell").css("margin", "1");
		

}
