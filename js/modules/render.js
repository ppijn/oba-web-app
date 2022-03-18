export function renderConcept(data) {
  const results = data.results;
  const boeken = document.querySelector(".boeken1");

  let html = "";
  const boekenLink = document.querySelectorAll(".boeken1 a");
  boekenLink.forEach((item, i) => {
    item.remove();
  });
  results.forEach((item, i) => {
    html += `
    <a href="#detail">
      <img src="${
        item.coverimages ? item.coverimages[1] : "Geen samenvatting"
      }" alt="${item.titles}" class="boek-kaft">
      <span class="boek-title">${item.titles[0]}</span>
      </a>
      `;
  });
  boeken.insertAdjacentHTML("beforeend", html);
  console.log(document.querySelectorAll("#detail"));
}

export function renderDesign(data) {
  const results = data.results;
  const boeken = document.querySelector(".boeken2");

  console.dir(results);

  const boekenLink = document.querySelectorAll(".boeken2 a");
  boekenLink.forEach((item, i) => {
    item.remove();
  });

  let html = "";
  results.forEach((item, i) => {
    html += `
        <a href="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
  });
  boeken.insertAdjacentHTML("beforeend", html);
  // });
}

export function renderPlanning(data) {
  const results = data.results;
  const boeken = document.querySelector(".boeken3");

  console.dir(results);

  const boekenLink = document.querySelectorAll(".boeken3 a");
  boekenLink.forEach((item, i) => {
    item.remove();
  });

  let html = "";
  results.forEach((item, i) => {
    html += `
        <a href="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
  });
  boeken.insertAdjacentHTML("beforeend", html);
  // });
}

export function renderManagement(data) {
  const results = data.results;
  const boeken = document.querySelector(".boeken4");

  console.dir(results);

  const boekenLink = document.querySelectorAll(".boeken4 a");
  boekenLink.forEach((item, i) => {
    item.remove();
  });

  let html = "";
  results.forEach((item, i) => {
    html += `
        <a href="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
  });
  boeken.insertAdjacentHTML("beforeend", html);
  // });
}
