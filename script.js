let a=0;
let b=0;

function play(){
    let bot=document.getElementById('bot');
    let lists=['rock','paper','scicssor']
    let bval=Math.floor(Math.random()*lists.length);  
    let uval=document.getElementById("userinp").value; 
    let output=document.getElementById("output");
    let point=document.getElementById("point");
    let point2=document.getElementById("point2");
    let output2=document.getElementById("output2")
    bot.innerText=lists[bval];
    console.log(lists[bval]);
    console.log(uval)
    if(lists[bval] === uval){
        output.innerText="draw";
    }
    else if(
        (uval==="rock" && lists[bval]==="scicssor") || (uval==="paper" && lists[bval]==="rock") || (uval==="scicssor" && lists[bval]==="paper")
    ){
        output.innerText="you won";
        
        a+=1;
        point.innerText=a;
        if(a>=5)
        {
            output2.innerText="you won the match";
            point.innerText="0";
        }

    }
    else{
        output.innerText="opponent won"
        b+=1;
        point2.innerText=b;
        if(b>=5){
            output2.innerText="opponent won the match";
            point2.innerText="0";
        }

    }
    if(uval=="select"){
        alert("please select value like 'rock','paper','scicssor' ")
    }

    
}


