export function highlightSelectedCard(card, event){
    if (card) {
        if(event.target.tagName === 'DETAILS'){
            card.dataset.selected = card.dataset.selected !== 'true';
            
            //Highlight select radio button
            event.target.classList.toggle("highlighted")
            
            //Highlight card
            event.target.firstElementChild.firstElementChild.classList.toggle("highlighted")
        }
    }
}