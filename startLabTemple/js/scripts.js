import { temples } from '../data/temples.js'
console.log(temples)

import { url } from '../data/temples.js'
console.log(url)

//-------------GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere")
//GET A REFERENCE TO THE HTML DIALOG EVENT
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myinfo2 = document.querySelector("#mydialog h3")
const myinfo = document.querySelector("#mydialog p")
const myinfo3 = document.querySelector("#mydialog h4")
const myclose = document.querySelector("#mydialog button")
myclose.addEventListener("click", () => mydialog.close())

//------------ LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img")
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        photo.alt = x.dedicated
        photo.alt = x.person
        photo.alt = x.number
        //add an event listener to each division on the page
        photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo)
    })// end loop
}  // end of function

//Start displaying all items in the JSON file
displayItems(temples)

// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = "Temple Name: " + x.name
    myinfo2.innerHTML = "Dedicated on: " + x.dedicated
    myinfo.innerHTML = "By: " + x.person
    myinfo3.innerHTML = "Temple Number: " + x.number
    mydialog.showModal()
}//End of function