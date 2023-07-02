// sem calculator
document.getElementById("semgpasubmit").onclick = function()
{ 
  
  const grades = [] 
  let top=0
  let cw =0;

  for( let i=1;i<7;i++)
  {
    grades[i-1] = document.getElementById("lg"+i).value * document.getElementById("cw" +i).value
    
    if(document.getElementById("cw"+i).value != "")
    {
      cw=cw+parseFloat(document.getElementById("cw" +i).value)

    }
    
    
  }

  for(let j=0;j<grades.length;j++)
  {
    top =top+grades[j];
  }
  document.getElementById("gpasemresult").innerHTML=(top/cw).toFixed(2)

}


//cum calculator
document.getElementById("cumgpasubmit").onclick = function()
{

  let totalGPA = 0;
  let bottom =0;
  for( let i=1;i<11;i++)
  {
    
    if(document.getElementById("gpasem" + i).value != "")
    {
      totalGPA = totalGPA + parseFloat(document.getElementById("gpasem" + i).value)
      bottom++;
    }
    
    
    
  }
  document.getElementById("gpacumresult").innerHTML = totalGPA/bottom
  
  



}