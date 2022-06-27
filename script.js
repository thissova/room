function noConection(){
    alert("No Conected");
}

function enterName(){
    let name;
    name = prompt();
    document.getElementById("name").innerHTML = name + "'s";
}

function alertTemp(t){
    if (t > 22) {
        let newT = t - 22;
        alert("Температура вашої кімнати: " +t+" це на " + newT  + " більше за норму");

    } else if (t < 18 )
    {
        let newT = 18 - t;
        alert("Температура вашої кімнати: " +t+" це на " + newT + " менше за норму");
    } else{
        alert("Температура кімнати в нормі");
    }
}

function sum(){
    let a = prompt("Введіть 1 число");
    let b = prompt("Введіть 2 число");
    a = parseInt(a);
    b = parseInt(b);

    alert(a + b);
}


//13.12.1901 - 19.01.2038
function setTime(){
    let d = new Date();
    
    let dayOfMount = d.getDate();
    
    let dayOfWeek = d.getDay();
    
    let year = d.getFullYear();
    
    let month = d.getMonth();
    
    let hour = d.getHours();
    
    let minute = d.getMinutes();
    
    let seconds = d.getSeconds();
    
    let millis = d.getMilliseconds()


    // console.log(millis);
    // console.log(d);
    // console.log(dayOfMount);
    // console.log(dayOfWeek); //0 - нд        1 - пн    2 - вт  
    // console.log(year);
    // console.log(month);
    // console.log(hour);
    // console.log(minute);
    // console.log(seconds);

    document.getElementById('day').innerHTML = dayOfMount;
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + seconds;

    let days = ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'];

    document.getElementById('wday').innerHTML = days[dayOfWeek];

    let nameMouth = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'        
    ];

    document.getElementById('month').innerHTML = nameMouth[month];
    let t = setTimeout(setTime, 1000);
}
let counter = 0;

function changeColor(){
    counter++;
    let titleElement = document.getElementById('chColor');
    switch(counter){
        case 1: titleElement.style.color = 'red'; break;
        case 2: titleElement.style.color = 'green'; break;
        case 3: titleElement.style.color = 'yellow'; break;
        case 4: titleElement.style.color = 'Tan'; break;
        case 5: titleElement.style.color = 'silver'; break;
        case 6: titleElement.style.color = 'Turqiose'; break;
        case 7: counter = 0; break;
    }
}

let hum = 100;
function Flower(h) {
    if (hum <= 0){
        return
    }
    else{
        hum -= h;
        let progressBar = document.getElementById('flower').value = hum;
        
        
        if(hum < 20){
            let newElement = document.createElement('div');
            newElement.innerHTML = 
            "<div align = 'right' id ='notification' style = 'color : red;'> Полий квітку!!!</div>";
                newElement.setAttribute('id', 'test');
                currentElement = document.getElementById('alert');
                document.body.insertBefore(newElement, currentElement);
        }
}
}

function FlowerControll(){
    hum+=10;
    let progressBar = document.getElementById('flower').value = hum;
    document.getElementById('notification')?.remove();
}
function deleteNotification(){
    document.getElementById('notification')?.remove();
}


let image = document.getElementById("curpetImg");

let imageArr = [
    "https://i.ibb.co/9ZvgNtP/kover1.jpg", //0
    "https://i.ibb.co/NFBNM5v/kover2.png", //1
    "https://i.ibb.co/xgC8Kj0/kover3.png", //2
    "https://i.ibb.co/LCqXjBp/kover0.png", //3
    "https://i.ibb.co/K6phLpd/carpet.png"  //4
];
let selector = 0;

function carpetSwitch(){
    image.src = imageArr[selector];
    selector++;
    if(selector > 3)  selector = 0 
}

function getLocation(){
    alert("You are in Keklyandia!");
}