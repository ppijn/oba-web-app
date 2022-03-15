export function render(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
        <img src="${
          item.coverimages ? item.coverimages[1] : "Geen samenvatting"
        }" alt="Boek Kaft" class="boek-kaft">
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}
