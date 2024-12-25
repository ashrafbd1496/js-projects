let dlBtn = document.getElementById("dl_btn");
dlBtn.addEventListener("click", function () {
  window.location.href = "https://github.com/ashrafbd1496/";
});

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = () => {
  showSlider("next");
};
prevDom.addEventListener("click", function () {
  showSlider("prev"); // Call showSlider with "prev" argument
});

let timeRunning = 3000;
let timeAutoNext = 4000;
let runTimeOut;
let runAutoRunSlide;

/*for auto sliding */
runAutoRunSlide = setInterval(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else if (type === "prev") {
    let firstItem = listItemDom.firstChild;
    let firstThumbnail = thumbnailDom.firstChild;
    listItemDom.insertBefore(firstItem, itemSlider[itemSlider.length]);
    thumbnailDom.insertBefore(
      firstThumbnail,
      itemThumbnail[itemThumbnail.length]
    );
    carouselDom.classList.add("prev");
    // let positionLastItem = itemSlider.length - 1;
    // listItemDom.prepend(itemSlider[positionLastItem]);
    // thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    // carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);
}
