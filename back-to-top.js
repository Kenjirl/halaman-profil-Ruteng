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
    if (document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block"; // mengganti style display dari button menjadi block
    } else {
        toTopButton.style.display = "none"; // mengganti style display dari button menjadi none
    }
}

// function ini berfungsi untuk mengembalikan halaman web ke ujung atas
function backToTop() {
    document.documentElement.scrollTop = 0;
}
