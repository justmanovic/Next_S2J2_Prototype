const container = document.querySelector(".container")
const ul = document.querySelector("ul")
const btnShow = document.querySelector("#btn-show")
const btnHide = document.querySelector("#btn-hide")

const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]

function Recipe(title, steps) {
  let recipe = Object.create(Recipe.prototype)
  recipe.title = title
  recipe.steps = steps
  return recipe
}

Recipe.prototype.cook = function () {
  const stepsString = steps
    .slice(0, -2)
    .map(step => {
      if (step[step.length - 1] === "dry")
        return `<li>Add ${step[0]} ${step[1]} of ${step[2]}</li>`
      else
        return `<li>For ${step[0]} ${step[1]} to the bowl ${step[2]}</li>`
    })

  const cuisson = steps[steps.length - 1].map(el => `<p>Then, heat ${el[1]} minutes in the oven at ${el[0]} degrees.</p>`)[0]

  stepsString.unshift("<p><b>Here are the steps to follow:</b></p>")
  stepsString.unshift(cuisson)
  stepsString.unshift(`<p>${steps[steps.length - 2]}</p>`)
  stepsString.unshift(`<h1>${this.title}</h1>`)


  ul.innerHTML = stepsString.join("")
}



btnShow.addEventListener("click", showRecipe)


btnHide.addEventListener("click", hideRecipe)


function showRecipe() {
  const recipe1 = new Recipe("Omelette", steps)
  recipe1.cook()
  btnShow.classList.add("hidden")
  btnHide.classList.remove("hidden")
  ul.classList.remove("hidden")
}

function hideRecipe() {
  btnShow.classList.remove("hidden")
  btnHide.classList.add("hidden")
  ul.classList.add("hidden")
}