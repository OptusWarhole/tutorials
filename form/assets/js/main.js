jQuery(function($) {
	$('.field-input').focus(function(){
		$(this).parent().addClass('is-focused has-label');
	})

	// blur = opposé de focus, sortir du champs
	$('.field-input').blur(function(){
		$parent = $(this).parent();
		
		$parent.removeClass('is-focused');
		if($(this).val() == ''){
			$parent.removeClass('has-label');
		}
	})
})