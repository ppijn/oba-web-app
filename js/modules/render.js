export function renderConcept(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken1");
  // const boeken = document.getElementById("concept-fase");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
        <a link="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}

export function renderDesign(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken2");
  // const boeken = document.getElementById("concept-fase");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
        <a link="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}

export function renderPlanning(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken3");
  // const boeken = document.getElementById("concept-fase");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
        <a link="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}

export function renderManagement(data) {
  const results = data.results;
  let boeken = document.getElementsByClassName("boeken4");
  // const boeken = document.getElementById("concept-fase");

  console.dir(results);

  Array.from(boeken).forEach((boek) => {
    let html = "";
    results.forEach((item, i) => {
      html = `
        <a link="#detail">
         <img src="${
           item.coverimages ? item.coverimages[1] : "Geen samenvatting"
         }" alt="${item.titles}" class="boek-kaft">
         <span class="boek-title">${item.titles[0]}</span>
        </a>
        
        `;
    });
    boek.insertAdjacentHTML("beforeend", html);
  });
}
