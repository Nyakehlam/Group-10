//Menu Bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// slideshow
 var slideIndex = 0;
 showSlides();
 
 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }

//online oder

        function finalCost(){
            var foodItem = document.getElementById("food_item").value;
            var specialItemm = document.getElementById("special_item").value;
            var foodQuatity = document.getElementById("food_quantity").value;
            var deliveryType = document.getElementById("delivery_type").value;
            var deliveryArea = document.getElementById("delivery_area").value;

            var all_food = (parseInt(foodItem)*7000) + (parseInt(specialItemm)*3000) + ((foodQuatity)*2000) + (parseInt(deliveryType)*4000) + (parseInt(deliveryArea)*3000)
            document.getElementById("result").innerHTML = all_food;
        }
        function ok_result(){
            document.getElementById("okResult").style.display="block";
            document.getElementById("okResult").style.backgroundColor="#DCE775";
            document.getElementById("input_box").style.display="none";
        }
  
   
       