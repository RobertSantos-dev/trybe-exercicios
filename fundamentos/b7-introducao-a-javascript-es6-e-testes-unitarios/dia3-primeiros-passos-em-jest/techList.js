const techList = (arr, name) => {
    let res = [];
    if (arr.length === 0) { return 'Vazio!'; }
    arr.sort().forEach((element) => {
        res.push({tech: element, name: name});
    });
    return res;
}

module.exports = techList;