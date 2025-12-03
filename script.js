function checkRoll(){
  let roll = document.getElementById("roll").value;
  if(roll == ""){
    document.getElementById("errorMsg").style.display = "flex";
    document.querySelector(".info").style.display = "none";
        return false;
    } else {
          document.getElementById("errorMsg").style.display = "none";
          document.querySelector(".info").style.display = "block";

        return false;
    }
}


