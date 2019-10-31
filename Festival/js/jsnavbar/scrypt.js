/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $(".nabbut").click(function(){

      /* this if else to change the text in the button */
      if($(".nabbut").text() == "X"){
       $(".nabbut").text("☰");
      }else{
        $(".nabbut").text("☰");
      }

    /* this function toggle the visibility of our "li" elements */
    $(".navli").toggle("slow");
  });
});
