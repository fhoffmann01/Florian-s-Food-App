export function removeSelectedEntries(entriesToBeDeletedNodeList){
    if(entriesToBeDeletedNodeList){
        for(let entry of entriesToBeDeletedNodeList){
            entry.parentElement.removeChild(entry)
        }
    }
}  