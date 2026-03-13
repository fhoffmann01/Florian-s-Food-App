const inputForm = document.getElementById("input-form")

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputFormData = new FormData(inputForm)
    const formObj = Object.fromEntries(inputFormData)

    console.log(formObj["name"]);
    console.log(formObj["amount"]);

    const displayDataSection = document.querySelector(".display-data-section");
    const template = document.getElementById("ingredient-card");

    const node = document.importNode(template.content, true);

    node.querySelector(".ingredient-name").textContent = "Ei"
    node.querySelector(".ingredient-amount").textContent = "100 g" 
    node.querySelector(".calories").textContent = "156 kcal" 
    node.querySelector(".carbohydrates").textContent = "1.1 g" 
    node.querySelector(".thereof-sugars").textContent = "1.1 g" 
    node.querySelector(".fats").textContent = "11 g" 
    node.querySelector(".thereof-fattyacids").textContent = "0 g" 
    node.querySelector(".proteins").textContent = "13 g" 
    node.querySelector(".fibre").textContent = "0 g" 
    node.querySelector(".salt").textContent = "0.3 g" 
   
    
    displayDataSection.appendChild(node);
})

