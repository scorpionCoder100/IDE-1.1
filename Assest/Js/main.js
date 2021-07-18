/* Editor Changer */
/*html*/
$( "#html" ).click(function() {
	var jsdisply = $("#js-area").css("display");
	var cssdisply = $("#css-area").css("display");
	var htmldisply = $('#html-area').css("display");
if (jsdisply == "block") {
	document.getElementById("js-area").style.display="none";
}
if (cssdisply == "block") {
	document.getElementById("css-area").style.display="none";
}
if (htmldisply == "none") {
	document.getElementById("html-area").style.display="block";
}
if (htmldisply == "block") {}
});
/*css*/
$( "#css" ).click(function() {
  	var jsdisply = $("#js-area").css("display");
	var cssdisply = $("#css-area").css("display");
	var htmldisply = $('#html-area').css("display");
if (jsdisply == "block") {
	document.getElementById("js-area").style.display="none";
}
if (cssdisply == "none") {
	document.getElementById("css-area").style.display="block";
}
if (cssdisply == "block") {}
if (htmldisply == "block") {
	document.getElementById("html-area").style.display="none";
}
});
/*js*/
$( "#js" ).click(function() {
    var jsdisply = $("#js-area").css("display");
	var cssdisply = $("#css-area").css("display");
	var htmldisply = $('#html-area').css("display");
if (jsdisply == "none") {
	document.getElementById("js-area").style.display="block";
}
if (jsdisply == "block") {}
if (cssdisply == "block") {
	document.getElementById("css-area").style.display="none";
}
if (htmldisply == "block") {
	document.getElementById("html-area").style.display="none";
}
});
/* tool dropdown */
$( "#tool" ).click(function() {
	document.getElementById("toolsmenu").classList.toggle("visible");
});
/* Color picker*/
var fcolor = document.getElementById("fcolor");
var fcolorspan = document.getElementById("fcolorspan");
fcolor.onchange = function(){
	fcolorspan.style.backgroundColor = fcolor.value;
}
var bgcolor = document.getElementById("bgcolor");
var bgcolorspan = document.getElementById("bgcolorspan");
bgcolor.onchange = function(){
	bgcolorspan.style.backgroundColor = bgcolor.value;
}
/*editor styles*/
function styles(){
	/* Font size */
	var size = document.editorstyle.size.value;
	var px = size+ "px";
	/* colors */
	var fontcolor = document.getElementById("fcolor");
	var backgcolor = document.getElementById("bgcolor");
	/* editors */
	var html = document.getElementById("html-area");
	var css = document.getElementById("css-area");
	var js = document.getElementById("js-area");
	/* bgc */
	html.style.backgroundColor = backgcolor.value;
	css.style.backgroundColor = backgcolor.value;
	js.style.backgroundColor = backgcolor.value;
	/* fc */
	html.style.color = fontcolor.value;
	css.style.color = fontcolor.value;
	js.style.color = fontcolor.value;
	/* fsize */
	html.style.fontSize = px;
	css.style.fontSize = px;
	js.style.fontSize = px;
}
/* is boostrap online?  */
var boostraponline = 0;
/* is jquery online?  */
var jqueryonline = 0;
/* jquery */
function jquery(){
	/* Dont add 2 times */
	if (jqueryonline == 1){
		Swal.fire({
			icon: 'error',
			title: 'Jquery',
  			text: 'already have',
		})	
	}
	/* adding */
	if (jqueryonline == 0){
		const Toast = Swal.mixin({
		  	toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
		  }
		});
		Toast.fire({
			icon: 'success',
		  	title: 'jQuery.js installing...'
		});
		var forjquery= $( "#screen" ).contents().find( "body" );
			forjquery.append('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
		jqueryonline++;
	}
}
/* Sweat Alert 2 boostrap */
function boostrp(){
		/* Dont add 2 times */
	if (boostraponline == 1){
		Swal.fire({
  			icon: 'error',
			title: 'Boostrap',
  			text: 'already have',
		})		
	}
	/* if you add jquery you dont need */
	if(boostraponline == 0 && jqueryonline == 1){
		const Toast = Swal.mixin({
			toast: true,
		  	position: 'top-end',
		  	showConfirmButton: false,
		  	timer: 1500,
		  	timerProgressBar: true,
		  	onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
		  }
		});
		Toast.fire({
		  	icon: 'success',
		  	title: 'Boostrap.css jQuery.js Popper.js Bootstrap JS installing...'
		});
			var forboostrapcss = $( "#screen" ).contents().find( "head" );
			var forboostrapjsnother= $( "#screen" ).contents().find( "body" );
				forboostrapcss.append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
				forboostrapjsnother.append('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>');
				forboostrapjsnother.append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
			boostraponline++;
	}
	/* if jquery didn't add */
	if (boostraponline == 0){	
		const Toast = Swal.mixin({
			toast: true,
		  	position: 'top-end',
		  	showConfirmButton: false,
		  	timer: 1500,
		  	timerProgressBar: true,
		  	onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
		  }
		});
		Toast.fire({
		  	icon: 'success',
		  	title: 'Boostrap.css jQuery.js Popper.js Bootstrap JS installing...'
		});
			var forboostrapcss = $( "#screen" ).contents().find( "head" );
			var forboostrapjsnother= $( "#screen" ).contents().find( "body" );
				forboostrapcss.append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
				forboostrapjsnother.append('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
				forboostrapjsnother.append('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>');
				forboostrapjsnother.append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
			boostraponline++;
			jqueryonline++;
	}
}
/* editor to screen */
function codes(){
		/* Find head and body */
		var head = $( "#screen" ).contents().find( "head" );
		var body = $( "#screen" ).contents().find( "body" );
		/* Cleaner */
		$( body ).empty();
		$( head ).empty();
		/* Write Codes */
		/* HMTL */
		var codehtml = document.getElementById("html-area").value;
		body.prepend(codehtml);
		/* CSS */
		var codecss = document.getElementById("css-area").value;
		head.append("<style>"+codecss+"</style>");
		/* JS */
		var codejs = document.getElementById("js-area").value;
		body.append("<script>"+codejs+"</script>");
	/* boostrap and jquery online */
	if(boostraponline == 1 && jquery == 1){
		/* Find head and body */
		var head = $( "#screen" ).contents().find( "head" );
		var body = $( "#screen" ).contents().find( "body" );
		/* Cleaner */
		$( body ).empty();
		$( head ).empty();
		/* Write Codes */
		/* HMTL */
		var codehtml = document.getElementById("html-area").value;
		body.prepend(codehtml);
		/* CSS */
		var codecss = document.getElementById("css-area").value;
		head.append("<style>"+codecss+"</style>");
		/* JS */
		var codejs = document.getElementById("js-area").value;
		body.append("<script>"+codejs+"</script>");

		head.append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
		
		body.append('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
	
		body.append('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>');
	
		body.append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
	}
	/* boostrap online */
	if (boostraponline == 1){
		/* Find head and body */
		var head = $( "#screen" ).contents().find( "head" );
		var body = $( "#screen" ).contents().find( "body" );
		/* Cleaner */
		$( body ).empty();
		$( head ).empty();
		/* Write Codes */
		/* HMTL */
		var codehtml = document.getElementById("html-area").value;
		body.prepend(codehtml);
		/* CSS */
		var codecss = document.getElementById("css-area").value;
		head.append("<style>"+codecss+"</style>");
		/* JS */
		var codejs = document.getElementById("js-area").value;
		body.append("<script>"+codejs+"</script>");

		head.append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">');
		
		body.append('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
	
		body.append('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>');
	
		body.append('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>');
	}
	if(boostraponline == 0){
		if (jqueryonline == 1){
			/* Find head and body */
			var body = $( "#screen" ).contents().find( "body" );
			/* Cleaner */
			$( body ).empty();
			/* Write Codes */
			/* HMTL */
			var codehtml = document.getElementById("html-area").value;
			body.prepend(codehtml);
			/* JS */
			var codejs = document.getElementById("js-area").value;
			body.append("<script>"+codejs+"</script>");

			body.append('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>');
		}
	}
}