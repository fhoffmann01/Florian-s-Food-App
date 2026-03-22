export function highlightSelectedCard(card){
    if (card) {
        if(e.target.tagName === 'DETAILS'){
            card.dataset.selected = card.dataset.selected !== 'true';
            
            //Highlight select radio button
            e.target.classList.toggle("highlighted")
            
            //Highlight card
            e.target.firstElementChild.firstElementChild.classList.toggle("highlighted")
        }
        showButton(deleteButton)
    }
}
