function clickme(){
    let div_box=document.querySelector(".secret");
    let image=document.createElement("img");
    image.src="static/img/banana.gif";
    div_box.appendChild(image);
}

let button=document.getElementById("button"), count=0
button.onclick=function(){
    count+=1;
    button.innerHTML="Click Me: " + count;
}

let gundam=document.getElementById("gundam"), gun_count=0
gundam.onclick=function(){
    gun_count+=1
    if (gun_count>=5){
        clickme();
        gun_count=0
    }
}

