function simpc(a)
       {
         
           switch(a)
           {
           case "log(":case "sin(":case "cos(":case "pow(":
           case "-":case "*":case "x":case "+":case "/":case ")":
           case "(":case "tan(":case "1":case "2":case "3":case "4":
           case "5":case "6":case "7":case "8":case "9":case "0":
           case ".":case ",":case "Math.PI":case "Math.E":case "y":
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
    function curve()
     {
       
         var ve= document.getElementById("eqn").value;
           var x1=document.getElementById("x1").value;
           var x2=document.getElementById("x2").value;
         var y1=document.getElementById("y1").value;
           var y2=document.getElementById("y2").value;
           var x3=document.getElementById("x3").value;
           var y3=document.getElementById("y3").value;	
   
           var z1=calcuCurve(x1,y1);
           var z2=calcuCurve(x2,y2);
           var z3=calcuCurve(x3,y3);
           var A1=(x2-x1)*(y3-y1)-(x3-x1)*(y2-y1);
           var A2=(x2-x1)*(z3-z1)-(x3-x1)*(z2-z1);
           var A3=(y2-y1)*(z3-z1)-(y3-y1)*(z2-z1);
           var t=A1+A2;
           var C=(y1*A2)-(x1*A3)-(z1*A1);
         if(A1%1==0 && A2%1==0 && A3%1==0 && C%1==0 )
         {
           var a1 =A1;
           var a2=A2;
           var a3=A3;
           var c=C;
         }
         else
         {
           var a1 =A1.toFixed(5);
           var a2=A2.toFixed(5);
           var a3=A3.toFixed(5);
           var c=C.toFixed(5);
         }
         if((A1 == A3 || A1==0 || t==0 ) && (ve=="x*x" || ve=="y*y"))
           {
                alert("No Parabola possible ,that can passes through these  points.");
           }
           else                                         //A1+"y<sup>2</sup>-("+A2+")y+("+t+")x+("+C+")=0";
           { 
           var txt=a1+"("+ve+")+"+"("+-a2+")y+"+"("+a3+")x+"+"("+c+") = 0";
           var txt1=txt.replace("x*x","x<sup>2</sup>");
           var txt2=txt1.replace("y*y","y<sup>2</sup>");
           var txt3=txt2.replace("+(-","-(");
             document.getElementById("ansQ").innerHTML=txt3;
             }
     }
     function calcuCurve(x,y)
     {
           var ve= document.getElementById("eqn").value;
           var k1=ve.replace("log","Math.log");
           var k2=k1.replace("sin","Math.sin");
           var k3=k2.replace("cos","Math.cos");
           var k4=k3.replace("pow","Math.pow");
           var k5=k4.replace("tan","Math.tan");
           var exc=k5.includes("x+");
           var exc2=k5.includes("+x");
           var exc3=k5.includes("y+");
           var exc4=k5.includes("+y");
           if(exc == true || exc2==true || exc3==true|| exc4==true)
           {
             var k6=k5.replace("x+","Math.pow(x,1)+");
             var k7=k6.replace("+x","+Math.pow(x,1)");
             var k8=k7.replace("y+","Math.pow(y,1)+");
             var k9=k8.replace("+y","+Math.pow(y,1)");
             var k=eval(k9);
           }
           else
           {
             var k=eval(k5);
           }
           return k;
     }