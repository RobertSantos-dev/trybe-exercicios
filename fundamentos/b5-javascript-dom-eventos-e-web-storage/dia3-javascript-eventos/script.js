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
        const btns = document.querySelector(".buttons-container");

        var daysCalendar = (elementPai, elementCreate, elementClass, elementId, elementHtml)=>{
            let item = document.createElement(elementCreate);
            item.className = elementClass;
            item.id = elementId
            item.innerHTML = elementHtml;

            elementPai.appendChild(item);
        }
    
    // Questa 1
        for(let i in dezDaysList){
            if(dezDaysList[i] === 25){
                daysCalendar(ulDays, "li", "days holiday friday", "", dezDaysList[i])
            }
            else if(dezDaysList[i] === 24 || dezDaysList[i] === 31){
                daysCalendar(ulDays, "li", "days holiday", "", dezDaysList[i])
            }
            else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
                daysCalendar(ulDays, "li", "days friday", "", dezDaysList[i])
            }
            else{
            daysCalendar(ulDays, "li", "days", "", dezDaysList[i])
        }}

    // Questão 2
        daysCalendar(btns, "button", "", "btn-holiday", "Feriados");