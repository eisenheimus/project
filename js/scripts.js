$( document ).ready(function() {
    
//	$(window).scroll(function(){
//		console.log( "ready!" );
//	});
    
//  $("#howto").click(function(){
//      alert("22434");
      
//      $("#hidden_howTo").css("height","760px")
      
//      $("#hidden_howTo").animate( { height:"760px"}, 1000 ) ;
      
//       $("#hidden_howTo").animate( { height:"760px"}, 1000 ) ;
      

    
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

    
  
    $("#b2one").hover(function () {
       $("#screen").attr("src", "img/slide/1.png");
   });

   $("#b2two").hover(function () {
       $("#screen").attr("src", "img/slide/2.png");
   });

   $("#b2tree").hover(function () {
       $("#screen").attr("src", "img/slide/3.png");
   });


   $("#b2four").hover(function () {
       $("#screen").attr("src", "img/slide/4.png");
    
   });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

	
});