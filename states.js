window.onload=function()
    {
        document.getElementById("3x").style.display="none";
        document.getElementById("4x").style.display="none";
    }
    function classtype()
    {
        var clt= document.getElementById("cltype").value;
        // document.getElementById("expr").innerHTML= clt;
         if(clt == "Non-Uniformed")
         {  
             var classed=["1","2","3","sp1","sp2","sp3","2x"];
             for(i=0;i<7;i++)
             {
                document.getElementById(classed[i]).style.display="none";
             }
             document.getElementById("clsn").style.display="inline";
             document.getElementById("clno").style.display="inline";
         }
         else if(clt == "Uniformed")
         {
             var classed=["1","2","3","sp1","sp2","sp3","2x"];
             for(i=0;i<7;i++)
             {
                document.getElementById(classed[i]).style.display="inline";
             }
             document.getElementById("clsn").style.display="none";
             document.getElementById("clno").style.display="none";

         }
    }
    function theme(M)
    {
        if(M == "dark")
        {
          document.getElementById("darkM").style.display="none";
          document.getElementById("lightM").style.display="block";
          document.querySelector("body").style.background ="rgba(1, 6, 39, 0.967)";
          document.getElementById("classedata").style.background="rgba(1, 6, 39, 0.967)";
          document.getElementById("unclass").style.background="rgba(1, 6, 39, 0.967)";
          document.getElementById("classedata").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(255, 255, 255, 0.582)";
          document.getElementById("unclass").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(255, 255, 255, 0.582)";
          document.getElementById("answ").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(255,255,255, 0.582)";
          for(i=1;i<=5;i++)
          {
            document.getElementById("x"+i).style.color="snow";
          }
          var spanID=["tmean","tmod","tmid","tcv","tdev","tsk","sp1","sp2","sp3","int","clsn"];

          for(i=0;i<=10;i++)
          {
            document.getElementById(spanID[i]).style.color="snow";
          }
        }
        else if(M == "light")
        {
            document.getElementById("darkM").style.display="block";
          document.getElementById("lightM").style.display="none";
          document.querySelector("body").style.background ="snow";
          document.getElementById("classedata").style.background="snow";
          document.getElementById("unclass").style.background="snow";
          for(i=1;i<=5;i++)
          {
            document.getElementById("x"+i).style.color="black";
          }
          document.getElementById("classedata").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(0,0,0, 0.582)";
          document.getElementById("unclass").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(0,0,0, 0.582)";
          document.getElementById("answ").style.boxShadow="-3px -3px 7px rgba(0, 0, 0, 0.06), 3px 3px 5px rgba(0,0,0, 0.582)";
        
          var spanID=["tmean","tmod","tmid","tcv","tdev","tsk","sp1","sp2","sp3","int","clsn"];
          for(i=0;i<=10;i++)
          {
              document.getElementById(spanID[i]).style.color="black";
          }

        }
    }
    function showinfo()
    {
        document.getElementById("demon").style.display="block";
    }
    function hideinfo()
    {
        document.getElementById("demon").style.display="none";
    }
    function onFocus(x)
     { 
        if(x==4)
        {
            document.getElementById("4x").style.display="none";
            document.getElementById("2x").style.display="inline";
            x = 1 ;
        }
        document.getElementById(x).focus();
        if(x=="1")
        { 
          document.getElementById("1x").style.display="none";
          document.getElementById("2x").style.display="inline";
        }
        if(x=="2")
        {
            document.getElementById("2x").style.display="none";
            document.getElementById("3x").style.display="inline";
        }
        if(x=="3")
        {
            document.getElementById("3x").style.display="none";
            document.getElementById("4x").style.display="inline";
        }
     }
    function selectype(x)
     {
       if(x=="ungp")
       {
        document.getElementById("data1").style.display="block";
        document.getElementById("grpData").style.display="none";
        document.getElementById("gp").style.display="block";
        document.getElementById("ungp").style.display="none";
       }
       else if(x =="gp")
       {
        document.getElementById("data1").style.display="none";
        document.getElementById("grpData").style.display="block";
        document.getElementById("ungp").style.display="block";
        document.getElementById("gp").style.display="none";
       }
    }
    function createDiv(x)
     {
        if(x == "crt")
        {
          document.getElementById("data2").style.display="block";
          document.getElementById("crdiv").style.display="none";
          document.getElementById("dldiv").style.display="block";
        }
        else if(x == "del")
        {
          document.getElementById("data2").style.display="none";
          document.getElementById("crdiv").style.display="block";
          document.getElementById("dldiv").style.display="none";
        }
     }
    function mean(x)
     {
        let sqr=0,sum=0,i,n=document.getElementById("num"+x).value;
        let arr=[];
        //arr[0]=0;
        for(i=0;i<= n-1; i++)
        {
           arr[i] = prompt(parseFloat(i)+1+" item" ,"");
        }
        for(i=0;i <= n-1 ; i++)
        {
          sum +=  parseFloat(arr[i]);
        }

        
        let avg = parseFloat(sum)/parseFloat(n);
        document.getElementById("items"+x).innerHTML = "items = "+arr;
        var abc = arr.sort(function(a,b){return a-b});
        document.getElementById("itemsort"+x).innerHTML = "items in order = "+abc;
        if(n%2 == 1)
        {
            let k= (parseFloat(n)+1)/2;
            document.getElementById("Median"+x).innerHTML = "Median(M) ="+ abc[k-1];
        }
        else if (n%2 == 0)
        {
            let k1= parseFloat(n)/2;
            let k2=parseFloat(k1)+1;
            let med = (parseFloat(abc[k1-1])+parseFloat(abc[k2-1]))/2;
            document.getElementById("Median"+x).innerHTML = "Median(M) ="+ med;
        }
        for(i=0;i<=n-1;i++)
        {
            sqr += parseFloat(abc[i])* parseFloat(abc[i]);
        }
        let D = (parseFloat(sqr)/parseFloat(n))-(Math.pow(avg,2));
        document.getElementById("sigma"+x).innerHTML ="Deviation (Sigma) = "+ Math.sqrt(D);
        document.getElementById("itemsort"+x).innerHTML = "items in order = "+arr;
        document.getElementById("sum"+x).innerHTML = "&sum; x = "+ sum +"  ,  "+ "&sum; f = "+ n;
        document.getElementById("Mean"+x).innerHTML = "mean (X)= "+ avg.toFixed(4);
        let CV= (Math.sqrt(D)/parseFloat(avg))*100;
        document.getElementById("cv"+x).innerHTML = "C.variation = " + CV;
     }
    function groupData()
     {
        document.getElementById("table1").style.display="block";
        document.getElementById("answ2").style.display="block";
        let n=document.getElementById("numt").value;
        let xitem=[],fitem=[],i,sumf=0,multif=[],sumfx=0; 
        for(i=0;i<= n-1; i++)
        {
           xitem[i] = prompt("items" ,"");
        }
        for(i=0;i<= n-1; i++)
        {
           fitem[i] = prompt("freqs" ,"");
        }
        for(i=0;i<=n-1;i++)
        {
            sumf += parseFloat(fitem[i]);
        }
        for(i=0;i<=n-1;i++)
        {
            multif[i] = parseFloat(fitem[i])*parseFloat(xitem[i]);
        }
        for(i=0;i<=n-1;i++)
        {
            sumfx += parseFloat(multif[i]);
        }

        var sqrx=[],sumsqrx=[],sumQ=0;
        for(i=0;i<=n-1;i++) //x*x
        {
            sqrx[i] = parseFloat(xitem[i])*parseFloat(xitem[i]);
        }
        for(i=0;i<=n-1;i++) // f*x*x
        {
            sumsqrx[i]= parseFloat(fitem[i])*parseFloat(sqrx[i]);
        }
        for(i=0;i<=n-1;i++) // sum of f*x*x
        {
           sumQ +=parseFloat(sumsqrx[i]);
        }

        var table=document.getElementById("table1");
        for(i=1;i<=n;i++)
        {
            var row=table.insertRow(i);
            var c1=row.insertCell(0);
            var c2=row.insertCell(1);
            var c3=row.insertCell(2);
            var c4=row.insertCell(3);
            var c5=row.insertCell(4);
            c1.innerHTML=xitem[i-1];
            c2.innerHTML=fitem[i-1];
            c3.innerHTML=multif[i-1];
            c4.innerHTML=sqrx[i-1];
            c5.innerHTML=sumsqrx[i-1];
        }
        var rowl=table.insertRow(1+parseFloat(n));
        var clo=rowl.insertCell(0);
        var cl=rowl.insertCell(1);
        var cl1=rowl.insertCell(2);
        var cl2=rowl.insertCell(3);
        var cl3=rowl.insertCell(4);
        clo.innerHTML="";
        cl.innerHTML="&sum;f = "+sumf;
        cl1.innerHTML="&sum;fx = "+sumfx;
        cl2.innerHTML="";
        cl3.innerHTML="&sum;fx<sup>2</sup> = "+sumQ;
        var mean=parseFloat(sumfx)/parseFloat(sumf);
        document.getElementById("t1mean").innerHTML="Mean (X) = "+mean;

         // calculating deviation

         var Dv = (parseFloat(sumQ)/parseFloat(sumf)) - Math.pow(mean,2);
         document.getElementById("t1dev").innerHTML= "Standerd Deviation (sigma) = "+Math.sqrt(Dv);

         // calculating CV

         var Cv = parseFloat(Math.sqrt(Dv))/parseFloat(mean)*100;
         document.getElementById("t1cv").innerHTML= "Coefficient of Variation (CV) = "+ Cv;

     }
    function classedata()
     {
         var clt= (f.s[f.s.selectedIndex].text)
         
         document.getElementById("answ").style.display="block";
         document.getElementById("table2").style.display="block";
         let fitem=[],fm=[];
         let a=document.getElementById("1").value;
         let b=document.getElementById("2").value;
         var l=document.getElementById("3").value;

         if(clt == "Uniformed")
         {
            var k = (parseFloat(b)-parseFloat(a))/parseFloat(l);
         }
         else if(clt == "Non-Uniformed")
         {
            var k =document.getElementById("clno").value;
         }

         var sumfx=0,sumcf=0;
         //input freqency data
        for(i=0;i<= k-1; i++)
        {
           fitem[i] = prompt( 1+parseFloat(i)+" no. frequency" ,"");
           fm[i] = fitem[i];
        }
        var table=document.getElementById("table2");
        var multifx=[],cf=[],x=[];
        //calculate cf
        cf[0]=fitem[0];
        for(i=0;i<=k-1;i++)
        {
          cf[i+1] = parseFloat(cf[i])+parseFloat(fitem[i+1]);
        }
        var sqrx=[],sumsqrx=[],sumQ=0;
        var str1=[];
        var classf=[];
      if(clt == "Uniformed")
      {
         //implement x
        for(i=0;i<=k-1;i++)
        {
            x[i] = parseFloat(a)+(i+0.5)*parseFloat(l);
        }
         
        // implement class

        for(i=1;i<=k;i++)
        {
            classf[i-1] =parseFloat(a)+(i-1)*parseFloat(l) +" - "+( parseFloat(a)+i*parseFloat(l));
        }
       
      }
      else if(clt == "Non-Uniformed")
      {
        //enter class & store value of x
        
        for( i=1;i<=k;i++)
        {
          classf[i-1] = prompt("enter class no. " + i ,""); 
        }
       
        for(i=1;i<=k;i++)
        {
           str1=classf[i-1].split("-");
           x[i-1]= (parseFloat(str1[1])+parseFloat(str1[0]))/2;
        }
     }
        // calculate f*x & sum
        for(i=0;i<=k-1;i++)
        {
            multifx[i] = parseFloat(fitem[i])*parseFloat(x[i]);
        }
        for(i=0;i<=k-1;i++)
        {
            sumfx += parseFloat(multifx[i]);
        }
        //calculating x*x , f*x*x 
        
        for(i=0;i<=k-1;i++) //x*x
        {
            sqrx[i] = parseFloat(x[i])*parseFloat(x[i]);
        }
        for(i=0;i<=k-1;i++) // f*x*x
        {
            sumsqrx[i]= parseFloat(fm[i])*parseFloat(sqrx[i]);
        }
        for(i=0;i<=k-1;i++) // sum of f*x*x
        {
           sumQ +=parseFloat(sumsqrx[i]);
        }
    
        //implement table

        for(i=1;i<=k;i++)
        {
            var row=table.insertRow(i);
            var c1=row.insertCell(0);
            var c2=row.insertCell(1);
            var c3=row.insertCell(2);
            var c4=row.insertCell(3);
            var c5=row.insertCell(4);
            var c6=row.insertCell(5);
            var c7=row.insertCell(6);
            c1.innerHTML=classf[i-1];
            c2.innerHTML=x[i-1];
            c3.innerHTML=fm[i-1];
            c4.innerHTML=cf[i-1];
            c5.innerHTML=multifx[i-1];
            c6.innerHTML=sqrx[i-1];
            c7.innerHTML=sumsqrx[i-1];
        }
        var rowl=table.insertRow(1+parseFloat(k));
        var clo=rowl.insertCell(0);
        var cl1=rowl.insertCell(1);
        var cl2=rowl.insertCell(2);
        var cl3=rowl.insertCell(3);
        var cl4=rowl.insertCell(4);
        var cl5=rowl.insertCell(5);
        var cl6=rowl.insertCell(6);
        clo.innerHTML="";
        cl1.innerHTML="";
        cl2.innerHTML="&sum;f = "+cf[k-1];
        cl3.innerHTML="";
        cl4.innerHTML="&sum;fx = "+sumfx;
        cl5.innerHTML="";
        cl6.innerHTML="&sum;fx<sup>2</sup> = "+ sumQ;

        //calculating mean
        var mean=parseFloat(sumfx)/parseFloat(cf[k-1]);
        document.getElementById("tmean").innerHTML="Mean (X) = "+ mean;
        //calculating median
        var p;
        var halff = parseFloat(cf[k-1])/2;
     
        for(i=0;i<k;i++)
        {
            if(cf[i] > halff)
            {
                p = i;
                break;
            }
        }
        var fr =fm[p];
        if(clt == "Non-Uniformed")
        {
          var clas = classf[p],cls2=[];
          cls2=clas.split("-");
          var t =cls2[0];
          var ln =parseFloat(cls2[1])-parseFloat(cls2[0]);
        }
        else if(clt == "Uniformed")
        {
            var t = parseFloat(a)+parseFloat(p)*parseFloat(l);
            var ln = l;
        }
        var CF =cf[p-1];
        var v=parseFloat(halff)-parseFloat(CF);
        var Median=parseFloat(t)+(parseFloat(v)*parseFloat(ln)/parseFloat(fr));
        document.getElementById("tmid").innerHTML="Median(M) = "+ Median;
        
        //calculating MODE
        var z;
        var sortF = fitem.sort(function(a,b){return a-b});
        var f1=sortF[k-1];

        for(var j=0;j<k;j++)
        {
           if(fm[j] === f1)
           {
             z=j;
             break;
           }
        }
        if(z == 0 || z== k-1)
        {
            var mode = 3*parseFloat(Median)-2*parseFloat(mean);
            document.getElementById("tmod").innerHTML="Mode (Z) = "+ mode;
        }
        else
        {
          var f0= fm[z-1];
          var f2= fm[z+1];
          if(clt == "Uniformed")
          {
            var tl=parseFloat(a) + (parseFloat(z)*parseFloat(l)); 
          }
          else if(clt =="Non-Uniformed")
          {
            var clas = classf[z],cls2=[];
            cls2=clas.split("-");
            var tl =cls2[0];
            var l =parseFloat(cls2[1])-parseFloat(cls2[0]);
          }
          var abc = (parseFloat(f1)-parseFloat(f0))/(2*parseFloat(f1)-parseFloat(f0)-parseFloat(f2));
          var mode = parseFloat(tl) + parseFloat(abc)*parseFloat(l);
          document.getElementById("tmod").innerHTML="Mode (Z) = "+ mode;
        }
        // calculating deviation

         var Dv = (parseFloat(sumQ)/parseFloat(cf[k-1])) - Math.pow(mean,2);
         document.getElementById("tdev").innerHTML= "Standerd Deviation (sigma) = "+Math.sqrt(Dv);

         // calculating CV

         var Cv = parseFloat(Math.sqrt(Dv))/parseFloat(mean)*100;
         document.getElementById("tcv").innerHTML= "Coefficient of Variation (CV) = "+ Cv;
       
       // calculating coefficient of  Skewness 
       var Sk =(parseFloat(mean)-parseFloat(mode))/parseFloat(Math.sqrt(Dv));
       document.getElementById("tsk").innerHTML=" S<sub>k</sub> = "+Sk;
      }
     