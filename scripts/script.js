//conctact link open form function
$('#contact_link').click(function(e){
	e.preventDefault();

	$('#shadow').fadeTo('normal', 0.6);

	$('#contact_form').fadeIn();

	$(document).bind('mousewheel DOMMouseScroll',function(e){ 
		e.preventDefault(); 
	});


});

//shadow background and close button close form function
$('#shadow, #close').click(function(e){
	e.preventDefault();

	$('#contact_form').fadeOut();

	$('#shadow').fadeOut();

	$(document).unbind('mousewheel DOMMouseScroll');

});


