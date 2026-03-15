const inputForm = document.getElementById("input-form")

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputFormData = new FormData(inputForm)
    const formObj = Object.fromEntries(inputFormData)

    const consumedAmount = parseFloat(formObj["amount"]);

    const displayDataSection = document.querySelector(".display-data-section");
    const template = document.getElementById("ingredient-card");

    //const node = document.importNode(template.content, true);´

    //node.querySelector(".ingredient-name").textContent = "Ei"
    //node.querySelector(".ingredient-amount").textContent = "100 g" 
    //node.querySelector(".calories").textContent = "156 kcal" 
    //node.querySelector(".carbohydrates").textContent = "1.1 g" 
    //node.querySelector(".thereof-sugars").textContent = "1.1 g" 
    //node.querySelector(".fats").textContent = "11 g" 
    //node.querySelector(".thereof-fattyacids").textContent = "0 g" 
    //node.querySelector(".proteins").textContent = "13 g" 
    //node.querySelector(".fibre").textContent = "0 g" 
    //node.querySelector(".salt").textContent = "0.3 g" 

    //displayDataSection.appendChild(node);

    const dbDataset = queryDBForExistingEntry(formObj["name"]);
    const scaledDataset = scaleDataset(dbDataset, consumedAmount)

    //console.log(dbDataset["amount"])
    console.log(scaledDataset)
})

function queryDBForExistingEntry(nameOfIngredient){
    ingredientObj = {
        name: "Ei",
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
    
    dbDataset["amount"] = (factor * dbDataset["amount"])
    dbDataset["calories"] = (factor * dbDataset["calories"])
    dbDataset["carbohydrates"] = (factor * dbDataset["carbohydrates"])
    dbDataset["thereofSugars"] = (factor * dbDataset["thereofSugars"])
    dbDataset["fats"] = (factor * dbDataset["fats"])
    dbDataset["thereofSatFattyAcids"] = (factor * dbDataset["thereofSatFattyAcids"])
    dbDataset["proteins"] = (factor * dbDataset["proteins"])
    dbDataset["fibre"] = (factor * dbDataset["fibre"])
    dbDataset["salt"] = (factor * dbDataset["salt"])

    return dbDataset
}

/*
function updateCard(formObj){
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
    formObj["calories"] = 
}
*/

//Try to put code in inputForm into container
//Rethink on macro level what the app should do and if the ui looks ok.