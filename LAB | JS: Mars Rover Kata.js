// Rover object goes here:
let rover = {
    direction: 'N',
    x: 0,
    y: 0    
};
// ======================
function turnLeft(rover) {
    switch (rover.direction){
        case 'N':
            rover.direction = "W";
            console.log(`Turn LEFT called. New Direction ${rover.direction}`);
            break;
        case 'S':
            rover.direction = 'E';
            console.log(`turn LEFT called. New Direction ${rover.direction}`);
            break;
        case 'W':
            rover.direction = 'S';
            console.log(`turn LEFT called. New Direction ${rover.direction}`);
            break;
        case 'E':
            rover.direction = 'N';
            console.log(`turn LEFT called. New Direction ${rover.direction}`);
            break;
        default: 'N';
    }
  }
  
  function turnRight(rover) {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            console.log(`Turn RIGHT called. New direction: ${rover.direction}`);
            break;
        case 'S':
            rover.direction = 'W';
            console.log(`Turn RIGHT called. New direction: ${rover.direction}`);
            break;
        case 'W':
            rover.direction = 'N';
            console.log(`Turn RIGHT called. New direction: ${rover.direction}`);
            break;
        case 'E':
            rover.direction = 'S';
        default: 'N';
    }
  }
  
  function moveForward() {
      if (rover.direction === 'N'){
          rover.x--;
      } else if (rover.direction === 'S'){
          rover.x++;
      } else if (rover.direction === 'W') {
          rover.y--;
      } else if (rover.direction === 'E') {
          rover.y++;
      }
      console.log(`Coordenadas do rover: x:${rover.x}, y:${rover.y}`);
  }


turnLeft(rover);
moveForward();
/*
function command(rover, orders){
    for (let i = 0; i < orders.lenght; i++){
        let order = orders[i];
        switch (order){
            case 'F':
                moveForward(rover, order);
                break;
            case 'R':
                turnRight(rover, order);
                break;
            case 'L':
                turnLeft(rover, order);
                break;
        }
        console.log(rover);
    }
}

console.log(command(rover, 'R'));
*/