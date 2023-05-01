function changeMode() {

    let myBody =document.body;

    myBody.classList.toggle('dark-mode')

    let darkLightText = document.getElementById('darkLightMode')

    let spanELements = document.getElementsByTagName('span')

    let aELements = document.getElementsByTagName('a')

    let pELements = document.getElementsByTagName('p')

    let h3ELements = document.getElementsByTagName('h3')

    if(myBody.classList.contains("dark-mode")){

        darkLightText.innerText='Recharge your browsing experience and switch back to light mode'

        document.getElementById('logoToggle').src = "https://i.ibb.co/4FMrMnk/image.png"

        for (var i = 0 ;i < spanELements.length; i++) {

            spanELements[i].classList.add("spanTagElementWhite")

        }

        for (var i = 0 ;i < aELements.length; i++) {

            aELements[i].classList.add("aTagElementWhite")

        }

        for (var i = 0 ;i < pELements.length; i++) {

            pELements[i].classList.add("pTagElementWhite")

        }

        for (var i = 0 ;i < h3ELements.length; i++) {

            h3ELements[i].classList.add("h3TagElementWhite")

        }

    }
    else{

        darkLightText.innerText='Save battery life and reduce blue light emissions with dark mode'

        document.getElementById('logoToggle').src = "https://i.ibb.co/0XjmwRZ/image.png"

        for (var i = 0; i < spanELements.length; i++) {

            spanELements[i].classList.remove("spanTagElementWhite");

        }

        for (var i = 0; i < aELements.length; i++) {

            aELements[i].classList.remove("aTagElementWhite");

        }

        for (var i = 0; i < pELements.length; i++) {

            pELements[i].classList.remove("pTagElementWhite");

        }

        for (var i = 0; i < h3ELements.length; i++) {

            h3ELements[i].classList.remove("h3TagElementWhite");

        }

    }

    let darkIcon = document.getElementById('darkModeButton')

    if(darkIcon.classList.contains('bi-toggle-off')){

        document.getElementById("darkModeButton").classList.add('bi-toggle-on')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-off')

    }
    else{

        document.getElementById("darkModeButton").classList.add('bi-toggle-off')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-on')

    }
}

function loadCoupon(){
    document.getElementById('MyCoupon').style.visibility = 'visible';
    document.getElementById('mainPage').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('MyCoupon').style.visibility = 'hidden';
    document.getElementById('mainPage').style.opacity = '1'
}