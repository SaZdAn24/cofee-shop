// получаем элементы со страницы
const pereklButton = document.querySelector(".tea");
const cofeeButton = document.querySelector("#perekl");
const logo = document.querySelector(".logotip");
const dessert = document.querySelector(".dessert");
// клик по кнопке чай
pereklButton.addEventListener("click", function () {
  window.location.href = "tea.html";
});
// клик по кнопке кофе
cofeeButton.addEventListener("click", function () {
  console.log("clic");
  window.location.href = "menu.html";
});
// клик по логотипу на главную страницу
logo.addEventListener("click", function () {
  window.location.href = "index.html";
});
dessert.addEventListener("click", function () {
  window.location.href = "dessert.html";
});
// все что косается модального окна
document.addEventListener("DOMContentLoaded", function () {
  // получение элементов из дом
  const allIrishElements = document.querySelectorAll(".Irish");
  const headerModal = document.getElementById("headerModal");
  const close = document.querySelector(".close");
  const overlay = document.getElementById("overlay");
  const allMoroccanElements = document.querySelectorAll(".moroccan");
  const modalName = document.querySelector(".name");
  const modalFragment = document.querySelector(".fragment");
  const modalSizeButtons = document.querySelectorAll(".for_buttons .size");
  const modalAdditivesButtons = document.querySelectorAll(
    ".for_buttons .additives"
  );
  const modalTotalPrice = document.querySelector(".itog");

  // Открыть модальное окно при клике на каждый элемент с классом "Irish"
  allIrishElements.forEach(function (element) {
    element.addEventListener("click", function () {
      headerModal.style.display = "block";
      overlay.style.display = "block";
      const card = element.closest(".first_card");

      // Получаем название и описание из соответствующих элементов карточки
      const imgSrc = card.querySelector(".Irish").getAttribute("src");
      const name = card.querySelector(".ice_text").textContent;
      const fragment = card.querySelector(".opisanie").textContent;
      const price = card.querySelector(".cena").textContent;

      // Обновляем содержимое модального окна
      modalTotalPrice.textContent = price;
      modalName.textContent = name;
      modalFragment.textContent = fragment;
      const modalImg = document.querySelector(".moroccan");
      modalImg.setAttribute("src", imgSrc);
    });
  });

  // Другие действия, которые могут быть связаны с закрытием модального окна
  close.addEventListener("click", function () {
    headerModal.style.display = "none";
    overlay.style.display = "none";
  });
});
