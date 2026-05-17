export function hideButton(cardContainer, buttonToHide){
    if(cardContainer.querySelectorAll("details.highlighted").length === 0) {
        console.log("No cards selected.")
        buttonToHide.classList.add("hidden")
    } 
}