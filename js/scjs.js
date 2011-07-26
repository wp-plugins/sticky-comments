jQuery(document).ready(function($){
	/* Move the checkbox in the Status container */
	$('#sc_container').appendTo('#comment-status-radio');
	
	$('input[name="sc_notify_type"]').change(function(){

		if ($(this).val() == 'text') {
			$('#sc_notify_image').parent().parent().css('display', 'none');
			$('input[name="sc_notify_text"]').parent().parent().css('display', 'table-row');
		} else {
			$('input[name="sc_notify_text"]').parent().parent().css('display', 'none');
			$('#sc_notify_image').parent().parent().css('display', 'table-row');		
		}
	});
	
});