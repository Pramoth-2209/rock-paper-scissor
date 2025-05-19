let a=0;
let b=0;

function play(){
    let bot=document.getElementById('bot');
    let bval=Math.floor(Math.random()*3);  
    let uval=Number(document.getElementById("userinp").value); 
    let output=document.getElementById("output");
    let point=document.getElementById("point");
    let point2=document.getElementById("point2");
    let output2=document.getElementById("output2")
    bot.innerText=bval;
    console.log(bval);
    console.log(uval)
    if(bval === uval){
        output.innerText="draw";
    }
    else if(
        (uval===0 && bval===2) || (uval==1 && bval==0) || (uval===2 && bval===1)
    ){
        output.innerText="you won";
        
        a+=1;
        point.innerText=a;
        if(a>=5)
        {
            output2.innerText="you won the match";
        }

    }
    else{
        output.innerText="opponent won"
        b+=1;
        point2.innerText=b;
        if(b>=5){
            output2.innerText="opponent won the match";
        }

    }
    if(uval==" "){
        alert("please enter value")
    }
    
}


