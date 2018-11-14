$("document").ready(function() {

  $("body").click(function() {
    console.log("you clicked it"); 

  });

  /* example only - don't use this, use class */
  $(".button").click(function() {
    console.log("you clicked it"); 
    $(".button").css("background-position","-200 0");  
  });

  $(".button").click(function() {
    $(".button").addClass("button-on");  
  });

  var clicked = false;

  $(".button").click(function() {
    if (clicked == false) { 
    $(".button").addClass("button-on");  
  });

});