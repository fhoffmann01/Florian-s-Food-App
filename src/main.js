import { createDataset } from "./createDataset.js"
import { scaleDataset } from "./scaleDataset.js"
import { removeSelectedEntries } from "./removeSelectedEntries.js"
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

    const formObj = createDataset(inputForm)
    const consumedAmount = parseFloat(formObj["amount"]);
    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    const scaledDataset = scaleDataset(dbDataset, consumedAmount);
    const template = document.getElementById("ingredient-card");

    renderCardList(scaledDataset, template, displayDataSection);
})

deleteButton.addEventListener('click', e => {
    const entriesToBeDeletedNodeList = document.querySelectorAll('[data-selected="true"]');
    
    removeSelectedEntries(entriesToBeDeletedNodeList)
    hideDeleteButton(displayDataSection, deleteButton);
})

displayDataSection.addEventListener('click', e => {
    const card = e.target.closest('.card');

    highlightSelectedCard(card, e)
    showButton(deleteButton)
})



function hideFormSubmitButton(otherButtons){
    
}


