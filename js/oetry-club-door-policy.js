//1

function frontDoorResponse(line) {
    const words = line.split(' ');
    const firstWord = words[0];
    return firstWord.charAt(0);
  }
  
  console.log(frontDoorResponse('Stands so high')); // => "S"
  console.log(frontDoorResponse('Huge hooves too')); // => "H"


//2

function frontDoorPassword(letters) {
    return letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
  }
  
  console.log(frontDoorPassword('SHIRE')); // => "Shire"
  console.log(frontDoorPassword('shire')); // => "Shire"

//3

function backDoorResponse(line) {
    const trimmedLine = line.trim();
    return trimmedLine.charAt(trimmedLine.length - 1);
  }
  
  console.log(backDoorResponse('Stands so high')); // => "h"
  console.log(backDoorResponse('Stands so high   ')); // => "h"

  
//4

function backDoorPassword(letters) {
    const capitalizedWord = letters.charAt(0).toUpperCase() + letters.slice(1);
    return `${capitalizedWord}, please`;
  }
  
  console.log(backDoorPassword('horse')); // => "Horse, please"
  