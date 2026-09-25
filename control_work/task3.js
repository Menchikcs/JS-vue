let correctPin = '2026', attempts = 3;
do{
    let pin = prompt('Enter your pin')
    if (pin === correctPin) {
        alert(`PIN: ${pin}\n` + 'Доступ дозволено')
        break;
    } else{
        attempts--;
        alert(`PIN: ${pin}\n` + `Залишилося спроб: ${attempts}`)
    }
    if (attempts <= 0){
        alert('Доступ заблоковано')
    }
} while (attempts > 0);
