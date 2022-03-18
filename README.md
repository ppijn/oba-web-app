# Project 1 @cmda-minor-web

Voor dit project kregen wij 1 week om iets te creeeren voor de OBA. We hadden keuze uit 3 user stories:

```

1. Voeding en diëtiek
   Als sportieve twintiger wil ik mij verdiepen in het effect van gezonde voeding op mijn conditie, om te leren hoe ik mijn sport beter kan beoefenen.

2. Digitaal burgerschap
   Als oudere burger wil ik leren hoe ik digitale formulieren van de gemeente kan vinden, invullen en versturen, om zodoende de digitalisering van de maatschappij beter het hoofd te kunnen bieden.

3. Ondernemen
   Als jonge ondernemer wil ik meer informatie vinden over het opzetten van een onderneming, om zodoende meer kans te hebben op succes.
```

Ik heb gekozen voor Ondernemen omdat deze mij het meeste aansprak van het lijstje, en omdat ik hier gelijk wat ideeen voor had.

Mijn idee was om een stappenplan te maken met de belangrijkste fases in Ondernemen en daar boeken voor laten zien die daar te maken hebben. Simpel idee, maar wel lastig om het uit te werken.
Ik zal je door mijn applicatie heen lopen. Ik heb de header en navigatie balk nagemaakt van de OBA om hun stijl te behouden. Er staat een stukje tekst wat een korte beschrijving geeft over ondernemen, en daar onder zijn de stappen gelijk te zien. Bij het opstarten van de website staan er automatisch boeken over de eerste stappen per fase. Je kan op de andere stappen klikken en dan komen de boeken die er mee te maken hebben er te staan.

Nu voor de code. Ik heb de data gefetched en en gerendered om er 5 te laten zien. Op de OBA website zelf staan de boeken per categorie (subject) gesorteerd. Ik heb in de URL gezet dat ik alleen wil filteren op die subjecten

```
 const url = `${cors}${endpoint}subject%3A${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;
```

Voor de functie dat als je klikt op de tekst van een van de stappen, en dat er dan data wordt ingeladen voor die stappen, heb ik een button value functie geschreven. In de html zet je de value die je uit de button wilt halen en wilt importeren in de query.

```
<li><button value="Testen">Testen</button></li>
```

De value van de button heb ik in de URL gezet onder "btnValue" en daarvoor deze functie geschreven:

```
export function getBtnValue() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((item) => {
    item.addEventListener("click", function () {
      const btnValue = item.value;
      console.log(btnValue);
      getDataConcept(btnValue);
      getDataDesign(btnValue);
      getDataManagement(btnValue);
      getDataPlanning(btnValue);
    });
  });
}
console.log(getBtnValue);

```

Wat had ik nog willen toevoegen/ verbeteren?

- Detailed Page
- Pijltje om meer boeken in te laden
- Skeleton state goed verbergen (nu zie je de boeken er naast staan)
