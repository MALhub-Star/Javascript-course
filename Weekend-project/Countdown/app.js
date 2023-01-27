let demo = document.getElementById('demo');
let deadline = new Date("Feb,2023, 12:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let time = deadline - now;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 *60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000)
    demo.innerHTML = days + "d " + hours + "h " + minutes + "m " +seconds +
    "s ";
    // check the time if its expired

    if (time < 0) {
        clearInterval(x);
        demo.innerHTML = "Time is Up!"
    }

}, 1000)