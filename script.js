const namesArray = [] // create a list to store names

function addName(){
// get a trimmed version of the name from the input box
const nameInput = document.getElementById('nameInput')
const name =nameInput.value.trim()
namesArray.push(name)
displayNames()
nameInput.value = ''
}


function displayName(){
    const nameList = document.getElementById('name list')//get UL
    nameList.innerHTML = '' //clears the list
 
for (let i= 0; i < namesArray.length; i++ ){
    const name = namesArray[i] //get the current name from the array

    const li = document.createElement('li')
    li.className = 'list-group-item'

    const span= document.createElement('span')
    span.textContent = name

    li.appendChild(span)

    nameList.appendChild(li)


}


}











document.getElementById('addNameBtn').addEventListener('click', addName)
