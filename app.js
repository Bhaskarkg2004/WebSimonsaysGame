let gameseq=[];
let userseq=[];

let btns =["yellow","red","purple","green"];

let started = false;
let level = 0;
let highscore =0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
    // console.log("game started");
    started=true;
    levelup();
    }
    
document.addEventListener("touchstart", function () {
    if (started == false) {
        // console.log("game started (touch)");
        started = true;
        levelup();
    }
});
    

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}
 

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);

}

function levelup(){
    userseq=[];
    level++;
    if(level > highscore)
    {
        highscore=level;
    }
    h2.innerText = `Level ${level}`;

    
    let randomidx = Math.floor(Math.random()*4);
    let randcolor = btns[randomidx];
    let ranbtn = document.querySelector(`.${randcolor}`);
    // console.log(randomidx);
    // console.log(randcolor);
    // console.log(ranbtn);
    gameseq.push(randcolor);
    // console.log(gameseq);
    gameFlash(ranbtn);
    //start from 11
}

function checkAns(idx){
    // console.log("curren level :",level)
    // let idx = level-1
    // console.log("level: ",idx);
    if(userseq[idx] === gameseq[idx]){
        // console.log("same value")
        if(userseq.length === gameseq.length){
            setTimeout(levelup,1000)
        }
    }else{

        h2.innerHTML=`Game over your score was <b> ${level}</b> <br>Your High Score is ${highscore} <br>press any key to start`;
        // document.querySelector("body").style.backgroundColor="red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor="white";
        // },150)
        
        reset();
    }


}


function btnpress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor); 
    checkAns(userseq.length-1);
    
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress)

}

function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level =0;
}