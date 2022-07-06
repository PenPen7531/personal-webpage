
function myFunction(){
    let button=document.getElementById("button");
    let text=document.getElementById("collapse");
    let list=document.querySelector(".inner-grid");
    if (text.style.display === "inline"){
        text.style.display="none";
        list.style.display="flex"
        button.innerHTML="View More";
    }
    else{
        text.style.display="inline";
        button.innerHTML="View Less"
        list.style.display="none"
    }
}
