while(true) {
    let n=Math.floor(Math.random()*1000);
    console.log ('Загадано число: ', n);
    let guess = prompt('Введите число от 0 до 999: ');
    console.log('Ввели число: ', guess);
    
    if (guess=='q'){
        alert('Game over!');
        break;
    } else  if (isNaN(guess)){
        alert('Введите числовое значение!')         
    }  else 
        if (n===+guess) {
        alert('Вы угадали!');
        break;
    } else  if (n>guess) {
        alert(' Загаданное число больше Вашего');
    } else if (n<guess) {
        alert('Загаданное число меньше Вашего');
    } 
}