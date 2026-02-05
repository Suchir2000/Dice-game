
document.querySelector(".btn").addEventListener("click",function(){
    var randomNo1=Math.floor(Math.random()*6)+1;
    var randomNo2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").src="./images/dice"+randomNo1+".png";
    document.querySelector(".img2").src="./images/dice"+randomNo2+".png";
    
    if (randomNo1>randomNo2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="There is a draw";
}

})
