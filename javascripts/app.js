var myRover = {
  roverName: "rover",
  roverDirection: "N",
  position: [0,0],
  travelLog: [],
};

function left(myRover){
  switch (myRover.roverDirection) {
    case 'N':
    myRover.roverDirection='W';
    break;
    case 'S':
    myRover.roverDirection='E';
    break;
    case 'E':
    myRover.roverDirection='N';
    break; 
    case 'W':
    myRover.roverDirection='S';
    break;
  };
  console.log("rover turns:" + myRover.roverDirection)  
}  

function right(myRover){
  switch (myRover.roverDirection) {
    case 'N':
    myRover.roverDirection='E';
    break;
    case 'E':
    myRover.roverDirection='S';
    break;
    case 'S':
    myRover.roverDirection='W';
    break;
    case 'W':
    myRover.roverDirection='N';
    break;
  };
  console.log("rover turns:" + myRover.roverDirection);
}

var position = [
  [0,1,2,3,4,5,6,7,8,9],
  [1,1,2,3,4,5,6,7,8,9],
  [2,1,2,3,4,5,6,7,8,9],
  [3,1,2,3,4,5,6,7,8,9],
  [4,1,2,3,4,5,6,7,8,9],
  [5,1,2,3,4,5,6,7,8,9],
  [6,1,2,3,4,5,6,7,8,9],
  [7,1,2,3,4,5,6,7,8,9],
  [8,1,2,3,4,5,6,7,8,9],
  [9,1,2,3,4,5,6,7,8,9]
];

console.log (myRover.position);

function forward(myRover){
  if (myRover.roverDirection==='N'){
    myRover.position[1]++;
  
  } else if (myRover.roverDirection==='S'){
    myRover.position[1]--; 
  
  } else if (myRover.roverDirection==='E'){
    myRover.position[0]++;

  } else if (myRover.roverDirection==='W'){
    myRover.position[0]--;
  }

  myRover.travelLog.push(myRover.position[0] + "," + myRover.position[1]);
  console.log("rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}

function backward(myRover){
  if(myRover.roverDirection==='N'){
    myRover.position[1]--;

  } else if (myRover.roverDirection==='S'){
    myRover.position[1]++;

  } else if (myRover.roverDirection==='E'){
    myRover.position[0]--;

  } else if (myRover.roverDirection==='W'){
    myRover.position[0]++;
  }

  myRover.travelLog.push(myRover.position[0] + "," + myRover.position[1]);
  console.log("rover position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}

var commands = '';

function directions(commands){

  for (var i = 0; i < commands.length; i++){

     if (commands[i]=== 'r'){
      right(myRover.roverDirection);
      boundaries(myRover);

    } else if (commands[i] === 'l'){
      left(myRover.roverDirection);
      boundaries(myRover);

    } else if (commands[i] === 'f'){
      forward(myRover.roverDirection);
      boundaries(myRover);

    } else if(commands[i] === 'b'){
      backward(myRover.roverDirection);
      boundaries(myRover);
    
    } else {
      console.log ('Command not identified, not executed');
    }

  }

  console.log(rover.travelLog);

}
