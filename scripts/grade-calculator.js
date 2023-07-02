document.getElementById("gcsubmit").onclick = function()
{
  const grades=[];
  for( let i=1;i<7;i++)
  {
    grades[i-1] = (document.getElementById("g" + i).value/100) * document.getElementById("w" + i).value
    // if(document.getElementById("w" + i+1).value ==null || document.getElementById("g" + i+1).value==null)
    // {
    //   break;
    // }
    
  }
  
  let percentgrade =0;
  for( let x=0;x<grades.length;x++)
  {
    percentgrade = percentgrade + grades[x];
    // console.log(grades[x])
  }

  
 
  document.getElementById("gcpercentgrade").innerHTML = (percentgrade).toFixed(2) +"%";
  document.getElementById("gclettergrade").innerHTML = getLetterGrade(percentgrade)
  
}

document.getElementById("gcreset").onclick = function()
{
  for( let i=1;i<7;i++)
  {
    document.getElementById("g"+i).value=""
    document.getElementById("w"+i).value=""
    document.getElementById("gccg"+i).value=""
    document.getElementById("gcpercentgrade").innerHTML="--"
    document.getElementById("gclettergrade").innerHTML="--"


    
    
  } 
    
   
  
  
  
}

let getLetterGrade = function(pg)
{ 
  if(pg>=90)
  {
    if(pg>=97)
    {
      return "A+"

    }
    else if(pg>=93)
    {
      return "A"
    }
    else
    {
      return "A-"
    }


  }
  else if(pg>=80)
  {
    if(pg>=87)
    {
      return "B+"

    }
    else if(pg>=83)
    {
      return "B"
    }
    else
    {
      return "B-"
    }
  }
  else if(pg>=70)
  {
    if(pg>=77)
    {
      return "C+"

    }
    else if(pg>=73)
    {
      return "C"
    }
    else
    {
      return "C-"
    }
  }
  else if(pg>=60)
  {
    if(pg>=67)
    {
      return "D+"

    }
    else if(pg>=63)
    {
      return "D"
    }
    else
    {
      return "D-"
    }
  }
  else
  {
    return "F"

  }


}