// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colour = document.querySelectorAll('#palette div')
console.log(colour)

const currentColor = document.querySelector('#current-color')

colour.forEach((list) => {
    list.addEventListener ('click', () => {
      currentColor.style.backgroundColor = list.style.backgroundColor
    })
  })

const cell = document.querySelectorAll('.cell')
cell.forEach((grid) => {
  grid.addEventListener ('click', () => {
    grid.style.backgroundColor = currentColor.style.backgroundColor
  })
})