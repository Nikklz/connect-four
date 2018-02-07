

let A = document.getElementById("0,0");
function printA(){
  console.log("Placing piece in colomn A");
}
A.addEventListener("click",printA);

let B = document.getElementById("1,0");
function printB(){
  console.log("Placing piece in colomn B");
}
B.addEventListener("click",printB);

let C = document.getElementById("2,0");
function printC(){
  console.log("Placing piece in colomn C");
}
C.addEventListener("click",printC);

let D = document.getElementById("3,0");
function printD(){
  console.log("Placing piece in colomn D?");
}
D.addEventListener("click",printD);

let E = document.getElementById("4,0");
function printE(){
  console.log("Placing piece in colomn E");
}
E.addEventListener("click",printE);

let F = document.getElementById("5,0");
function printF(){
  console.log("Placing piece in colomn F");
}
F.addEventListener("click",printF);

let G = document.getElementById("6,0");
function printG(){
  console.log("Placing piece in colomn G");
}
G.addEventListener("click",printG);


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


function addPiece(col) {
  if (table.get(6,col)===0) {
    table.set(6,col,1)
    checkWin(6, col);
  } else if (table.get(5,col)===0) {
    table.set(5,col,1)
     checkWin(5, col);
  } else if (table.get(4,col)===0) {
    table.set(4,col,1)
     checkWin(4, col);
  } else if (table.get(3,col)===0) {
    table.set(3,col,1)
     checkWin(3, col);
  } else if (table.get(2,col)===0) {
    table.set(2,col,1)
     checkWin(2, col);
  } else if (table.get(1,col)===0) {
    table.set(1,col,1)
     checkWin(1, col);
  } else if (table.get(0,col)===0) {
    table.set(0,col,1)
     checkWin(0, col); 
  } else {
    alert("Column is full, try again!")  }    

  }


  let row_max = 5;
  let col_max= 6;

  function checkDown(x, y) {
    downCounter = 1;
    let stop = false;
    let myX = x;
    let limit = row_max - x;
    while (stop === false) {
      if(downCounter === limit) {
        break;
      }
      if(table.get(myX + 1, y) === 1) {
        downCounter = downCounter + 1;
        myX = myX + 1;
      }
      else {
        stop = true;
      }
    }
  }

  function checkLeft(x, y) {
    leftCounter = 0;
    let stop = false;
    let myY = y;
    let limit = y;
    while (stop === false) {
      if(leftCounter - 1 === limit) {
        break;
      }
      if(table.get(x, myY-1) === 1) {
        leftCounter = leftCounter + 1;
        myY = myY - 1;
      }
      else {
        stop = true;
      }
    }
  }

  function checkRight(x, y) {
    rightCounter = 0;
    let stop = false;
    let myY = y;
    let limit = col_max - y;
    while (stop === false) {
      if(rightCounter - 1 === limit) {
        break;
      }
      if(table.get(x, myY + 1) === 1) {
        rightCounter = rightCounter + 1;
        myY = myY + 1;
      }
      else {
        stop = true;
      }
    }
  }

  function checkUR(x,y){
    urCounter = 0;
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
            if(table.get(myX - 1, myY + 1)===1){
              urCounter = urCounter + 1;
              myY = myY + 1;
              myX = myX - 1}
              else{
                stop = true;
              }
            }
          }
          function checkUL(x,y){
            ulCounter = 0;
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
                    if(table.get(myX - 1, myY - 1)===1){
                      ulCounter = ulCounter + 1;
                      myX = myX - 1;
                      myY = myY - 1}
                      else{
                        stop = true;
                      }
                    }
                  }
                  function checkLL(x,y){
                    llCounter = 0;
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
                            if(table.get(myX + 1, myY - 1)===1){
                              llCounter = llCounter + 1;
                              myX = myX + 1;
                              myY = myY - 1}
                              else{
                                stop = true;
                              }
                            }
                          }
                          function checkLR(x,y){
                            lrCounter = 0;
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
                                    if(table.get(myX + 1, myY + 1)===1){
                                      lrCounter = lrCounter + 1;
                                      myX = myX + 1;
                                      myY = myY + 1}
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
                                    console.log("downCounter >> " + downCounter)
                                    if (downCounter >= 4 || (leftCounter+rightCounter) >= 4 || (urCounter + lrCounter) >= 4 || (lrCounter + urCounter) >= 4) {
                                      console.log("winner");
                                    }
                                    else {
                                      console.log("noWinner");
                                    }
                                  }


                                  addPiece(4);
                                  addPiece(4);
                                  addPiece(4);
                                  addPiece(4);
