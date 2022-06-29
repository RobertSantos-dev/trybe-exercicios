var pMain = document.querySelectorAll("main p");
var inputs = document.querySelectorAll("#interactions div input");
var selectFont = document.querySelector("#font-select1");
var btnModi = document.querySelector("#btn-modi");

var modiParagraph = (bgColor, textColor, sizeFont, line, fontSelect)=>{
    for (let i = 0; i < 5; i += 1) {    
        pMain[i].style.backgroundColor = bgColor;
        pMain[i].style.color = textColor;
        pMain[i].style.fontSize = `${sizeFont}px`;
        pMain[i].style.lineHeight = line;
        pMain[i].style.fontFamily = fontSelect;
}}
  
//inputs[0].addEventListener('keyup', modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value));   
//inputs[1].addEventListener('keyup', modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value));
//inputs[2].addEventListener('keyup', modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value));
//inputs[3].addEventListener('keyup', modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value));
//selectFont.addEventListener('keyup', modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value));

btnModi.addEventListener("click", ()=>{
    modiParagraph(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, selectFont.value);
    //if( localStorage.length === 0 ) {
        localStorage.setItem('bgColor',inputs[0].value);
        localStorage.setItem('tColor',inputs[1].value);
        localStorage.setItem('sFont',inputs[2].value);
        localStorage.setItem('lHeight',inputs[3].value);
        localStorage.setItem('fSelect',selectFont.value);
    //}
});

window.addEventListener("load", ()=>{
    if( localStorage.length > 0 ){
        inputs[0].value = localStorage.bgColor;
        inputs[1].value = localStorage.tColor;
        inputs[2].value = localStorage.sFont;
        inputs[3].value = localStorage.lHeight;
        selectFont.value = localStorage.fSelect;

        for (let i = 0; i < 5; i += 1) {    
            pMain[i].style.backgroundColor = inputs[0].value;
            pMain[i].style.color = inputs[1].value;
            pMain[i].style.fontSize = `${inputs[2].value}px`;
            pMain[i].style.lineHeight = inputs[3].value;
            pMain[i].style.fontFamily = selectFont.value;
    }
    }
})