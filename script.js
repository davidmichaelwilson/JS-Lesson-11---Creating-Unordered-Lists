let myDiscoveries = []

const inputElement = document.getElementById("input-element")
const inputButton = document.getElementById("input-button")
const unorderedListElement = document.getElementById("unordered-list-element")

  console.log(unorderedListElement)

inputButton.addEventListener("click", function() {
  myDiscoveries.push(inputElement.value)
  display()
})

function display() {
  let listItems = ""
  for (let i=0; i < myDiscoveries.length; i++) {
    listItems += `
      <li>
      <a target = ‘_blank’ href = '${myDiscoveries[i]}’> ${myDiscoveries[i]}</a>
      </li>
      `
    console.log(listItems)
  }

    unorderedListElement.innerHTML = listItems
}

