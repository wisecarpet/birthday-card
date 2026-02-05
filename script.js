const bgMusic = document.getElementById("bgMusic");
const keySound = document.getElementById("keySound");
const texts=[
        "Дорогая Ирина!\nВ этот замечательный день\nХочется Вам пожелать...",
        "Крепкого здоровья,\nПрекрасного настроения\nИнтереса и любопытства!",
        "Пусть Ваш взгляд будет все\nтем же, с мудрым юмором\n и живой искрой!",
        "Пусть о Вас всегда помнят\n те, кому Вы рады, и удачно\n забывают те, с кем\nВам не по пути!"
    ];
    const images=[
        "Klimt1.jpg",
        "Klimt2.jpg",
        "Klimt3.jpg",
        "Klimt4.jpg"
    ];
    let isRunning = false;
    function happyBirthday() {
    if (isRunning) return;
    isRunning= true;
    bgMusic.load();
    bgMusic.play ();
    bgMusic.currentTime = 0;
    bgMusic.volume = 1.0;
    let currentIndex=0;
const el = document.getElementById("typeWriter");
const pictureEl = document.getElementById("picture");
    function typeWriter(text, callback) {
        el.textContent="";
        let i=0;
        function type() {
            if (i<text.length) {
                keySound.currentTime = 0;
                keySound.load();
                keySound.play();
                keySound.volume = 0.1;
                el.textContent += text.charAt (i);
                i++;
                setTimeout(type, 80);
            } else {
                setTimeout(() => callback(), 2000);
            }
        }
        type();
    }
    function deleteText (callback) {
        let currentText = el.textContent;
        const intervalId = setInterval(() => {
            if (currentText.length > 0) {
                currentText=currentText.slice(0, -1);
                keySound.currentTime = 0;
                keySound.play();
                keySound.volume = 0.1;
                el.textContent = currentText;
            } else {
                clearInterval(intervalId);
                setTimeout(callback, 200);
            }
        }, 50);
    }
    function showNextPhrase() {
        if (currentIndex<texts.length) {
            /*меняем картинку*/
            pictureEl.style.backgroundImage = `url('${images[currentIndex]}')`;
            const text=texts[currentIndex];
            typeWriter(text, () => {
                deleteText(() => {
                    currentIndex++;
                    showNextPhrase();
                });
            });
        } else {
            isRunning= false;
            pictureEl.style.backgroundImage = `url('startBackground.jpg')`;
        }
    }
    setTimeout (() => {
        showNextPhrase();
}, 170);
    }