export function makeTX(database, storeName, mode){
    let tx = database.transaction('foodStore', 'readwrite');

    tx.onerror = err => {
        console.log(err)
    }

    return tx;
}