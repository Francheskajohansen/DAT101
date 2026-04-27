"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
const txtRectWidth = document.getElementById("txtRectWidth");
const txtRectHeight = document.getElementById("txtRectHeight");
const cmbTaskCalculate = document.getElementById("cmbTaskCalculate");
const txtTask10tput = document.getElementById("txtTask10output");

export function cmTaskCalculate() {
  const width = Number(txtRectWidth.value);
  const height = Number(txtRectHeight.value);
  const circumference = 2 * (width + height);
  const area = width * height;
  txtTask10tput.innerText = `Circumference: ${circumference}, Area: ${area}`;
}

cmbTaskCalculate.addEventListener("click", cmTaskCalculate);

//--- Part 2 ---------------------------------------------------------------------------------------------
const task2Words = [];
const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    const word = txtTask2Word.value.trim();
    if (word !== "") {
      task2Words.push(word);
      txtTask2Output.innerText = `Number of words: ${task2Words.length}\nWords: ${task2Words.join(", ")}`;
      txtTask2Word.value = "";
    }
  }
}

txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
const cmbTask3Calculate = document.getElementById("cmbTask3Calculate");
const txtTask3Output = document.getElementById("txtTask3Output");

function cmTask3CheckAnswerCalculate() {
  const checkboxes = document.getElementsByName("chkTask3");
  const selected = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected.push(checkboxes[i].value);
    }
  }

  if (selected.length === 0) {
    txtTask3Output.innerText = "No checkboxes selected.";
  } else {
    txtTask3Output.innerText = `You selected checkboxes: ${selected.join(", ")}`;
  }
}

cmbTask3Calculate.addEventListener("click", cmTask3CheckAnswerCalculate);

//--- Part 4 ----------------------------------------------------------------------------------------------
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "task4Car";
  radio.value = CarTypes[i].caption;
  radio.id = `car_${i}`; 

  const label = document.createElement("label");
  label.htmlFor = `car_${i}`;
  label.innerText = CarTypes[i].caption;

  const br = document.createElement("br");

  radio.addEventListener("change", function() {
    txtTask40Output.innerText = `You selected: ${this.value}`;
  });

  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(br);
}


//--- Part 5 ----------------------------------------------------------------------------------------------
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

function selectTask5AnimalsChange() {
  const selected = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;
  txtTask5Output.innerText = `You selected: ${selected}`;
}

selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);

//--- Part 6 -------------- --------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = GirlsNames[i];
  selectTask6Girls.add(option);
}

function selectTask6GirlsChange() {
  const selected = selectTask6Girls.options[selectTask6Girls.selectedIndex].text;
  txtTask6Output.innerText = `You selected: ${selected}`;
}

selectTask6Girls.addEventListener("change", selectTask6GirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectmovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmAddMovie = document.getElementById("cmAddMovie");
const tblMovies = document.getElementById("tblMovies");

for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = MovieGenre[i];
  selectmovieGenre.add(option);
}

let movieCounter = 0;

function cmAddMovieClick() {
  const title = txtMovieTitle.value.trim();
  const genre = selectmovieGenre.options[selectmovieGenre.selectedIndex].text;
  const director = txtMovieDirector.value.trim();
  const rate = txtMovieRate.value.trim();

  if (title === "" || director === "") {
    alert("Please fill in title and director.");
    return;
  }

  movieCount++;
  const row = tblMovies.insertRow();
  row.insertCell(0).innerText = movieCounter;
  row.insertCell(1).innerText = title;
  row.insertCell(2).innerText = genre;
  row.insertCell(3).innerText = director;
  row.insertCell(4).innerText = rate;

  txtMovieTitle.value = "";
  txtMovieDirector.value = "";
  txtMovieRate.value = "5";
}
