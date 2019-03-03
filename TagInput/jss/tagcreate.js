//tagcreate.js


$.noConflict();
jQuery(document).ready(function(){




	
	jQuery("#done").click(function(e){
	e.preventDefault();jQuery(".dot").show();

	var title = jQuery("#ttitle").val();
	var decs = jQuery("#tdesc").val();
 
	jQuery.post("tagdalo.php",{ttitle:title,tdesc:decs},function(data,status){
		jQuery(".dot").hide();
		jQuery('#tagCreated').html("<div class='alert w3-animate-opacity alert-dismissible mt-5 alert-info'><button class='close' data-dismiss='alert'>&times;</button>"+data+"</div>");
	
		
	});
	
	
	
});
});
	