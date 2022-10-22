let width = 362; // ширина картинки
let count = 2.2; // видимое количество изображений

let list = document.querySelector("ul");
let listElems = document.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

document.getElementById("next").onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

document.getElementById("prev").onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
