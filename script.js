const box = document.querySelector('.tab__buttons')
const btn1 = document.querySelector('.tab__button1')
const btn2 = document.querySelector('.tab__button2')
const btn3 = document.querySelector('.tab__button3')

const item1 = document.querySelector('.tab__item1')
const item2 = document.querySelector('.tab__item2')
const item3 = document.querySelector('.tab__item3')

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle('active')
    menu.classList.toggle("active");
});

box.addEventListener('click', (e) => {
	if (e.target.classList.contains('tab__button1')) {
		item1.style.display = 'block'
		item2.style.display = 'none'
		item3.style.display = 'none'
		btn1.style.backgroundColor = "#2E80B6";
		btn2.style.backgroundColor = "#92a0ad";
		btn3.style.backgroundColor = "#92a0ad";
	} else if (e.target.classList.contains('tab__button2')) {
		item1.style.display = "none";
        item2.style.display = "block";
        item3.style.display = "none";
        btn1.style.backgroundColor = "#92a0ad";
        btn2.style.backgroundColor = "#2E80B6";
        btn3.style.backgroundColor = "#92a0ad";
	} else if (e.target.classList.contains('tab__button3')) {
		item1.style.display = "none";
        item2.style.display = "none";
        item3.style.display = "block";
        btn1.style.backgroundColor = "#92a0ad";
        btn2.style.backgroundColor = "#92a0ad";
        btn3.style.backgroundColor = "#2E80B6";
	}
})


