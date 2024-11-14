var inputBox = document.getElementById("input-box");
var list = document.getElementById("list");

function add(){
    if(inputBox.value === ""){
        alert("شما باید کاری را بنویسید");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
        saveData();
    }
    saveData();
    inputBox.value = "";
   
}


function tik(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

     }



     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
} ;



list.addEventListener("click",tik);
add();

function saveData(){
    localStorage.setItem("data", list.innerHTML);
    list.innerHTML = localStorage.getItem("data");
}






