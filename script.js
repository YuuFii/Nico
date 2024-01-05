// Dapatkan elemen-elemen yang diperlukan
const burgerBtn = document.getElementById('burgerBtn');
const burgerXBtn = document.getElementById('burgerXBtn');
const navList = document.getElementById('nav-list');

// Tambahkan event listener untuk tombol hamburger
burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.add('hidden');
    burgerXBtn.classList.remove('hidden');
    navList.classList.toggle('hidden');
    navList.classList.add('active');
});

// Tambahkan event listener untuk tombol X
burgerXBtn.addEventListener('click', function () {
    burgerBtn.classList.remove('hidden');
    burgerXBtn.classList.add('hidden');
    navList.classList.toggle('hidden');
    navList.classList.remove('active');
});
