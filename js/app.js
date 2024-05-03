let contant = document.querySelector(".container");
let youtubers = [
    {
      name: "AriaKeoxer",
      subscriber: "582k",
      inCome : "20,000 $",
    },
    {
        name: "Mia Plays",
        subscriber: "562k",
        inCome : "23,000 $",
      },
      {
        name: "Kouman",
        subscriber: "376k",
        inCome : "34,000 $",
      },
      {
        name: "Farshad Silent",
        subscriber: "740k",
        inCome : "20,000 $",
      },
      {
        name: "Putak",
        subscriber: "917k",
        inCome : "60,000 $",
      },
      {
        name: "BiGeZmOGe",
        subscriber: "122k",
        inCome : "2,000 $",
      },
  ];

  let search = document.querySelector(".search");

  let Result = youtubers;

search.addEventListener("input", (e) => {

  const userSearch = e.target.value.toLowerCase();

  Result = youtubers.filter((item) => {

    return item.name.toLowerCase().includes(userSearch);

  });
  renderInUI(Result, contant);

});
function renderInUI(array, place) {

  place.innerHTML = "";

  array.forEach((item) => {

    const div = document.createElement("div");

    div.innerHTML = `

        <h2>${item.name}</h2>
        <p>${item.subscriber}</p>
        <p>${item.inCome}</p>

    `;
    place.appendChild(div);

  });
}

renderInUI(Result, contant);