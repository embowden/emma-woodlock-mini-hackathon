//ADD SOUNDCLIP
//CHANGE CLASS FOR SANDWICH

//query for the button
let button = document.querySelector(".header__button");

//------LINK TO API-------//
// const SANDWICH_API =
//   "https://api.spoonacular.com/recipes/complexSearch?apiKey=8f633cb4cc0d42a2b1be3ec9d3740667&query=sandwich&number=30&type=main course&addRecipeInformation=true";

//------ADD AUDIO FOR BUTTON-------//
let audio = new Audio("");

//------ADD EVENT LISTENER-------//
button.addEventListener("click", (event) => {
  displayRecipe(event);
});

//------CREATE ARRAYS FOR DISPLAY RECIPE FUNCTION-------//
let veggieArray = [];
let meatyArray = [];

//------CALL THE API-------//
function displayRecipe(event) {
  event.preventDefault();
  audio.play();

  // axios
  //   .get(SANDWICH_API)
  //   .then((response) => {
  //     //call the data
  //     let dataArray = response.data.results;

  button.textContent = "nah, try again!";
  // dietPreference(dataArray);
  dietPreference(results);

  //function to check radio selection
  if (document.getElementById("either").checked) {
    // let randomRecipe = randomIndex(dataArray);
    let randomRecipe = randomIndex(results);
    createSandwich(randomRecipe);
    container.innerHTML = "";
  } else if (document.getElementById("meaty").checked) {
    let randomRecipe = randomIndex(meatyArray);
    createSandwich(randomRecipe);
    container.innerHTML = "";
  } else if (document.getElementById("veggie").checked) {
    let randomRecipe = randomIndex(veggieArray);
    createSandwich(randomRecipe);
    container.innerHTML = "";
  }
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

//------FUNCTIONS-------//

//function to create elements
function makeElement(type, className, parent, text) {
  if (text === undefined) {
    text = "";
  }
  let element = document.createElement(type);
  element.classList.add(className);
  parent.appendChild(element);
  element.innerText = text;
  return element;
}

//function to call random index
function randomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//function to create sandwich section (var - randomRecipe)
function createSandwich(recipe) {
  let container = document.querySelector(".sandwich__container");
  container.classList.add("animate__animated", "animate__lightSpeedInRight");
  container.innerHTML = "";
  let swHeader = makeElement("h1", "sandwich__header", container, recipe.title);
  let contents = makeElement("div", "sandwich__contents", container);

  let picture = makeElement("img", "sandwich__picture", contents);
  picture.setAttribute("src", recipe.image);
  picture.setAttribute("alt", `Image of ${recipe.title}`);

  let summary = makeElement("p", "sandwich__summary", contents);
  summary.innerHTML = recipe.summary;
  let recipeLink = makeElement(
    "a",
    "sandwich__link",
    container,
    "Mmm, yummy! Take me to the recipe!"
  );
  recipeLink.setAttribute("href", recipe.sourceUrl);
}

//function to create veg/meat arrays
function dietPreference(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].vegetarian === true) {
      veggieArray.push(array[i]);
    } else {
      meatyArray.push(array[i]);
    }
  }
  return { veggieArray, meatyArray };
}

//resources
// https://stackoverflow.com/questions/20677997/javascript-break-string-on-based-on-preceding-consecutive-characters
// https://spoonacular.com/food-api/console#Dashboard
// https://www.geeksforgeeks.org/how-to-get-character-array-from-string-in-javascript/

//------RETIRED CODE-------//

// console.log(dataArray);
// //pick a random recipe
// let randomRecipe = randomIndex(dataArray);
// console.log(randomIndex(dataArray));
// //generate the content via DOM
// createSandwich(randomRecipe);

// button.textContent = "nah, try again!";
// dietPreference(results);

// //function to check radio selection
// if (document.getElementById("either").checked) {
//   let randomRecipe = randomIndex(results);
//   createSandwich(randomRecipe);
//   container.innerHTML = "";
// } else if (document.getElementById("meaty").checked) {
//   let randomRecipe = randomIndex(meatyArray);
//   createSandwich(randomRecipe);
//   container.innerHTML = "";
// } else if (document.getElementById("veggie").checked) {
//   let randomRecipe = randomIndex(veggieArray);
//   createSandwich(randomRecipe);
//   container.innerHTML = "";
// }

//   //USING THE SANDWICH.JS NOT CALLING API
//   //pick a random recipe
//   let randomRecipe = randomIndex(results);
//   console.log(randomIndex(results));
//   //generate the content via DOM
//   createSandwich(randomRecipe);
//   container.innerHTML = "";
