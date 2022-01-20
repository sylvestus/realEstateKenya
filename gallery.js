//function to show menu elements
var showMenu = function() {
    document.getElementById("navbar_elements").style.right = "0px";
    document.getElementById("bar_logo").style.visibility = "hidden";
};
//function to hide menu elements`
function hideMenu() {
    var navbarElements = document.getElementById("navbar_elements");
    navbarElements.style.right = "-200px";
    document.getElementById("bar_logo").style.visibility = "visible";
}



$(document).ready(function() {
    $('#part1 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text1').removeClass('hide1');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text1').addClass('hide1');
    });
    $('#part2 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text2').removeClass('hide2');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text2').addClass('hide2');
    });
    $('#part3 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text3').removeClass('hide3');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text3').addClass('hide3');
    });
    $('#part4 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text4').removeClass('hide4');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text4').addClass('hide4');
    });
    $('#part5 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text5').removeClass('hide5');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text5').addClass('hide5');
    });
    $('#part6 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text6').removeClass('hide6');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text6').addClass('hide6');
    });
    $('#part7 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text7').removeClass('hide7');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text7').addClass('hide7');
    });
    $('#part8 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text8').removeClass('hide8');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text8').addClass('hide8');
    });
});

//datepicker
$(document).ready(function() {
    $('#date').datepicker({
        autoclose: true,
        format: "dd/mm/yyyy"
    });
});

//display name

const formDetails = document.getElementById("form");
formDetails.addEventListener("submit", async(ev) => {
    ev.preventDefault();
    var name = document.getElementById("name").value;
    var tourDate = document.getElementById("date").value;
    alert("Hello " + name + "! . Your house tour  will be on " + tourDate);
})