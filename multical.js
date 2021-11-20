var xa=document.getElementById("Ansa");
var xb=document.getElementById("Ansb");
var xc=document.getElementById("Ansc");
var xd=document.getElementById("Ansd");
function info(z)
{
    if(z == 'o')
    {
      document.querySelector('dialog').style.display="block";
      document.getElementById("infobtn").style.display="none";
      document.getElementById("hidebtn").style.display="inline";
    }
    else if (z == 'x')
    {
      document.querySelector('dialog').style.display="none";
      document.getElementById("infobtn").style.display="inline";
      document.getElementById("hidebtn").style.display="none";
    }
 
}
function matrixFs(x)
{
    var ya=document.getElementById("ma1").value;
    var yb=document.getElementById("mb1").value;
    var yc=document.getElementById("mc1").value;
    var yd=document.getElementById("md1").value;

   var va=document.getElementById("ma2").value;
   var vb=document.getElementById("mb2").value;
   var vc=document.getElementById("mc2").value;
   var vd=document.getElementById("md2").value;

    if(x == 'plus')
    {
       var suma=parseFloat(ya)+parseFloat(va);
       var sumb=parseFloat(yb)+parseFloat(vb);
       var sumc=parseFloat(yc)+parseFloat(vc);
       var sumd=parseFloat(yd)+parseFloat(vd);
    }
    else if (x == 'minus')
    {
     var suma=parseFloat(ya)-parseFloat(va);
     var sumb=parseFloat(yb)-parseFloat(vb);
     var sumc=parseFloat(yc)-parseFloat(vc);
     var sumd=parseFloat(yd)-parseFloat(vd);
    }
    else if(x == 'multi')
    {
      var suma=(parseFloat(ya)*parseFloat(va))+(parseFloat(yb)*parseFloat(vc));
      var sumb=(parseFloat(ya)*parseFloat(vb))+(parseFloat(yb)*parseFloat(vd));
      var sumc=(parseFloat(yc)*parseFloat(va))+(parseFloat(yd)*parseFloat(vc));
      var sumd=(parseFloat(yc)*parseFloat(vb))+(parseFloat(yd)*parseFloat(vd));
    }
    xa.innerHTML=suma;
    xb.innerHTML=sumb;
    xc.innerHTML=sumc;
    xd.innerHTML=sumd;
}
function matPow()
{
   var n=prompt("Enter value of N :","");
   var ya=document.getElementById("ma1").value;
   var yb=document.getElementById("mb1").value;
   var yc=document.getElementById("mc1").value;
   var yd=document.getElementById("md1").value;
  
   var D=parseFloat(ya)+parseFloat(yd);
   var det=(parseFloat(ya)*parseFloat(yd))-(parseFloat(yb)*parseFloat(yc));
   if(D*D-4*det<0)
   {
     alert("Ans is imagenary,& become imagenary function input.can't countable.");
     document.getElementById("disp").value="";
     exit();
   }
   if(det == 0 && n<=0)
   {
       alert("Sorry, det(A)=0 .So,no nagative power is possible.");
       document.getElementById("disp").value ="";
       exit();
   }
   var l1=(parseFloat(D)+Math.sqrt(D*D-4*det))/2;
   var l2=(parseFloat(D)-Math.sqrt(D*D-4*det))/2;
   if(l1 == l2)
   {
     var f=Math.pow(l1,n);
     xa.innerHTML=f.toFixed(3);
     xb.innerHTML=0;
     xc.innerHTML=0;
     xd.innerHTML=f.toFixed(3);
     document.getElementById("disp").value = `|A^${n}| = ` + f*f;
   }
  else
  {
   
   var B1=parseFloat(yb)*(parseFloat(l1)-parseFloat(ya));
   var B2=parseFloat(yb)*(parseFloat(l2)-parseFloat(ya));

   var f1=Math.pow(l1,n);
   var f2=Math.pow(l2,n);

   var detA=parseFloat(f1)*parseFloat(f2);
   document.getElementById("disp").value = `|A^${n}| = ` +detA;
   var BB=parseFloat(yb)*(parseFloat(l2)-parseFloat(l1));

   var mR=(parseFloat(B2)*parseFloat(f1)-parseFloat(B1)*parseFloat(f2))/parseFloat(BB);
   var mC=(parseFloat(B2)*parseFloat(f2)-parseFloat(B1)*parseFloat(f1))/parseFloat(BB);
   var bR=(Math.pow(yb,2))*(parseFloat(f2)-parseFloat(f1))/parseFloat(BB);
   var bC=parseFloat(B1)*parseFloat(B2)*(parseFloat(f1)-parseFloat(f2))/((Math.pow(yb,2))*parseFloat(BB));

       xa.innerHTML=mR.toFixed(4);
       xb.innerHTML=bR.toFixed(4);
       xc.innerHTML=bC.toFixed(4);
       xd.innerHTML=mC.toFixed(4);
 
  }  
}
function selectPow()
{
  var w= (f2.funs[f2.funs.selectedIndex].text)
  var n=document.getElementById("N").value;
     var a=document.getElementById("A").value;	   
  var b=document.getElementById("B").value;

  if(w == "sin(aN+b)")
  {
    var sin_sum=0;
    for(i=1;i<=n;i++)
    {
     sin_sum=sin_sum + Math.sin((parseFloat(a)*parseFloat(i))+parseFloat(b));
    }
       document.getElementById("disp").value=sin_sum.toFixed(9);
  }
  else if(w == "(sin(aN+b)^2)")
  {
    var sin_sum2=0;
    for(i=1;i<=n;i++)
    {
     sin_sum2=sin_sum2 + (Math.sin((parseFloat(a)*parseFloat(i))+parseFloat(b)))*(Math.sin((parseFloat(a)*parseFloat(i))+parseFloat(b)));
    }
       document.getElementById("disp").value=sin_sum2.toFixed(9);
  }
  else if(w == "(cos(aN+b)^2)")
  {
    var cos_sum2=0;
    for(i=1;i<=n;i++)
    {
     cos_sum2=cos_sum2 + (Math.cos((parseFloat(a)*parseFloat(i))+parseFloat(b)))*(Math.cos((parseFloat(a)*parseFloat(i))+parseFloat(b)));
    }
       document.getElementById("disp").value=cos_sum2.toFixed(9);
  }
  else if(w == "1/(N+a)")
  {
    if(a==0)
    {
            var sumu=0;
      for(i=1;i<=n;i++)
      {
        sumu=sumu+(1/i);
      } 
      document.getElementById("disp").value=sumu.toFixed(8);
    }
    else
    {
      var sumv=0;
      var sumv2=0;
      var y=parseFloat(n)+parseFloat(a);
      for(j=1;j<=y;j++)
      {
        sumv=sumv+(1/j);
      } 
      for(j=1;j<=a;j++)
      {
        sumv2=sumv2+(1/j);
      } 
      var anss=parseFloat(sumv)-parseFloat(sumv2);
      document.getElementById("disp").value=anss.toFixed(8);
    }
  }
  else if(w == "1/(N^2)")
  {
    var sumw=0;
    for(i=1;i<=n;i++)
    {
     sumw=sumw+1/(i*i);
    }
       document.getElementById("disp").value=sumw.toFixed(8);
  }
  else if(w == "cos(aN+b)")
  {
    var cos_sum=0;
    for(i=1;i<=n;i++)
    {
     cos_sum=cos_sum + Math.cos((parseFloat(a)*parseFloat(i))+parseFloat(b));
    }
    document.getElementById("disp").value=cos_sum.toFixed(9);
  }
 
}
function clearVal()
{
var ids=['ma1','mb1','mc1','md1','ma2','mb2','mc2','md2','disp','A','B','N'];
for(var m=0;m<ids.length;m++)
{
  document.getElementById(ids[m]).value="";
}
xa.innerHTML="";
xb.innerHTML="";
xc.innerHTML="";
xd.innerHTML="";
document.getElementById('res').innerHTML="";
}
function simpc(x)
{
  
   switch(x)
   {
     case "1":case "2":case "3":case "4":case "5":case "6":
     case "7":case "8":case "9":case "0":case "+":case "-": 
     case "/":case "*":case ".":case "%":case "(":case ")":
     case "Math.sin(":case "Math.PI":case "Math.E":case "Math.cos(":
     case "Math.log(":case "Math.exp(":case "Math.tan(":case "Math.atan(":
     case "Math.asin(":case "Math.acos(":case ",":
     document.getElementById('disp').value=document.getElementById('disp').value+x;
     break;
     case "=":
              try
               {
                var f= eval(document.getElementById('disp').value);
                if(f%1==0)
                {
                  document.getElementById('disp').value=f;
                }
                else
                {
                  document.getElementById('disp').value=f.toFixed(9);
                }
               }
               catch(e)
               {
                 document.getElementById("disp").value="Syntax error !";
               }
               break;
      case "back": var str =document.getElementById("disp").value;
                   str = str.substr(0,str.length-1);
                   document.getElementById("disp").value =str;
                   break; 
      case "Math.pow(" :document.getElementById("res").innerHTML="pow(a,b)";
                        document.getElementById('disp').value=document.getElementById('disp').value+x;
                        break;                              
      case "ac": document.getElementById('disp').value="";
                 break;
      case "!": factorialA(); 
                break;
      case "sqr": var g=eval(document.getElementById("disp").value);
                  var gsqr=parseFloat(g)*parseFloat(g);
                  document.getElementById("disp").value=gsqr.toFixed(6);
                  break;
      case "sqrt":var t=eval(document.getElementById("disp").value);
                  var tsqrt=Math.sqrt(t);
                  document.getElementById("disp").value=tsqrt.toFixed(6);
                  break;            
    }
}  
function factorialA()
{
  var k=eval(document.getElementById("disp").value);
       if(k%1 == 0 && k >= 0)
           {
         document.getElementById("res").innerHTML=k+"! =";
            document.getElementById("disp").value=facti(k);
        }
       else if((k > 0) == true)
        {
          document.getElementById("res").innerHTML="("+k.toFixed(5)+")! =";
          document.getElementById("disp").value=factR(k);
        } 
       else if((k < 0)  == true)
        {
          var xk =-parseFloat(k);
          var xkh=parseFloat(xk)+0.5;
          if(xk%1 == 0)
          {
            var px=(Math.PI)*parseFloat(xk);
            var cos1=-Math.cos(px);
            var str1 =(Math.PI*parseFloat(cos1))/facti(k+1);
            document.getElementById("res").innerHTML="("+k+")! =";
            document.getElementById("disp").value="("+str1+")i";
          } 
          else
          {
            var xk=0-parseFloat(k);
            if(xk > 14.5)
            {
              alert("it's something/("+xk+")! , it become 0.000.. still 10 places, so almost become zero. So value will consider almost zero (but imaginary)");
            }
            if(k > -1)
            {
              alert("Sorry, student  is still find ans for (k= between 0 and -1 )! ");
              exit();
            }
            
            var str3=factR(k);
            var px=(Math.PI)*parseFloat(xk);
            var sin1=Math.sin(px);
            var str2 =(Math.PI*parseFloat(sin1))/parseFloat(str3);
            var cos1=-Math.cos(px);
            if (xkh%1 == 0)
            {
              document.getElementById("res").innerHTML="("+k+")! =";
              document.getElementById("disp").value=str2.toFixed(12);
            }
            else
            {
              var str1 =(Math.PI*parseFloat(cos1))/parseFloat(str3);
              document.getElementById("res").innerHTML="("+k+")! =";
              document.getElementById("disp").value="("+str2.toFixed(10)+") + i("+str1.toFixed(10)+")";
            }
           
          }            
        }  
        
}
function facti(k)
{
  if(k < 0){var w=-parseFloat(k);}
  else{var w=parseFloat(k);}
  if(k == 0)
  {
    return 1;
  }
  else
  {
   var fctk =1;
      while( w != 0)
      {
        fctk=fctk*w;
        w--;
      }
   return fctk;
  }
}
function factR(k)
{
     var k=eval(document.getElementById("disp").value);
     if(k >=0 )
     {
       var j=parseFloat(k);
     }
     else if(k < 0){var j = -parseFloat(k)-1;}
     var e=Math.E;
     var pi =Math.PI;
     var c=Math.floor(j);
        var n =c+0.5;
        var a =parseFloat(j)-parseFloat(n);
        var p=2*(c+1);
        var q=p/2;
        var fctp =1;
        var fctq =1;
       while( p != 0)
       {
          fctp=fctp*p;
          p--;
       }
       while(q !=0)
       {
           fctq=fctq*q;
               q--;
       }
  
        var x3=fctp/fctq;
        var x1=(parseFloat(j)+0.81)/(4*(parseFloat(n)+0.81));
     var x2=(parseFloat(j)+0.81)/parseFloat(e);
        var cx=Math.sqrt(pi);
 
        var a1=Math.pow(x1,(n+0.5));
        var a2=Math.pow(x2,a);
  
        var y=parseFloat(a1)*parseFloat(a2)*parseFloat(x3)*parseFloat(cx);
     var factorialA=y.toFixed(5);
        return factorialA;
}