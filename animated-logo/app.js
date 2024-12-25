/* for some reason this path animations are broken in iPhone and probably other smartphones browser, i'm still trying to figure out why :( */

/* typography paths from : http://bit.ly/2onjlxA */

/* rerun everything */ 
 $( "html,h4,.wrapper" ).click(function() {
//location.reload(); 
 $(".wrapper").load(" .wrapper > *"); 
});