import { createDataset } from "./createDataset.js"
import { scaleDataset } from "./scaleDataset.js"
import { removeSelectedEntries } from "./removeSelectedEntries.js"
import { highlightSelectedCard } from "./highlightSelectedCard.js"
import { renderCardList } from "./renderCardList.js"
import { queryDBForExistingEntry } from "./queryDBForExistingEntry.js"
import { showButton } from "./showButton.js"
import { hideButton } from "./hideButton.js"
import { hideFormSubmitButton } from "./hideFormSubmitButton.js"


const inputForm = document.getElementById("input-form");
const displayDataSection = document.querySelector(".display-data-section");
const cancelButton = document.querySelector(".cancel-button")
const deleteButton = document.querySelector(".delete-button")
const formSubmitButton = document.querySelector(".form-submit-button")
const registerButton = document.querySelector(".register-button")
const registerIngredientDialog = document.getElementById("ingredient-input-wrapper") 


console.log("registerButton: ", registerButton)
console.log("registerIngredientDialog: ", registerIngredientDialog)

inputForm.addEventListener('submit', e => {
    e.preventDefault();

    const formObj = createDataset(inputForm)
    const consumedAmount = parseFloat(formObj["amount"]);
    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    const scaledDataset = scaleDataset(dbDataset, consumedAmount);
    const template = document.getElementById("ingredient-card");

    renderCardList(scaledDataset, template, displayDataSection);
})

cancelButton.addEventListener('click', e => {
    const entriesToBeDeSelectedNodeList = document.querySelectorAll('[data-selected="true"]');
    
    removeSelectedEntries(entriesToBeDeSelectedNodeList)
    hideButton(displayDataSection, cancelButton);    
    hideButton(displayDataSection, deleteButton);    

    showButton(formSubmitButton)
})

deleteButton.addEventListener('click', e => {
    const entriesToBeDeletedNodeList = document.querySelectorAll('[data-selected="true"]');
    
    removeSelectedEntries(entriesToBeDeletedNodeList)
    hideButton(displayDataSection, cancelButton);    
    hideButton(displayDataSection, deleteButton);    

    showButton(formSubmitButton)
})

displayDataSection.addEventListener('click', e => {
    const card = e.target.closest('.card');

    highlightSelectedCard(card, e)
    const selectedEntriesArr = document.querySelectorAll("[data-selected='true']")
    
    if(selectedEntriesArr.length > 0){
        showButton(cancelButton)
        showButton(deleteButton)

        hideFormSubmitButton(formSubmitButton)
    }   
})

const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open("FoodDB");
    
})

registerButton.addEventListener('click', () => {
    registerIngredientDialog.show();
})

const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open("FoodDB");
    
    DBOpenReq.addEventListener('error', err => {
        console.log(err);
    })

    DBOpenReq.addEventListener('success', e => {
        db = e.target.result;
        console.log('success', db)
    })

    DBOpenReq.addEventListener('upgradeneeded', e => {
        db = e.target.result;
        console.log('upgrade', db)

        objectStore = db.createObjectStore('foodStore', {
            keyPath: 'id'
        });
    })

    let ingredient = {
        dateOfPurchase,
        store,
        nameOfFood,
        brand, 
        eanCode,
        totalWeight,
        weightPerPiece,
        pricePerPackagingUnit,
        energyKcal, 
        fats,
        thereofFattyAcids,
        carbs,
        thereofSugars,
        fibre,
        protein,
        salt,
        sourceOfNutritionValueInformation
    }

    
})()

//Make dialog field with upload features: import CSV
