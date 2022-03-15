export function render(data) {
  const results = data.results;
  const boeken = document.querySelector(".boeken");

  console.dir(results);
  results.forEach((item, i) => {
    const html = `
            <article>
              <img src="${
                item.coverimages ? item.coverimages[1] : "Geen samenvatting"
              }" alt="Boek Kaft" class="boek-kaft">
            </article>
          `;
    boeken.insertAdjacentHTML("beforeend", html);
  });
}
