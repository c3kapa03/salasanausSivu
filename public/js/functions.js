const numerot = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const aakkoset = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const erikoismerkit = ['@', '!', '#', '&']
const tulosruutu = document.querySelector('#tulos')

const getRandomIntNumberInRange = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

const arvoSalasana = () => {
    let salasana = ''

    for (let index = 0; index < 7; index++) {
        let arvottuKirjain = getRandomIntNumberInRange(0, 53);   
        salasana = salasana + aakkoset[arvottuKirjain]
    }

    for (let index = 0; index < 2; index++) {
        let arvottuNumero = getRandomIntNumberInRange(0, 10);   
        salasana = salasana + arvottuNumero

        let arvottuErikoismerkki = getRandomIntNumberInRange(0, 4); 
        salasana = salasana + erikoismerkit[arvottuErikoismerkki]  
       
    }

    tulosruutu.innerHTML = salasana
}

arvoSalasana()