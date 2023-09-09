let turn ='X';
let gameOver=false;
let audioInput=new Audio("Input.wav");
let audioGameOver=new Audio("Won.wav");
function changeTurn()
{
   return turn=='X' ?'0':'X';
}


//checkwin
 function checkWin()
 {
    let blocks=document.getElementsByClassName("block");
    // console.log(blocks[0].innerHTML);
     
    let wins= [
        [0,1,2,0,60,0],[3,4,5,0,180,0],[6,7,8,0,300,0],[0,3,6,-100,170,90],[1,4,7,0,170,90],[2,5,8,90,170,90],[0,4,8,5,180,45],[2,4,6,5,175,130]
    ]

    wins.forEach((e)=>
    {
        if(blocks[e[0]].innerHTML==blocks[e[1]].innerHTML && blocks[e[1]].innerHTML==blocks[e[2]].innerHTML && blocks[e[0]].innerHTML!="")
        {
            gameOver=true;
            document.getElementById("turn").innerHTML="Player"+blocks[e[0]].innerHTML+" Won";
            document.getElementById("gif").style.opacity=1;
            audioGameOver.play();
            document.getElementById("line").style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
            
            
        }
    })
 }


function reset()
{
    Array.from(block).forEach((element)=>
    {
        element.innerHTML="";
        turn='X';
        document.getElementById("turn").innerHTML=turn+"s TURN";
        document.getElementById("gif").style.opacity=0;
        document.getElementById("line").style.transform=`translate(0px,0px) rotate(0deg)`;
    })
}

let block=document.getElementsByClassName("block");

//setting event listeners to all blocks

Array.from(block).forEach((element)=>
{
    element.addEventListener("click", function(e)
    {

        let input=e.target.innerHTML;
        if(input=="" && gameOver==false)
        {
            e.target.innerHTML=turn;
            turn=changeTurn();
            audioInput.play();
            checkWin();

            if(gameOver==false)
            {
                document.getElementById("turn").innerHTML=turn+"s TURN";
            }
        }
        
    })
})


document.getElementById("reset").addEventListener("click",()=>
{
   reset();
})