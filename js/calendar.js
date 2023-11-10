const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

let events = [
    {
        "club" : "Club Endeavour",
        "name" : "General Quiz",
        "time" : "3:00 - 5:00",
        "month" : "October",
        "date" : 10,

    },
    {
        "club" : "Photography Club",
        "name" : "Photography",
        "time" : "3:00 - 5:00",
        "month" : "October",
        "date" : 20,
    },
    {
        "club" : "Recondite Writers Club",
        "name" : "Write a Story",
        "time" : "3:00 - 5:00",
        "month" : "November",
        "date" : 20,
    },
    {
        "club" : "Recondite Writers Club",
        "name" : "Write a Story",
        "time" : "3:00 - 5:00",
        "month" : "November",
        "date" : 20,
    },
    {
        "club" : "Recondite Writers Club",
        "name" : "Write a Story",
        "time" : "3:00 - 5:00",
        "month" : "November",
        "date" : 20,
    },
    {
        "club" : "Recondite Writers Club",
        "name" : "Write a Story",
        "time" : "3:00 - 5:00",
        "month" : "December",
        "date" : 20,
    },
    {
        "club" : "Recondite Writers Club",
        "name" : "Write a Story",
        "time" : "3:00 - 5:00",
        "month" : "December",
        "date" : 20,
    }
]

const renderCalendar = () => {

    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday} onclick='getEvents(${currMonth})'">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;

    let eventBox = document.querySelector(".events");
    eventBox.innerHTML = "";
    let found = false;
    for(let i =0;i<events.length;i++){
        const event = events[i];
        let monthNum = 0;
        for(let i=0;i<months.length;i++){
            if(months[i] == event.month){
                monthNum = i;
            }
        }
        // console.log(event.month, currMonth)
        if(monthNum == currMonth){
            found = true;
            eventBox.innerHTML+=`<div data-aos="fade-up"
            data-aos-duration="${1000+((i+1)*100)}" class="event">
              <div class="event-header d-flex justify-content-between">
                <div class="border d-flex align-items-end event-header-text" style="font-size: 12px;font-weight: bold;color:#38404F">ACADEMIC CALENDAR</div>
                <div class="date border">
                  <div class="month">${event.month.substring(0,3)}</div>
                  <div class="pure-flex date-num">${event.date}</div>
                </div>
              </div>
              <div class="line"></div>
              <div class="event-info">
                <div class="event-head">${event.club}</div>
                <div class="type">${event.name}</div>
                <div class="time">${event.time}</div>
              </div>
            </div>`
        }
    }
    if(!found){
        eventBox.innerHTML = `<div class="pure-flex" style="height:100%;width:100%"><h1>No events this month!</h1></div>`
    }
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

function getEvents(month){
    console.log("jel")
    let eventBox = document.querySelector(".events");
    eventBox.innerHTML = "";
    for(let i =0;i<events.length;i++){
        const event = events[i];
        if(event.month == month){
            eventBox.innerHTML+=`<div data-aos="fade-up"
            data-aos-duration="${1000+((i+1)*100)}" class="event">
              <div class="event-header d-flex justify-content-between">
                <div class="border d-flex align-items-end event-header-text" style="font-size: 12px;font-weight: bold;color:#38404F">ACADEMIC CALENDAR</div>
                <div class="date border">
                  <div class="month">${event.month}</div>
                  <div class="pure-flex date-num">${event.date}</div>
                </div>
              </div>
              <div class="line"></div>
              <div class="event-info">
                <div class="event-head">${event.club}</div>
                <div class="type">${event.name}</div>
                <div class="time">${event.time}</div>
              </div>
            </div>`
        }
    }
}