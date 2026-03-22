import { createDataset } from "./createDataset.js"
import { scaleDataset } from "./scaleDataset.js"
import  { removeSelectedEntries } from "./removeSelectedEntries.js"
import { highlightSelectedCard } from "./highlightSelectedCard.js"
import { renderCardList } from "./renderCardList.js"
import { queryDBForExistingEntry } from "./queryDBForExistingEntry.js"
import { showButton } from "./showButton.js"
import { hideDeleteButton } from "./hideDeleteButton.js"


const inputForm = document.getElementById("input-form");
const displayDataSection = document.querySelector(".display-data-section");
const deleteButton = document.querySelector(".delete-button")
const formSubmitButton = document.querySelector(".form-submit-button")


inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(e)

    const formObj = createDataset(inputForm)

    const consumedAmount = parseFloat(formObj["amount"]);

    
    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    
    const scaledDataset = scaleDataset(dbDataset, consumedAmount);
    
    const template = document.getElementById("ingredient-card");

    renderCardList(scaledDataset, template, displayDataSection);
})

//Delete Selection
deleteButton.addEventListener('click', e => {
    const entriesToBeDeletedNodeList = document.querySelectorAll('[data-selected="true"]');
    
    removeSelectedEntries(entriesToBeDeletedNodeList)
    hideDeleteButton(displayDataSection);

})

displayDataSection.addEventListener('click', e => {
    const card = e.target.closest('.card');

    highlightSelectedCard(card, e)
    showButton(deleteButton)
})

function hideDeleteButton(cardContainer, deleteButton){
    if(cardContainer.querySelectorAll("details.highlighted").length === 0) {
        console.log("No cards selected.")
        deleteButton.classList.add("hidden")
    } 
}

function queryDBForExistingEntry(nameOfIngredient){
    //Let's provide first fixed fake values. 
    //Calling information from indexeddb feature should come later...
    const ingredientObj = {
        name: nameOfIngredient,
        amount: 100,
        calories: 156,
        carbohydrates: 1.1,
        thereofSugars: 1.1,
        fats: 11, 
        thereofSatFattyAcids: 0,
        proteins: 13,
        fibre: 0,
        salt: 0.3,
    }
  
    return ingredientObj;
}


function hideFormSubmitButton(otherButtons){
    
}


