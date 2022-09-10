/* 
    Javascript ini berfungsi untuk memunculkan button "Back To Top" ketika user melakukan scroll ke bawah
    Ketika button tersebut diklik, maka halaman web akan kembali ke ujung atas
*/

toTopButton = document.getElementById("toTop");

// function ini berfungsi untuk membaca sejauh mana user melakukan scroll,
// kemudian akan memunculkan button "Back To Top"
window.onscroll = function () {
    scrollWeb();
};

function scrollWeb() {
    if (document.documentElement.scrollTop > 1000) {
        toTopButton.style.transform = "translateY(-10px)";
        toTopButton.style.opacity = 1; // mengganti style opacity dari button menjadi 1
    } else {
        toTopButton.style.transform = "translateY(10px)";
        toTopButton.style.opacity = 0; // mengganti style opacity dari button menjadi 0
    }
}

// function ini berfungsi untuk mengembalikan halaman web ke ujung atas
function backToTop() {
    document.documentElement.scrollTop = 0;
}
