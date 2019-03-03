
jQuery(document).ready(function(e){
	

	
	
	
	
	
	
	
	
	
  var tag ;
  
  
  var input = document.getElementById("tags");
  var i=0;
  
  
  
  //keyup function of input from  -- - -starts from here
  
  input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
    var chs =jQuery('#tags').val();
	chs = chs.replace(/(^,)|(,$)/g, "");
	
  if (event.keyCode === 32 || event.keyCode === 188 && chs!=="") {
    // Trigger the button element with a click
    tag=jQuery('#tags').val();
	
 tag =tag.trim();
	
  if(tag){
	 
  if(tag !== " "  ){
  tag = filter(tag);
  jQuery('.tags').append("<div id='tg' class='alert alert-dismissible tag'><a class='sty' href=''>"+tag+"</a><a href='#' style='text-decoration:none;' class='rounded-circle tt ' data-dismiss='alert'><span class='fa wc-cros'></span></a></div>");
jQuery('#tags').val(""); 
jQuery("#tags").attr("placeholder","");
i++;
     


 }
 }else{
	 jQuery('#tags').val(" "); 
 }
  
  
  }else if(event.keyCode === 8){
  
  var ch =jQuery('#tags').val();

  if(ch===""){
  
   jQuery('#tg:last-child').remove();
jQuery("#tags").attr("placeholder","");
	 
    
	i--;
   if(i<=-1){
   i++;
   }

  }
  

  if(i==0){
	     jQuery("#tags").attr("value","");
	    jQuery("#tags").attr("placeholder","At least one tag is must");
	 
	  
  }
  
  
  
  }
  
});
  // -- input tags function ends here    
  
  //less the maximum tag quantity when user click on close button //
  jQuery('.tags').on('click','.tt',function(e){
	  e.preventDefault();
	
	   i--;
	  if(i<=-1){
   i++;
   }
	  
  });
  
  
  if(i>4){
	document.getElementById("tags").disabled = true;
	jQuery('#tags').val(" ");
	}else{
	document.getElementById("tags").disabled = false;
	}
  
  function filter(data){
  
  
   return tag.replace(/[^\w -]/g, ' ').trim().replace(/\W+/g, '-');
  
  }
  
  jQuery('#value').click(function(){
  
  var values= jQuery('.tags').text();
  values = values.replace(/[^\w -]/g, ' ').trim();
  var x_c =values.split("&times;").length-1;
  while(x_c>-1){
  values= values.replace('\u00d7', ',');
  x_c--;
  }

  });

	

		
		
	

	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
