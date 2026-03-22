export function renderCardList(cardData, template, templateContainer){
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