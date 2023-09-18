const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question('Wybierz funkcje trygonometryczną?', functionT => {
switch (functionT) {
  case 'sin':
    console.log('sin0 = 0 || sin30 = 1/2 || sin45 = sqrt(2)/2 || sin60 = sqrt(3)/2 || sin90 = 1 ');
    break
  case 'cos':
    console.log('cos0 = 1 || cos30 = sqrt(3)/2 || cos45 = sqrt(2)/2 || cos60 = 1/2 || cos90 = 0 ');
    break
  case 'tan':
    console.log('tan0 = 0 || tan30 = sqrt(3)/3 || tan45 = 1 || tan60 = sqrt(3) || tan90 = - ');
    break
  case 'ctg':
    console.log('ctg0 = - || ctg30 = sqrt(3) || ctg45 = 1 || ctg60 = ctg(3)/3 || ctg90 = 0 ');
    break
  default:
    console.log(`co ty dołeś????????????????`);
}

    readline.close()
  })
