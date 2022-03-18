const homePage = document.getElementById(
  "home-header, home-info, home-1, home-2, home-3, home-4"
);
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

// const detailBook = document.querySelector("a");

// export function toDetailPage() {
//   document
//     .querySelector(`.${item.id}`)
//     .detailBook.addEventListener("click", function (e) {
//       console.log(detailBook);
//       detailPage.classList.toggle("hidden");
//       homePage.classList.toggle("hidden");
//     });
// }
