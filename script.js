document.addEventListener('DOMContentLoaded', () => {
    const newDate = new Date('Jul 24 2023 00:00:00');

    const daysVal = document.querySelector('.timeCount__days .timeCount__val');
    const hoursVal = document.querySelector('.timeCount__hours .timeCount__val');
    const minutesVal = document.querySelector('.timeCount__minutes .timeCount__val');
    const secondsVal = document.querySelector('.timeCount__seconds .timeCount__val');

    const daysText = document.querySelector('.timeCount__days .timeCount__text');
    const hoursText = document.querySelector('.timeCount__hours .timeCount__text');
    const minutesText = document.querySelector('.timeCount__minutes .timeCount__text');
    const secondsText = document.querySelector('.timeCount__seconds .timeCount__text');

    let screenWidth = window.screen.width;
    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const timeCount = () =>{
        let now = new Date();
        let difference = newDate - now;
        let days =Math.floor(difference / 1000 / 60 / 60 / 24);
        let hours =Math.floor(difference / 1000 / 60 / 60) % 24;
        let minutes =Math.floor(difference / 1000 / 60) % 60;
        let seconds =Math.floor(difference / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        if(screenWidth>768){
            daysText.textContent = declOfNum(days, ['Day', 'Days', 'Days']);
            hoursText.textContent = declOfNum(hours, ['Hour', 'Hours', 'Hours']);
            minutesText.textContent = declOfNum(minutes, ['Minute', 'Minutes', 'Minutes']);
            secondsText.textContent = declOfNum(seconds, ['Second', 'Seconds', 'Seconds']);
        } else{
            daysText.textContent = declOfNum(days, ['DD', 'DD', 'DD']);
            hoursText.textContent = declOfNum(hours, ['HH', 'HH', 'HH']);
            minutesText.textContent = declOfNum(minutes, ['MM', 'MM', 'MM']);
            secondsText.textContent = declOfNum(seconds, ['SS', 'SS', 'SS']);
        }
    };
    timeCount();

    setInterval(timeCount,1000);
});

document.addEventListener('DOMContentLoaded',function () {
    const form = document.getElementById("form");
    form.addEventListener('submit', formSend);
     
    async function formSend(e) {
        e.preventDefault();

        let popup = document.getElementById('popup');
        let popupTitle =document.getElementById('popupTitle') ;
        let popupText =document.getElementById('popapText') ;
        let closePopup = document.querySelector('.popup__close');
        closePopup.addEventListener('click', () =>{
            popup.classList.remove('open');
        })
        emailjs.sendForm('service_treeny', 'contact_form19', this)
        .then(function() {
            popup.classList.add('open');
            console.log('SUCCESS!');
        }, function(error) {
            popupTitle.textContent = (' Error');
            popupText.textContent = (' You haven`t successfully subscribed to the email newsletter');
            popup.classList.add('open');
            console.log('FAILED...', error);}
        )
    }
});
