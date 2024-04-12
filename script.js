const nameArray = [] //Create a list to store names

function addName() {
  //get a trimmed version of the name from the input box
  //where names get input and if nothing is written it comes out blank
  const nameInput = document.getElementById('nameInput')
  const name = nameInput.value.trim()
  nameArray.push(name)
  displayNames()
  nameInput.value = ''

}
//allows you to keep adding names and stores them into a list  
function displayNames() {
  const nameList = document.getElementById('nameList')//get UL element 
  nameList.innerHTML = '' //clears the list 

  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i] //get the current name from the array

    const li = document.createElement('li')
    li.className = 'list-group-item'

    const span = document.createElement('span')
    span.textContent = name

    li.appendChild(span)
    nameList.appendChild(li)

  }

}

//assigns each name a number and picks one of the random numbers and a name with that number gets displayed
function pickRandomName(){
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''


  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  randomNameDiv.innerHTML = `Congrats <span class="color">${randomName}</span>, you were chosen!`
 
}

//assigns each name a number and random number is chosen and name with that number gets displayed but after each one it deletes the name that it chooses
function deleteName(){
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''

  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  randomNameDiv.innerHTML = `Congrats <span class="color">${randomName}</span>, you were chosen!`

  nameArray.splice(randomNumber, 1)
  displayNames()
}








// add onclick to add name btn
//button that adds the name
document.getElementById('addNameBtn').addEventListener('click', addName)

//buttons that generate name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)

document.getElementById('deleteName').addEventListener('click', deleteName)