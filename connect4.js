var playerInfo = prompt("Your name", "");
// console.log('--> ',playerInfo == '' );
if (playerInfo == "") {
    let alertText = "Not today, buddy.";
    alert(alertText);
} else {

    let alertText = "Hello " + playerInfo + "! Let's get started!";
    alert(alertText);
}

class Table {
  constructor(width,height,content = () =>0){
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y=0;y < height; y++){
     for (let x=0; x < width; x ++) {
       this.content[y * width + x] = content (x,y)    
     }                              
   }
 }

 get(x,y) {
   return this.content[y * this.width + x];
 }
 set(x,y,value){
   this.content[y * this.width + x] = value;
 }
}

let table = new Table(6,7);
let player = 1;
let row_max = 6;
let col_max= 7;
let id = 1;

newgame();

function newgame(){
  new Table;
  addPiece((Math.floor(Math.random()*2)+1))
    if (player === 1) {player = 2}
    else {player = 1}

function addPiece(col, player) {
  if (table.get(6,col)===0) {
    table.set(6,col,player);
    if(player === 1) {
    $("#i"+5+(col)).css("background-color", "red");} 
    else {    $("#i"+5+(col)).css("background-color", "yellow");} 
    checkWin(6, col);
  } else if (table.get(5,col)===0) {
    table.set(5,col,player)
    if(player === 1) {
    $("#i"+4+col).css("background-color", "red");} 
    else {    $("#i"+4+col).css("background-color", "yellow");} 
     checkWin(5, col);
  } else if (table.get(4,col)===0) {
    table.set(4,col,player)
    if(player === 1) {
    $("#i"+3+col).css("background-color", "red");} 
    else {    $("#i"+3+col).css("background-color", "yellow");} 
     checkWin(4, col);
  } else if (table.get(3,col)===0) {
    table.set(3,col,player)
      if(player === 1) {
    $("#i"+2+col).css("background-color", "red");} 
    else {    $("#i"+2+col).css("background-color", "yellow");} 
     checkWin(3, col);
  } else if (table.get(2,col)===0) {
    table.set(2,col,player)
      if(player === 1) {
    $("#i"+1+col).css("background-color", "red");} 
    else {    $("#i"+1+col).css("background-color", "yellow");} 
     checkWin(2, col);
  } else if (table.get(1,col)===0) {
    table.set(1,col,player)
      if(player === 1) {
    $("#i"+0+col).css("background-color", "red");} 
    else {    $("#i"+0+col).css("background-color", "yellow");} 
     checkWin(1, col);}
  else {
    alert("Column is full, try again!")  }    
  }

let A = document.getElementById("i00");
A.addEventListener("click",function () { addPiece(0,player)});

let B = document.getElementById("i01");
B.addEventListener("click",function () { addPiece(1,player)});

let C = document.getElementById("i02");
C.addEventListener("click",function () {addPiece(2,player)});

let D = document.getElementById("i03");
D.addEventListener("click",function () {
                                        addPiece(3,player)});
let E = document.getElementById("i04");
E.addEventListener("click",function() {
                                       addPiece(4,player)});
let F = document.getElementById("i05");
F.addEventListener("click",function() {
                                      addPiece(5,player)});
let G = document.getElementById("i06");
G.addEventListener("click", function() {
  addPiece(6, player)});

function checkDown(x, y) {
 downCounter = 1;
  let stop = false;
  let myX = x;
  let limit = row_max - x;
  while (stop === false) {
  if(downCounter - 1 === limit) {
    break;
    }
    if(table.get(myX + 1, y) === player) {
      downCounter = downCounter + 1;
      myX = myX + 1;
      }
      else {
      stop = true;
      }
    }
  }

function checkLeft(x, y) {
  leftCounter = 1;
  let stop = false;
  let myY = y;
  let limit = y;
  while (stop === false) {
    if(leftCounter - 1 === limit) {
        break;
      }
      if(table.get(x, myY-1) === player) {
        leftCounter = leftCounter + 1;
        myY = myY - 1;
        }
        else {
          stop = true;
        }
      }
    }

  function checkRight(x, y) {
    rightCounter = 1;
    let stop = false;
    let myY = y;
    let limit = col_max - y;
    while (stop === false) {
      if(rightCounter - 1 === limit) {
        break;
      }
      if(table.get(x, myY + 1) === player) {
        rightCounter = rightCounter + 1;
        myY = myY + 1;
      }
      else {
        stop = true;
      }
    }
  }

  function checkUR(x,y){
    urCounter = 1;
    let stop = false;
    let myY = y;
    let myX = x;
    let limit;
      if ((col_max - y) < x) {
        let limit = (col_max - y)}
      else {
        let limit = x}
      while (stop === false) {
      if(urCounter - 1 === limit){
        break;}
      if(table.get(myX - 1, myY + 1)===player){
        urCounter = urCounter + 1;
        myY = myY + 1;
        myX = myX - 1}
      else{
        stop = true;
      }
    }
  }
         
    function checkUL(x,y){
      ulCounter = 1;
      let stop = false;
      let myY = y;
      let myX = x;
      let limit;
        if (x < y){
          let limit = x}
        else {
          let limit = y}
        while (stop === false){
        if (ulCounter - 1 === limit){
          break;}
        if(table.get(myX - 1, myY - 1)===player){
          ulCounter = ulCounter + 1;
          myX = myX - 1;
          myY = myY - 1}
        else{
          stop = true;
        }
      }
    }
                  
      function checkLL(x,y){
        llCounter = 1;
        let stop = false;
        let myY = y;
        let myX = x;
        let limit;
          if (row_max - x < y){
            let limit = row_max - x}
          else {
            let limit = y}
          while (stop === false){
          if (llCounter - 1 === limit){
            break;}
          if(table.get(myX + 1, myY - 1)===player){
            llCounter = llCounter + 1;
            myX = myX + 1;
            myY = myY - 1}
          else{
            stop = true;
          }
        }
      }
                          
        function checkLR(x,y){
          lrCounter = 1;
          let stop = false;
          let myY = y;
          let myX = x;
          let limit;
            if (row_max - x < col_max - y){
              let limit = row_max - x}
            else {
              let limit = col_max - y}
            while (stop === false){
            if (lrCounter - 1 === limit){
              break;}
            if(table.get(myX + 1, myY - 1)===player){
              lrCounter = lrCounter + 1;
              myX = myX + 1;
              myY = myY - 1}
            else{
              stop = true;
            }
          }
        }

        function checkWin(x, y){
          checkDown(x, y);
          checkLeft(x, y);
          checkRight(x, y);
          checkUR(x, y);
          checkUL(x, y);
          checkLL(x, y);
          checkLR(x, y);
            if (downCounter >= 4 || (leftCounter+rightCounter)-1 >= 4 || (urCounter + lrCounter)-1 >= 4 || (lrCounter + urCounter)-1 >= 4) {
              alert("Player " + player + " is the winner!");
                }
            else {
            if (player === 1) {player = 2}
            else {
            player = 1}
                }
              }
            }


    
