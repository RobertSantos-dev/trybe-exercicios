const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(arr) {
    return arr.reduce((e,st) => {
        st = st.toLowerCase().split('');
        return e += st.reduce((r, s) => s==='a'?r+=s:r).length;
    },0);
}

console.log(containsA(names));
