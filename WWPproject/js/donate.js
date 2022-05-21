var price = 0;
function clicker(item) {
    clearclick();
    item.style.border = "3px solid red";
}
function clearclick() {
    for (var i = 0; i < 4; i++){
        var id = "one" + i;
        document.getElementById(id).style.border = "none";
    }
}
function nextform1() {
    var x = 0;
    for (var i = 0; i < 4; i++){
        var id = "one" + i;
        if (document.getElementById(id).style.border == "3px solid red") {
            x = 1;
            if (i == 3) {
                price = document.getElementById("cprice").value;
                price += "$";
            } else {
                price = document.getElementById(id).getElementsByTagName("p")[0].innerHTML;
            }
        }
    }
    if (x == 0) {
        alert("choose your price");
    }
    else {
        toform2();
    }
}

function nextform2() {
   
}



function toform2() {
  
    document.getElementById("form1").style.animationName = "away";
    

    var form1 = document.getElementById("form1");
    setTimeout(() => {
        form1.style.display = "none";
    }, 500);
    setTimeout(() => {  
        document.getElementById("form2").style.display = "block";
        document.getElementById("form2").style.animationName = "come";
    }, 500);
    document.getElementById("steps").innerHTML = "Step 2 / 3";
}
function toform3() {
  
   
    document.getElementById("form2").style.animationName = "away";
    

    var form1 = document.getElementById("form2");
    setTimeout(() => {
        form1.style.display = "none";
    }, 500);
    setTimeout(() => {  
        document.getElementById("form3").style.display = "block";
        document.getElementById("form3").style.animationName = "come";
    }, 500);
    document.getElementById("steps").innerHTML = "Step 3 / 3";
    price = "price is : " + price;
    document.getElementById("cpricee").innerHTML = price; 
  

}
function showcridit() {
    displaynone();
    document.getElementById("criditsec").style.display ="block";
    
}
function showpaypal() {
    displaynone();

    document.getElementById("paypalsec").style.display = "block";
    setTimeout(() => {
        window.location.href="https://www.paypal.com"
    }, 2000);

}
function displaynone() {
    document.getElementById("criditsec").style.display = "none";
    document.getElementById("paypalsec").style.display = "none";
}