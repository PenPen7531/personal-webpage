
function myFunction(){
    var button=document.getElementById("button");
    let text=document.getElementById("collapse");
    if (text.style.display==="none"){
        text.style.display="inline";
        button.innerHTML="View Less";
    }
    else{
        text.style.display="none";
        button.innerHTML="View More"
    }
}