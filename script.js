const galleryContainer = document.getElementById("gallery-container");
const popUpCardContainer = document.getElementById("popup-card-container");
const popUpImg = document.getElementById("popup-image");
const popUpCard = document.getElementById("popup-card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let count = 0;
const imgArray = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/637/200/300",
  "https://picsum.photos/id/998/200/300",
  "https://picsum.photos/id/124/200/300",
  "https://picsum.photos/id/95/200/300",
  "https://picsum.photos/id/191/200/300",
  "https://picsum.photos/id/169/200/300",
  "https://picsum.photos/id/852/200/300",
  "https://picsum.photos/id/66/200/300",
  "https://picsum.photos/id/456/200/300",
  "https://picsum.photos/id/235/200/300",
  "https://picsum.photos/id/951/200/300",
  "https://picsum.photos/id/84/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/356/200/300",
  "https://picsum.photos/id/184/200/300",
  "https://picsum.photos/id/876/200/300",
  "https://picsum.photos/id/299/200/300",
  "https://picsum.photos/id/575/200/300",
  "https://picsum.photos/id/443/200/300",
  "https://picsum.photos/id/58/200/300",
  "https://picsum.photos/id/29/200/300",
  "https://picsum.photos/id/789/200/300",
  "https://picsum.photos/id/54/200/300",
];

for (let i = 0; i < imgArray.length; i++) {
  const image = document.createElement("img");
  image.src = imgArray[i];
  image.classList.add("new-image");
  galleryContainer.appendChild(image);
}

const showOrHideBtns = (count) => {
  if (count === 0) {
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
  } else if (count === imgArray.length - 1) {
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
  }
};

const images = document.querySelectorAll(".new-image");
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    popUpCardContainer.style.display = "flex";
    count = index;
    popUpImg.src = imgArray[count];
    showOrHideBtns(count);
  });
});

prevBtn.addEventListener("click", () => {
  count--;
  showOrHideBtns(count);
  popUpImg.src = imgArray[count];
});
nextBtn.addEventListener("click", () => {
  count++;
  showOrHideBtns(count);
  popUpImg.src = imgArray[count];
});

popUpCardContainer.addEventListener("click", () => {
  popUpCardContainer.style.display = "none";
});
popUpCard.addEventListener("click", (e) => {
  e.stopPropagation();
});
