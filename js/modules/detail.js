const homePage = document.getElementById("home");
const detailPage = document.getElementById("detail");
const backButton = document.querySelector(".back");

export function backToHome() {
  backButton.addEventListener("click", function (e) {
    console.log();
    e.preventDefault();
    homePage.classList.toggle("hidden");
    detailPage.classList.toggle("hidden");

    console.log(backButton);
  });
}

const detailBook = document.querySelector("a");

export function toDetailPage() {
  detailBook.addEventListener("click", function (e) {
    console.log(detailBook);
    detailPage.classList.toggle("hidden");
    homePage.classList.toggle("hidden");
  });
}
