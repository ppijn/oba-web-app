export function backToHome() {
  const homePage = document.getElementById(
    "home-header, home-info, home-1, home-2, home-3, home-4"
  );
  const detailPage = document.getElementById("detail");
  const backButton = document.querySelector(".back");

  backButton.addEventListener("click", function (e) {
    console.log();
    e.preventDefault();
    homePage.classList.toggle("hidden");
    detailPage.classList.toggle("hidden");

    console.log(backButton);
  });
}

document.querySelector(`.${item.id}`).addEventListener("click", function (i) {
  i.preventDefault();
  homePage.classList.toggle("hidden");
  detailPage.classList.toggle("hidden");
});
