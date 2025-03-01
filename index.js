const input = document.getElementById("button");
function addingEventListener() {
    
    function clickAlert(){
        alert("I was clicked on!");
    }
  input.addEventListener("click", clickAlert) ; 
}

addingEventListener();
