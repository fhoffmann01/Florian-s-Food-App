const inputForm = document.getElementById("input-form");
const displayDataSection = document.querySelector(".display-data-section");
let idCounter = 0

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputFormData = new FormData(inputForm);
    const formObj = Object.fromEntries(inputFormData);

    const consumedAmount = parseFloat(formObj["amount"]);

    const template = document.getElementById("ingredient-card");
    idCounter += 1
    console.log(idCounter)
    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    
    const scaledDataset = scaleDataset(dbDataset, consumedAmount);
    
    renderCardList(scaledDataset, template, displayDataSection);
})

displayDataSection.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (card) {
        console.log(card.dataset.selected);
        card.dataset.selected = card.dataset.selected !== 'true';
    }
})

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
  
    console.log("ingredientObj.id", ingredientObj.id)
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
