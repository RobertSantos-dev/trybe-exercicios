const click = document.getElementById('btn-click');
const conta = document.getElementById('conta');

// Questão 1
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } 
    else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
  }

testingScope(true);


// Questão 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemNumbers = (array) => {
    let arrDeOrdem = array.sort((x, z) => x - z);
    
    return arrDeOrdem;
}

// Questão 3
let nfatorial = (n) => {
    let res = 1;
    for (let i = n; i >= 1; i -= 1) { res *= i; }

    return res;
}


// Questão 4
const longestWord = (p) => {
    let res = 0;
    let arrayP = p.split(' ');

    for (let i of arrayP) {
        i.length>res?res=i.length:res=res;
    }

    return `${arrayP[res]} => ${arrayP[res].length} letras`;
}

// Questão 5
let res = 0;
click.addEventListener('click', () => {
    res += 1;
    conta.innerHTML = res;
});


// Questão 6
const trocaPalavra = (sd, sp) => {
    let pl = sd.split(' ');
    let pln = '';

    for (let i in pl)pl[i]==='x'?pl[i]=sp:pl[i]=pl[i];
    for (let i in pl)i==='0'?pnl=`${pl[i]}`:pnl=` ${pl[i]}`

    return pln;
}
