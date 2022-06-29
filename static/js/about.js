
function myFunction(){
    let button=document.getElementById("button");
    let text=document.getElementById("collapse");
    if (text.style.display === "inline"){
        text.style.display="none";
        button.innerHTML="View More";
    }
    else{
        text.style.display="inline";
        button.innerHTML="View Less"
    }
}
