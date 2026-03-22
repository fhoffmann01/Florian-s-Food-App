function queryDBForExistingEntry(nameOfIngredient){
    //Let's provide first fixed fake values. 
    //Calling information from indexeddb feature should come later...
    const ingredientObj = {
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
  
    return ingredientObj;
}