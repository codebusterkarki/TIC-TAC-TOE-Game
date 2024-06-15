let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")



const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn0 = true;//playerX ; player0

boxes.forEach((box) => { //turn change for X and 0 players
    box.addEventListener("click",() => {
        

        if(turn0==true){ //player 0 turn
            box.innerText="0"
            turn0=false;
        }
        else{ //player X turn
            box.innerText="X"
            turn0=true;
            

        }
        box.disabled=true;

        checkwinner();
    });
});
const disableboxes=() => { //boxes got disabled automatically after we got winner 
  for(let box of boxes){
    box.disabled=true;
  }
}

const enableboxes=() => {
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }

const showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
   

}

const checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
            if(pos1val===pos2val && pos2val===pos3val){
              // pos1val.innerText.style.color="green"
              // pos2val.innerText.style.color="green"
              // pos3val.innerText.style.color="green"
                showWinner(pos1val);
            }
    }
}

const resetgame=() =>{
 enableboxes();
 msgcontainer.classList.add("hide")
}

newgamebtn.addEventListener("click" ,resetgame)
resetbtn.addEventListener("click" ,resetgame)



