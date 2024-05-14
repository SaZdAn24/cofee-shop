const menu = document.querySelector(".menu");
console.log(menu);
// делаем переход на стрвницу menu
menu.addEventListener("click", function () {
  window.location.href = "menu.html";
});

document.addEventListener("DOMContentLoaded", function () {
  // Инициализируем переменные
  let currentSlide = 0; // Текущий активный слайд (индекс)
  const slides = document.querySelectorAll(".slider"); // Получаем все слайды
  const totalSlides = slides.length; // Общее количество слайдов

  // Функция для отображения конкретного слайда по его индексу
  function showSlide(index) {
    slides.forEach((slide, i) => {
      // Показываем слайд с индексом index, скрываем остальные
      slide.style.display = i === index ? "block" : "none";
    });
  }
  // Назначаем обработчики событий для кнопок
  slides.forEach((slide, index) => {
    // Для каждого слайда назначаем обработчики событий
    slide.querySelector(".arrow-left").addEventListener("click", () => {
      currentSlide = (index - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });

    slide.querySelector(".arrow-right").addEventListener("click", () => {
      currentSlide = (index + 1) % totalSlides;
      showSlide(currentSlide);
    });
  });

  // Показываем первый слайд изначально
  showSlide(currentSlide);
});
