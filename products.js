

//function to show menu elements
var showMenu = function () {
   document.getElementById("navbar_elements").style.right = "0px";
   document.getElementById("bar_logo").style.visibility = "hidden";
 };
 //function to hide menu elements`
 function hideMenu() {
   var navbarElements = document.getElementById("navbar_elements");
   navbarElements.style.right = "-200px";
   document.getElementById("bar_logo").style.visibility = "visible";
 }
$(document).ready(function () {




// $(".barMenu").click(function(){
//     //alert("hi")
//     $(".barMenu").toggleClass("close");
//   // $(".lst").toggleClass("ctive");
//    // $( "p" ).addClass( "myClass yourClass" );
// })
$(".moreBn").click(function(){
   $(".more1").show()
   $(".more1").css({"display": "flex", "justify-content": "evenly"});
})
$(".moreBn2").click(function(){
   $(".more2").show()
   $(".more1").css({"display": "flex", "justify-content": "evenly"});
})
$(".moreBn3").click(function(){
   $(".more3").show()
  $(".more3").css({"display": "flex", "justify-content": "evenly"});
})
});