document.getElementById("fecsubmit").onclick = function()
{
  let top = (document.getElementById("fgw").value/100) - (1-(document.getElementById("few").value/100)) * document.getElementById("cg").value/100
  document.getElementById("fecpercentages").innerHTML = ((top/(document.getElementById("few").value/100)) *100).toFixed(2) + "%"
  document.getElementById("fecletter").innerHTML = getLetterGrade2(((top/(document.getElementById("few").value/100)) *100).toFixed(2))
}

document.getElementById("fecreset").onclick = function()
{
  document.getElementById("fgw").value = ""
  document.getElementById("few").value=""
  document.getElementById("cg").value=""
  
}

let getLetterGrade2 = function(pg)
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