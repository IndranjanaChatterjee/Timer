var s;
        let x=function(e){
            s=setInterval(time,1000);
            function time(){
            let a=new Date();
            let c=a.getHours();
            let d=a.getMinutes();
            let e=a.getSeconds();
            let t=c+":"+d+":"+e;
            document.getElementById("timer").value=t;
            let ee=Number.parseInt(e);
            if(ee%2==0)
            {
                document.getElementById("cl").style.boxShadow="5px 5px 10px 10px white";
            }
            else
            {
                document.getElementById("cl").style.boxShadow="5px 5px 10px 10px lightpink";
            }
        }}
    
    let y=function(e){
        clearInterval(s);
    }
        start.addEventListener("click",x);
        stopp.addEventListener("click",y);