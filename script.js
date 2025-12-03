function checkRoll()
{
 let roll = document.getElementById("roll").value;
 if(roll == ""){
  
  document.getElementById("errorMsg").style.display = "flex";
  return false;
 }
 else
 {
    document.getElementById("errorMsg").style.display = "none";
  return true;
 }
}