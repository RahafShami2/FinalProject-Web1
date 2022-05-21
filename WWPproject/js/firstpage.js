var prev = window.pageYOffset;
window.onscroll = function () {
    var current = window.pageYOffset;
    if (current < prev) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.display = "block";
    }
    else {
        document.getElementById("nav").style.top = "-100px";
        document.getElementById("nav").style.display = "block";

    }
    prev = current;
};
function rotate() {
    document.getElementById("rotatelogo").style.transform = "rotate(360deg)";
    document.getElementById("rotatelogo1").style.transform = "rotate(360deg)";
    document.getElementById("rotatelogo2").style.transform = "rotate(360deg)";
}
function rotate2() {
    document.getElementById("rotatelogo").style.transform = "rotate(0deg)";
    document.getElementById("rotatelogo1").style.transform = "rotate(0deg)";
    document.getElementById("rotatelogo2").style.transform = "rotate(0deg)";
}
// Initialize and add the map
function initMap() {
    // The location of Uluru
    console.log();
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}


function counters() {
  var x=  document.getElementById("counter1");
  var y=  document.getElementById("counter2");
    var z = document.getElementById("counter3");
    if (x.textContent < 1864) {
        x.textContent = Number(x.textContent) +10;  
    }
    if (x.textContent > 1864) {
        x.textContent = 1864
    }
    if (y.textContent < 1500) {
        y.textContent =  Number(y.textContent)+10;
    }
    if (z.textContent < 35000) {
        z.textContent = Number(z.textContent)+100;
    } 
        
    if (Number(x.textContent) != 1864 || Number(y.textContent) != 1500 || Number(z.textContent) != 35000) {
        setTimeout(counters, 100);
    }
   
}

AOS.init();

function heart(x) {
    if (document.getElementById(x).style.color == "red") {
        document.getElementById(x).style.color = "black";
    }
    else {
        document.getElementById(x).style.color = "red";
    }
   
}
function clos(x) {
    document.getElementById(x).style.opacity = "0";   
}
window.addEventListener('scroll', function() {
	var element = document.getElementById('con');
	var position = element.getBoundingClientRect();

    // checking whether fully visible

    
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        counters();
    }

	
});


function viewss() {
    
    if (document.getElementById("mapsec").style.display == "") {
        document.getElementById("mapsec").style.display = "none";

    }
    if (document.getElementById("mapsec").style.display == "none") {
        document.getElementById("mapsec").style.display = "block";
        const href = "#mapsec";
        const offsetTop = document.querySelector(href).offsetTop;
       
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
    }
    else {

        document.getElementById("mapsec").style.display = "none";
    }
}


 

  const links = document.getElementsByClassName("linkss");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
   
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
}
  
function screen_resize() {
    var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);
    if(w <= 575.9) {
        document.getElementById("nav").style.display = "none";
    } else if(w > 576 && w <= 767.98) {
        document.getElementById("nav").style.display = "none";
    } else if(w >  768 && w <= 991.98) {
        document.getElementById("nav").style.display = "none";
  
    }

    

}
window.addEventListener('load', screen_resize());
window.onresize = screen_resize;
function contactus() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    if (fname.value && lname.value && email.value && subject.value && message.value) {
        alert("message has been  send")
        window.location.href = "firstpage.html";
    }
    else {
        if (!fname.value) {
            document.getElementsByClassName("first_name-error")[0].innerHTML = "required validation failed";
           } 
           if (!lname.value) {
            document.getElementsByClassName("last_name-error")[0].innerHTML = "required validation failed";
        } 
        if (!email.value) {
            document.getElementsByClassName("email-error")[0].innerHTML = "required validation failed";
           } 

           if (!subject.value) {
            document.getElementsByClassName("subject-error")[0].innerHTML = "required validation failed";
           } 
           if (!message.value) {
            document.getElementsByClassName("message-error")[0].innerHTML = "required validation failed";
           } 

    }
}
function showcontact() {
    if (document.getElementById("cons").style.display == "")
        document.getElementById("cons").style.display = "none";
    
    if (document.getElementById("cons").style.display == "none") {
        document.getElementById("cons").style.animationName = "come";
        document.getElementById("cons").style.display = "block"; 
    }
    else {
        document.getElementById("cons").style.display = "none";

    }
}