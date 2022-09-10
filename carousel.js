let baruIndex = 1;
let lamaIndex = 1;
let cwIndex = 1;
let mikIndex = 1;
let krsIndex = 1;
let frsIndex = 1;

showSlides(baruIndex, 1);
showSlides(lamaIndex, 2);
showSlides(cwIndex, 3);
showSlides(mikIndex, 4);
showSlides(krsIndex, 5);
showSlides(frsIndex, 6);

// Next/previous controls
function plusSlides(n, gereja) {
    if (gereja == 1) {
        showSlides((baruIndex += n), gereja);
    }
    if (gereja == 2) {
        showSlides((lamaIndex += n), gereja);
    }
    if (gereja == 3) {
        showSlides((cwIndex += n), gereja);
    }
    if (gereja == 4) {
        showSlides((mikIndex += n), gereja);
    }
    if (gereja == 5) {
        showSlides((krsIndex += n), gereja);
    }
    if (gereja == 6) {
        showSlides((frsIndex += n), gereja);
    }
}

function showSlides(n, gereja) {
    let i;

    if (gereja == 1) {
        let slides = document.getElementsByClassName("baruImg");
        if (n > slides.length) {
            baruIndex = 1;
        }
        if (n < 1) {
            baruIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[baruIndex - 1].style.display = "block";
    }
    if (gereja == 2) {
        let slides = document.getElementsByClassName("lamaImg");
        if (n > slides.length) {
            lamaIndex = 1;
        }
        if (n < 1) {
            lamaIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[lamaIndex - 1].style.display = "block";
    }
    if (gereja == 3) {
        let slides = document.getElementsByClassName("cwImg");
        if (n > slides.length) {
            cwIndex = 1;
        }
        if (n < 1) {
            cwIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[cwIndex - 1].style.display = "block";
    }
    if (gereja == 4) {
        let slides = document.getElementsByClassName("mikImg");
        if (n > slides.length) {
            mikIndex = 1;
        }
        if (n < 1) {
            mikIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[mikIndex - 1].style.display = "block";
    }
    if (gereja == 5) {
        let slides = document.getElementsByClassName("krsImg");
        if (n > slides.length) {
            krsIndex = 1;
        }
        if (n < 1) {
            krsIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[krsIndex - 1].style.display = "block";
    }
    if (gereja == 6) {
        let slides = document.getElementsByClassName("frsImg");
        if (n > slides.length) {
            frsIndex = 1;
        }
        if (n < 1) {
            frsIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[frsIndex - 1].style.display = "block";
    }
}
