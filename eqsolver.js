
    function simpc(a)
    {
      var z= (f.d[f.d.selectedIndex].text)
      if(z=="F(X)")
      {
        switch(a)
        {
        case "log(":case "sin(":case "cos(":case "pow(":
        case "-":case "*":case "x":case "+":case "/":case ")":
        case "(":case "tan(":case "1":case "2":case "3":case "4":
        case "5":case "6":case "7":case "8":case "9":case "0":
        case ".":case ",":case "Math.PI":case "Math.E":
            document.getElementById("eqn").value=document.getElementById("eqn").value+a;
        break;
        case "=":var s=eval( document.getElementById("eqn").value);
                 document.getElementById("eqn").value=s;
                 break;
        case "ac": document.getElementById("eqn").value="";
                    break;
        case "back": var str =document.getElementById("eqn").value;
                     str = str.substr(0,str.length-1);
                     document.getElementById("eqn").value =str;
                     break; 
        }
      }
      else if(z=="F'(X)")
      {
        switch(a)
        {
        case "log(":case "sin(":case "cos(":case "pow(":
        case "-":case "*":case "x":case "+":case "/":case ")":
        case "(":case "tan(":case "1":case "2":case "3":case "4":
        case "5":case "6":case "7":case "8":case "9":case "0":
        case ".":case ",":case "Math.PI":case "Math.E":
            document.getElementById("eqnd").value=document.getElementById("eqnd").value+a;
        break;
        case "=":var s=eval( document.getElementById("eqnd").value);
                 document.getElementById("eqnd").value=s;
                 break;
        case "ac": document.getElementById("eqnd").value="";
                    break;
        case "back": var str =document.getElementById("eqnd").value;
                     str = str.substr(0,str.length-1);
                     document.getElementById("eqnd").value =str;
                     break; 
        }
      }
    }
    function ansW(x)
    {
        var wm=document.getElementById("eqn").value;
        document.getElementById("ansQ1").innerHTML="is solution of "+wm+" = 0";
        var k1=wm.replace("log","Math.log");
        var k2=k1.replace("sin","Math.sin");
        var k3=k2.replace("cos","Math.cos");
        var k4=k3.replace("pow","Math.pow");
        var k5=k4.replace("tan","Math.tan");
        var exc=k5.includes("x+");
        var exc2=k5.includes("+x");
        if(exc == true || exc2==true)
        {
          var k6=k5.replace("x+","Math.pow(x,1)+");
          var k7=k6.replace("+x","+Math.pow(x,1)");
          var k=eval(k7);
        }
        else
        {
          var k=eval(k5);
        }
        var wd=document.getElementById("eqnd").value;
        var kd1=wd.replace("log","Math.log");
        var kd2=kd1.replace("sin","Math.sin");
        var kd3=kd2.replace("cos","Math.cos");
        var kd4=kd3.replace("pow","Math.pow");
        var kd5=kd4.replace("tan","Math.tan");
        var excd=kd5.includes("x+");
        var excd2=kd5.includes("+x");
        if(excd == true || excd2==true)
        {
          var kd6=kd5.replace("x+","Math.pow(x,1)+");
          var kd7=kd6.replace("+x","+Math.pow(x,1)");
          var kd=eval(kd7);
        }
        else
        {
          var kd=eval(kd5);
        }
      var h=x-(parseFloat(k)/parseFloat(kd));
      return h;
      
    }
    function eqnSolve()
    {
        var x=eval(document.getElementById("inpux").value);
        var arr=[x];
        for(i=1;i<7;i++)
        {
            arr[i]=ansW(arr[i-1]);
        }
        var pk=arr[6];
        document.getElementById("ansQ").innerHTML="x = "+pk.toFixed(14);
    }
    function learnAbout()
    {
      document.getElementById("show").style.display="none";
      document.getElementById("hide").style.display="inline";
      document.getElementById("howit").style.display="block";
    }
    function hideA()
    {
      document.getElementById("hide").style.display="none";
      document.getElementById("show").style.display="inline";
      document.getElementById("howit").style.display="none";
    }