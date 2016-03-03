$( document ).ready(function() {
    
//	$(window).scroll(function(){
//		console.log( "ready!" );
//	});
    
//  $("#howto").click(function(){
//      alert("22434");
      
//      $("#hidden_howTo").css("height","760px")
      
//      $("#hidden_howTo").animate( { height:"760px"}, 1000 ) ;
      
//       $("#hidden_howTo").animate( { height:"760px"}, 1000 ) ;
      
    $("#howto").click(function(){
        
        $("#hidden_login").slideUp(); 
        $("#hidden_registr").slideUp(); 
        
        
        
        $("#hidden_howTo").slideToggle("slow");
        
        
    });
    
    $("#login").click(function(){
        $("#hidden_howTo").slideUp();
        $("#hidden_registr").slideUp(); 
        
        $("#hidden_login").slideToggle("slow");
    });
      
    
        $("#registr").click(function(){
        $("#hidden_howTo").slideUp();
        $("#hidden_login").slideUp(); 
        $("#hidden_registr").slideToggle("slow");
    });

    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

	
});