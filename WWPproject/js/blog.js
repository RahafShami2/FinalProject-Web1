document.querySelectorAll('.fa-heart').forEach(item => {
    item.addEventListener('click',Event=> col(item))
});

function col(item) {
    if (item.style.color == "red") {
        item.style.color = "white"

    }
    else
    {
        item.style.color = "red"
        }
}
document.getElementById("add").addEventListener("click", add_fourm);
function add_fourm() {
    if (document.getElementById("input_form").style.display == "") {
        document.getElementById("input_form").style.display = "none";
    }

    if(  document.getElementById("input_form").style.display =="none")
        document.getElementById("input_form").style.display = "block";
    else {
        document.getElementById("input_form").style.display = "none";
    }
  
}
document.getElementById("submit").addEventListener("click", add_fo);

function add_fo(){
    var all_forms = document.getElementById("allforms")
    all_forms.classList.add("allforms");
    var main_div = document.createElement("div");
    main_div.classList.add("fourm");
    var left_div = document.createElement("div");   
    left_div.classList.add("left");
    var img = document.createElement("img");
    console.log(document.getElementById("myFile").files[0]);
    img.src = URL.createObjectURL(document.getElementById("myFile").files[0]);
    var right_div = document.createElement("div");
    right_div.classList.add("right");
    var h1 = document.createElement("h1");
    h1.innerHTML = document.getElementById("fname").value;
    var par = document.createElement("p");
    par.innerHTML = document.getElementById("subject").value;
    var controls = document.createElement("div");
    controls.classList.add("fourm-controls");
    controls.classList.add("row");
    var heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    heart.classList.add("col-lg-6");
    controls.appendChild(heart);
    right_div.appendChild(h1);
    right_div.appendChild(par);
    right_div.appendChild(controls);
    left_div.appendChild(img);
    main_div.appendChild(left_div);
    main_div.appendChild(right_div);
    all_forms.insertBefore(main_div, all_forms.firstChild);
    heart.addEventListener("click", Event=> col(heart));
    var x = "ihsanshakhshir@gmail.com";
    var start = x.indexOf("@");
    var y = "";
    for (var i = start+1; i < x.length; i++){
        y += x[i];
    }
        document.getElementById("input_form").style.display = "none";

}
