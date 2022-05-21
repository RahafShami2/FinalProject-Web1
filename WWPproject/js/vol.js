
function bord(item) {
    var x = item.getElementsByTagName("h1");
    if (!item.style.borderColor) {
        item.style.borderColor = "white";
    }
    if (item.style.borderColor == "white") {
        item.style.borderColor = "rgb(86, 168, 247)";
        add_to_textbox(x[0].innerHTML)

    }
    else if (item.style.borderColor =="rgb(86, 168, 247)") {
        item.style.borderColor = "white";
        remove_from_textbox(x[0].innerHTML)
    }

}
function add_to_textbox(item) {
    var textbox = document.getElementById("textbox");
    for (var i = 0; i < textbox.childNodes.length; i++) {
        if (textbox.childNodes[i].innerHTML == "choices...") {
            textbox.removeChild(textbox.childNodes[i]);
            break;
       }
  
    }
    var h1 = document.createElement("h1");
    h1.classList.add("adding");
    h1.innerText = item;

    textbox.appendChild(h1);
}
function remove_from_textbox(item) {


    for (var i = 0; i < textbox.childNodes.length; i++) {

        if (textbox.childNodes[i].innerHTML==item) {
            textbox.removeChild(textbox.childNodes[i]);
            if (textbox.childNodes.length == 2) {
                var p = document.createElement("p");
                p.innerHTML = "choices...";
                textbox.appendChild(p);
            }
            break;

        }
    }
}
function cheack() {
    var name = document.getElementById("inputname");
    var phone = document.getElementById("inputphone");
    var address = document.getElementById("inputaddress");
    if (name.value == "") {
        document.getElementById("namelabel").style.color = "red";
        name.style.borderColor = "red";
        name.style.animationName = "emptybox";
    }
    if (phone.value == "") {
        document.getElementById("phonelabel").style.color = "red";
        phone.style.borderColor = "red";
        phone.style.animationName = "emptybox";
    }
    if (address.value == "") {
        document.getElementById("addresslabel").style.color = "red";
        address.style.borderColor = "red";
        address.style.animationName = "emptybox";
    }
    if (name.value != "" && phone.value != "" && address.value != "") {
        toform3();
    }

}

function right() {


    var month = document.getElementById("month");
    var year = document.getElementById("year");
    if (month.innerHTML == "January") {
        month.innerHTML = "February";
    }
    else if(month.innerHTML == "February"){
        month.innerHTML = "March";
    }
    else if (month.innerHTML == "March") {
        month.innerHTML = "April";

    }
    else if (month.innerHTML == "April") {
        month.innerHTML = "May";

    }
    else if (month.innerHTML == "May") {
        month.innerHTML = "June";

    }
    else if (month.innerHTML == "June") {
        month.innerHTML = "July";

    }
    else if (month.innerHTML == "July") {
        month.innerHTML = "August";

    }
    else if (month.innerHTML == "August") {
        month.innerHTML = "September";

    }
    else if (month.innerHTML == "September") {
        month.innerHTML = "October";

    }
    else if (month.innerHTML == "October") {
        month.innerHTML = "November";

    }
    else if (month.innerHTML == "November") {
        month.innerHTML = "December";

    }
    else if (month.innerHTML == "December") {
        month.innerHTML = "January";
        year.innerHTML = Number(year.innerHTML) + 1;

    }
    set_calinder();
}


