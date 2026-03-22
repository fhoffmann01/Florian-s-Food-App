export function hideDeleteButton(cardContainer, deleteButton){
    if(cardContainer.querySelectorAll("details.highlighted").length === 0) {
        console.log("No cards selected.")
        deleteButton.classList.add("hidden")
    } 
}