const endUrl = 'https://api.coincap.io/v2/assets';
const listCoins = document.querySelector('#list-coins');

const listItem = (element, str) => {
    let e = document.createElement(element);
    e.innerHTML = str;
    return e;
};

const moedas = () => {
    let item;
    fetch(endUrl)
    .then((res) => res.json())
    .then((obj) => {
        obj.data.map((e) => {
            item = listItem('li',`${e.name} (${e.symbol}): ${e.priceUsd}`);
            listCoins.appendChild(item);
        });
    });
};

moedas();
