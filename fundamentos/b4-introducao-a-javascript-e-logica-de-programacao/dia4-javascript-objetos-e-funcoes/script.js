// 1 
var verificaPalidromo = (p)=>{
    let p1 = "";
    let res = "";
    for (let i=p.length-1; i>-1; i-=1){
        p1+=p[i]
    }

    res = p1===p?true:false;

    return res;
}

console.log(verificaPalidromo("arara"));
console.log("===========================================================================");


//2
var maiorValor = (a)=>{
    let res = 0;
    for(let i in a)a[i]>res? res=i:res=res;

    return res;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));
console.log("===========================================================================");


//3
var menorValor = (b)=>{
    let res = 0;
    for (let i in b) b[i]<res?res=i:res=res;

    return res;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
console.log("===========================================================================");


//4
var maiorNome = (names)=>{
    let res = "";
    for(let i of names){
        i.length>res.length?res=i:res=res;
    }

    return res;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log("===========================================================================");


//5
var repeteNumero = (nums)=>{
    let res = 0;
    let repeteVez = 0;
    let repete = new Array;

    for(let i of nums){
        repeteVez = 0;
        for(let j of nums){
            i===j?repeteVez+=1:repeteVez=repeteVez;
    }
    repete.push(repeteVez);
}

    for(let i in repete){
        res = repete[i]>=res?res=i:res=res;
    }

    return nums[res];
}

console.log(repeteNumero([2, 3, 2, 5, 8, 2, 3]));
console.log("===========================================================================");


//6
var somaNumeros = (n)=>{
    let res=0;
    for(let i=0; i<=n; i+=1){
        res+=i;
    }

    return res;
}

console.log(somaNumeros(5));
console.log("===========================================================================");



//7
var verificaFimPalavra = (p1, p2)=>{
    let res=0;
    let letras = "";

    for(let i=p1.length-p2.length; i<p1.length; i+=1){
        //console.log(p1[i]);
        //console.log(i);
        letras+=p1[i];   
    }

    for(let i in letras){
        letras[i]===p2[i]?res=1:res=0;
    }

    res===1?res=true:res=false;

    return res;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));