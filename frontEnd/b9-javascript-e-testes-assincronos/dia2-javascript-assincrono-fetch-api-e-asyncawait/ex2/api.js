const endUrl = 'https://api.coincap.io/v2/assets';
const listCoins = document.querySelector('#list-coins');
const btnTop10 = document.querySelector('#btn-top10');

let cont = 0;

const listItem = (element, str) => {
    let e = document.createElement(element);
    e.innerHTML = str;
    return e;
};

const resetList1 = (arr) => listCoins.querySelectorAll('li').forEach((e, i) => i < 10 ? arr.push(e) : '');
const resetList2 = () => listCoins.querySelectorAll('li').forEach(e => e.remove());

const top10 = () => {
    let res = []
    if (cont === 0) {
        resetList1(res);
        resetList2();
        res.map((e) => listCoins.appendChild(listItem('li', e.innerHTML)));
        btnTop10.innerHTML = 'Mostrar todos';
        cont += 1;
    } else {
        cont = 0;
        resetList2();
        moedas();
        btnTop10.innerHTML = 'Top 10';
    }
};

const moedas = () => {
    let item;
    fetch(endUrl)
    .then((res) => res.json())
    .then((obj) => {
        obj.data.map((e, i) => {
            item = listItem('li',`${i + 1} - ${e.name} (${e.symbol}): ${e.priceUsd}`);
            listCoins.appendChild(item);
        });   
        if (listCoins.children.length > 10) {
            btnTop10.disabled = false;
            btnTop10.addEventListener('click', top10);
        }
    });
};

window.onload = moedas();
