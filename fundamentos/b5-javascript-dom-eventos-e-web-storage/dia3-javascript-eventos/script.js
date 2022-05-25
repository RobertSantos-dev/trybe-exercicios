function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
        const ulDays = document.getElementById("days")
        const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const myTasks = document.querySelector(".my-tasks");
        const btns = document.querySelector(".buttons-container");

        var daysCalendar = (elementPai, elementCreate, elementClass, elementId, elementHtml, elementBack)=>{
            let item = document.createElement(elementCreate);
            item.className = elementClass;
            item.id = elementId
            item.innerHTML = elementHtml;
            item.style.backgroundColor = elementBack;

            elementPai.appendChild(item);
        }
    
    // Questa 1
        for(let i in dezDaysList){
            if(dezDaysList[i] === 25){
                daysCalendar(ulDays, "li", "days holiday friday", "", dezDaysList[i], "")
            }
            else if(dezDaysList[i] === 24 || dezDaysList[i] === 31){
                daysCalendar(ulDays, "li", "days holiday", "", dezDaysList[i], "")
            }
            else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
                daysCalendar(ulDays, "li", "days friday", "", dezDaysList[i], "")
            }
            else{
            daysCalendar(ulDays, "li", "days", "", dezDaysList[i], "")
        }}

    // Questão 2
        daysCalendar(btns, "button", "", "btn-holiday", "Feriados");

    // Questões 3
        var btn1 = document.getElementById("btn-holiday");
        var daysHoliday = document.querySelectorAll(".holiday");    
        let c=0;

        btn1.addEventListener("click", ()=>{
            if(c===0){
                c=1;
                for(let i=0; i<daysHoliday.length; i+=1){
                    daysHoliday[i].style.backgroundColor = "orange";
            }}
            else if(c===1){
                c=0;
                for(let i=0; i<daysHoliday.length; i+=1){
                    daysHoliday[i].style.backgroundColor = "rgb(238,238,238)";
            }}
        })

    //Questão 4
    daysCalendar(btns, "button", "", "btn-friday", "Sexta-feira", "");

    //Questão 5
        var btn2 = document.getElementById("btn-friday");
        var daysFriday = document.querySelectorAll(".friday");
        var diasSexta = [];
        let c2=0;
        for(let i in daysFriday){
            diasSexta.push(daysFriday[i].innerHTML);
        }

        btn2.addEventListener("click", ()=>{
            if(c2===0){
                c2=1;
                for(let i=0; i<daysFriday.length; i+=1){
                    daysFriday[i].innerHTML = "SEXTOU o/";
            }}
            else if(c2===1){
                c2=0;
                for(let i=0; i<4;i+=1){
                    daysFriday[i].innerHTML = diasSexta[i];
            }}
        })

    // Questão 6
        var dias = document.querySelectorAll("li.days");

        var focoZoom = (e)=>{
            if(e.target.style.fontSize==="20px" || e.target.style.fontSize===""){
                e.target.style.fontSize="25px";
            }
            else if(e.target.style.fontSize==="25px"){
                e.target.style.fontSize="20px";
            }
        }

        for(let i=0; i<dias.length; i+=1){
            dias[i].addEventListener("mouseover", focoZoom);
            dias[i].addEventListener("mouseout", focoZoom);
        }

    // Questão 7
        daysCalendar(myTasks, "span", "", "", "Praticar", "");

    // Questão 8
        daysCalendar(myTasks, "div", "", "task", "", "black");

    // Questão 9
        var task = document.querySelector(".my-tasks #task");
        let t = 0;

        task.addEventListener("click", ()=>{
            if(t===0){
                t=1;
                task.className="task selected";
            }
            else if(t===1){
                t=0
                task.className="task";
                for(let i=0; i<dias.length; i+=1){
                    dias[i].style.color="";
                }
            }
        })
        
    // Questão 10
    let seleciona=0;

    var selecionado = (e)=>{
        if(t===1){
            if(e.target.style.color === ""){
                e.target.style.color = "black";
                
            }else{
                e.target.style.color = "";
        }}}

    for(let i=0; i<dias.length; i+=1){
        dias[i].addEventListener("click", selecionado)
    }