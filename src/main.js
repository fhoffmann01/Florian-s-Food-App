const inputForm = document.getElementById("input-form");
const displayDataSection = document.querySelector(".display-data-section");
const deleteButton = document.querySelector(".delete-button")
const formSubmitButton = document.querySelector(".form-submit-button")

let idCounter = 0

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(e)

    const inputFormData = new FormData(inputForm);
    const formObj = Object.fromEntries(inputFormData);

    const consumedAmount = parseFloat(formObj["amount"]);

    const template = document.getElementById("ingredient-card");
    idCounter += 1
    //console.log(idCounter)
    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    
    const scaledDataset = scaleDataset(dbDataset, consumedAmount);
    

    renderCardList(scaledDataset, template, displayDataSection);
})

//Delete Selection
deleteButton.addEventListener('click', e => {
    const entriesToBeDeletedNodeList = document.querySelectorAll('[data-selected="true"]');
    
    if(entriesToBeDeletedNodeList){
        for(let entry of entriesToBeDeletedNodeList){
            entry.parentElement.removeChild(entry)
        }
    } else {
        console.log("No entries selected.")
    }

    hideDeleteButton(displayDataSection)
    
})



displayDataSection.addEventListener('click', e => {
    const card = e.target.closest('.card');

    if (card) {
        if(e.target.tagName === 'DETAILS'){
            card.dataset.selected = card.dataset.selected !== 'true';
            
            //Highlight select radio button
            e.target.classList.toggle("highlighted")
            
            //Highlight card
            e.target.firstElementChild.firstElementChild.classList.toggle("highlighted")   
            
            showButton(deleteButton)
        }
    }
})

function showButton(button){
    button.classList.remove("hidden")
}

function hideDeleteButton(cardContainer){
    if(cardContainer.querySelectorAll("details.highlighted").length === 0) {
        console.log("No cards selected.")
        deleteButton.classList.add("hidden")
    } 
}

function hideFormSubmitButton(otherButtons){
    
}


function queryDBForExistingEntry(nameOfIngredient){
    //Let's provide first fixed fake values. 
    //Calling information from indexeddb feature should come later...
    ingredientObj = {
        id: idCounter,
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

function scaleDataset(dbDataset, consumedAmount){
    const factor = consumedAmount / dbDataset["amount"]
    
    dbDataset["amount"] = (factor * dbDataset["amount"]);
    dbDataset["calories"] = (factor * dbDataset["calories"]);
    dbDataset["carbohydrates"] = (factor * dbDataset["carbohydrates"]);
    dbDataset["thereofSugars"] = (factor * dbDataset["thereofSugars"]);
    dbDataset["fats"] = (factor * dbDataset["fats"]);
    dbDataset["thereofSatFattyAcids"] = (factor * dbDataset["thereofSatFattyAcids"]);
    dbDataset["proteins"] = (factor * dbDataset["proteins"]);
    dbDataset["fibre"] = (factor * dbDataset["fibre"]);
    dbDataset["salt"] = (factor * dbDataset["salt"]);

    return dbDataset;
}

function renderCardList(cardData, template, templateContainer){
    const node = document.importNode(template.content, true);

    node.querySelector(".ingredient-name").textContent = cardData["name"]
    node.querySelector(".ingredient-amount").textContent = `${cardData["amount"].toFixed(0)} g`
    node.querySelector(".calories").textContent = `${cardData["calories"].toFixed(0)} kcal`
    node.querySelector(".carbohydrates").textContent = `${cardData["carbohydrates"].toFixed(0)} g` 
    node.querySelector(".thereof-sugars").textContent = `${cardData["thereofSugars"].toFixed(0)} g`
    node.querySelector(".fats").textContent = `${cardData["fats"].toFixed(0)} g`
    node.querySelector(".thereof-fattyacids").textContent = `${cardData["thereofSatFattyAcids"].toFixed(0)} g`
    node.querySelector(".proteins").textContent = `${cardData["proteins"].toFixed(0)} g`
    node.querySelector(".fibre").textContent = `${cardData["fibre"].toFixed(0)} g`
    node.querySelector(".salt").textContent = `${cardData["salt"].toFixed(0)} g`

    templateContainer.appendChild(node);
    
}
