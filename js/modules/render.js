export function render(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
      <a link="#">
        <img src="${
          item.coverimages ? item.coverimages[1] : "Geen samenvatting"
        }" alt="${item.titles}" class="boek-kaft">
        </a>
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}
