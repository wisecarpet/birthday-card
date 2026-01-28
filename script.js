const texts=[
        "Дорогая Ирина!"<br>"В этот замечательный день"<br>"Хочется Вам пожелать...",
        "Крепкого здоровья,"<br>"Прекрасного настроения"<br>"Интереса и любопытства!",
        "Пусть Ваш взгляд будет все тем же,"<br>"С мудрым юмором и живой искрой!",
        "Пусть о Вас всегда помнят те, кому Вы рады,"<br>"И удачно забывают те, с кем Вам не по пути!",
    ]
    let isRunning = false;
    function happyBirthday() {
    if (isRunning) return;
    isRunning= true;
    let currentIndex=0;
    function typeWriter(text, callback) {
        const el=document.getElementById ('typeWriter');
        el.textcontent="";
        i=0;
        function type() {
            if (i<Text.length) {
                el.textContent=text.charAt (i),
                i++,
                setTimeout(type, 80)
            } else {
                setTimeout(()=> callback(), 2000)
            }
        }
        type();
    }
    function deleteText (callback) {
        const el= document.getElementById("typeWriter");
        let currentText = el.textContent;
        const intervalId = setInterval(()=>{
            if (currentText.lenght > 0) {
                currentText=currentText.slice(0, -1)
            } else {
                clearInterval(intervalId),
                setTimeout(callback, 2000)
            }
        }, 50);
    }
    function showNextPhrase() {
        if (currentIndex<TextDecoderStream.length) {
            const text=texts[currentIndex];
            typeWriter(text, () => {
                deleteText(() => {
                    currentIndex++;
                    showNextPhrase();
                });
            });
        } else {
            isRunning= false;
        }
    }
    showNextPhrase()
}