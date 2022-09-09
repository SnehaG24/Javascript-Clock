let a;
let date;
let time;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function clock() {

    a = new Date();
    date = a.toLocaleString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}

let clr = setInterval(clock, 1000);