function left() {
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    if (month.innerHTML == "January") {
        month.innerHTML = "December";
        year.innerHTML = Number(year.innerHTML) - 1;

    }
    else if(month.innerHTML == "February"){
        month.innerHTML = "January";
    }
    else if (month.innerHTML == "March") {
        month.innerHTML = "February";

    }
    else if (month.innerHTML == "April") {
        month.innerHTML = "March";

    }
    else if (month.innerHTML == "May") {
        month.innerHTML = "April";

    }
    else if (month.innerHTML == "June") {
        month.innerHTML = "May";

    }
    else if (month.innerHTML == "July") {
        month.innerHTML = "June";

    }
    else if (month.innerHTML == "August") {
        month.innerHTML = "July";

    }
    else if (month.innerHTML == "September") {
        month.innerHTML = "August";

    }
    else if (month.innerHTML == "October") {
        month.innerHTML = "September";

    }
    else if (month.innerHTML == "November") {
        month.innerHTML = "October";

    }
    else if (month.innerHTML == "December") {
        month.innerHTML = "November";

    }
    set_calinder();

}
function set_calinder() {
    for (var i = 1; i <= 40; i++){
        var id = "one" + i;
      
            if (document.getElementById(id).classList.contains("passedday")) {
                document.getElementById(id).classList.remove("passedday");
                
            }


    }

    if (document.getElementById("month").innerHTML == "") {
        const today = new Date()
        document.getElementById("month").innerHTML = today.toLocaleString('default', { month: 'long' })
        document.getElementById("year").innerHTML = today.getFullYear()

    }
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var month1 = "";
    var getDaysInMonth = function(month,year) {
        return new Date(year, month, 0).getDate();
       };
    if (month.innerHTML == "January") {
        month1 = "1";
    }
    else if (month.innerHTML == "February") {
        month1 = "2";
    }
    else if (month.innerHTML == "March") {
        month1 = "3";

    }
    else if (month.innerHTML == "April") {
        month1 = "4";

    }
    else if (month.innerHTML == "May") {
        month1 = "5";

    }
    else if (month.innerHTML == "June") {
        month1 = "6";

    }
    else if (month.innerHTML == "July") {
        month1 = "7";

    }
    else if (month.innerHTML == "August") {
        month1 = "8";

    }
    else if (month.innerHTML == "September") {
        month1 = "9";

    }
    else if (month.innerHTML == "October") {
        month1 = "10";

    }
    else if (month.innerHTML == "November") {
        month1 ="11";

    }
    else if (month.innerHTML == "December") {
        month1 ="12";

    }
    var day = new Date(year.innerHTML + "-" + month1 + "-01").getDay();
    var number_of_days = getDaysInMonth(month1, year.innerHTML);

    var day_name = "";
    if (day == 1) {
        day_name = "Mon";
    }
    else if (day == 2) {
        day_name = "TUE";
    }
    else if (day == 3) {
        day_name = "WED";
    }
    else if (day ==4) {
        day_name = "THU";
    }
    else if (day ==5) {
        day_name = "FRI";
    }
    else if (day == 0) {
        day_name = "SAT";
    }
    else if (day ==6) {
        day_name = "SUN";
    }
 
    if (day_name == "Mon") {
        for (var i = 1; i <= number_of_days; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = i;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days + 1; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }

        
        
    }

    if (day_name == "TUE") {
        var z = 1;
        for (var i = 2; i <= number_of_days+1; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days + 2; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 2; i++){
            var id = "one" + i;

            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
    else if (day_name == "WED") {
        var z = 1;
        for (var i = 3; i <= number_of_days+2; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days +3; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 3; i++){
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
   else if (day_name == "THU") {
        var z = 1;
        for (var i = 4; i <= number_of_days+3; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days + 4; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 4; i++){
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
        
    else if (day_name == "FRI") {
        var z = 1;
        for (var i = 5; i <= number_of_days+4; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");
    
        }   
        for (var i = number_of_days + 5; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 5; i++){
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
    else if (day_name == "SUN") {
        var z = 1;
        for (var i = 6; i <= number_of_days+5; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days +6; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 6; i++){
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
    else if (day_name == "SAT") {
        var z = 1;
        for (var i = 7; i <= number_of_days+6; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = z;
            z += 1;
            document.getElementById(id).classList.add("enabled");
            document.getElementById(id).classList.remove("disabled");

        
        }
        for (var i = number_of_days +7; i <= 40; i++) {
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");

        }
        for (var i = 1; i < 7 ; i++){
            var id = "one" + i;
            document.getElementById(id).getElementsByTagName("h1")[0].innerHTML = "";
            document.getElementById(id).classList.add("disabled");
            document.getElementById(id).classList.remove("enabled");
        }
        
        
    }
    passed();
}
function passed() {

    var today = new Date();
    const month11 = today.toLocaleString('default', { month: 'long' });

    for (var i = 1; i <= 40; i++){
        var id = "one" + i;
        if (document.getElementById("year").innerHTML < today.getFullYear()) {
            if (document.getElementById(id).classList.contains("enabled")) {
                document.getElementById(id).classList.add("passedday");
                document.getElementById(id).classList.remove("enabled");
                
            }

        }
        else if (document.getElementById("year").innerHTML == today.getFullYear() && document.getElementById("month").innerHTML==month11) {

            if (document.getElementById(id).classList.contains("enabled")) {
                if (document.getElementById(id).innerText < today.getDate()) {
                    document.getElementById(id).classList.add("passedday");
                    document.getElementById(id).classList.remove("enabled");

                }
                
            }
           
        }
        else {

                document.getElementById(id).classList.add("enable");
                document.getElementById(id).classList.remove("passedday");

            
        }
        

    }
}
function clicked(item) {


    if (document.getElementById("times").style.display == "flex" && item.classList.contains("clicked")) {
        document.getElementById("times").style.display = "none";
        item.classList.remove("clicked");
        return;
    }
    document.getElementById("times").style.display = "none";

    for (var i = 1; i <= 40; i++){
        var id = "one" + i;
        document.getElementById(id).classList.remove("clicked");
    }
    if (item.classList.contains("disabled")) {
        return;
    }
    if (item.classList.contains("passedday")) {
        return;
   }
    var times = document.getElementById("times");
    if (times.style.display == "") {
        times.style.display = "none";
    }
    if (times.style.display == "none") {
        times.style.display = "flex";
        var x = document.getElementsByClassName("clicked");
        
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("clicked");
        }
        item.classList.add("clicked");


    }
    else {
        var x = document.getElementsByClassName("clicked");
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("clicked");
        }
        times.style.display = "none";

    }
        }
 

document.querySelectorAll('.time').forEach(item => {
    item.addEventListener('click', event => {
        var full_string = "";
        var times = document.getElementById("times");
        var time = item.innerText;
        var day = document.getElementsByClassName("clicked")[0].innerText;
        var month = document.getElementById("month").innerHTML.slice(0, 3);
        var year = document.getElementById("year").innerHTML;

        full_string += day;
        full_string += " / ";
        full_string += month;
        full_string += " / ";
        full_string += year;
        full_string += " ";
        full_string += time;
        var div = document.createElement("div");
        div.classList.add("piked");

        var h1 = document.createElement("h1");
        h1.innerHTML = full_string;
        var i = document.createElement("i");
        i.classList.add("fas");
        i.classList.add("fa-times-circle");
        i.classList.add("hiii");
        div.appendChild(h1);
        div.appendChild(i);
        var foundd = true;
        for (var i = 0; i < document.getElementsByClassName("piked").length; i++){
      
            if (document.getElementsByClassName("piked")[i].innerText == full_string) {
                foundd = false;
            }
        }
        if (foundd) {
            document.getElementsByClassName("pikker")[0].appendChild(div);

        }
        
        doo();
    })
})

function doo (){
    document.querySelectorAll('.hiii').forEach(item => {
        item.addEventListener('click', event => {
            item.parentElement.parentNode.removeChild( item.parentElement);
        })
    }) 
}

function toform2() {
    var x = 1;
    for (var i = 0; i < document.getElementById("textbox").childNodes.length; i++){
        if (document.getElementById("textbox").childNodes[i].innerHTML == "choices...") {
            x = 0;
        }
    }
    if (x == 0) {
        document.getElementById("textbox").style.borderColor = "red";
        document.getElementById("textbox").style.animationName = "emptybox";
        return;
    }
   
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
    

    var form2 = document.getElementById("form2");
    setTimeout(() => {
        form2.style.display = "none";
    }, 500);
    setTimeout(() => {
        document.getElementById("form3").style.animationName = "come";
        document.getElementById("form3").style.display = "inline-flex";
    }, 500);
    document.getElementById("steps").innerHTML = "Step 3 / 3";

}
function finished(item) {
    if (document.getElementById("pikker").childNodes.length == 5) {
        item.style.borderColor = "red";
        item.style.animationName = "emptybox";
        item.style.backgroundColor = "rgba(0, 162, 255, 0.63)";
        document.getElementById("selectdates").style.color = "red";
        document.getElementById("selectdates").style.animationName = "emptybox";
    }
    else {
        location.replace("../html/firstpage.html")

    }
}
function canels() {
    location.replace("../html/firstpage.html")

}
