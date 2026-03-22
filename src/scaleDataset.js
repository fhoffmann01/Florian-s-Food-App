export function scaleDataset(dbDataset, consumedAmount){
    const factor = consumedAmount / dbDataset["amount"]
    
    dbDataset["amount"] = (factor * dbDataset["amount"]);
    dbDataset["calories"] = (factor * dbDataset["calories"]);
    dbDataset["carbohydrates"] = (factor * dbDataset["carbohydrates"]);
    dbDataset["thereofSugars"] = (factor * dbDataset["thereofSugars"]);
    dbDataset["fats"] = (factor * dbDataset["fats"]);
    dbDataset["thereofSatFattyAcids"] = (factor * dbDataset["thereofSatFattyAcids"]);
    dbDataset["proteins"] = (factor * dbDataset["proteins"]);
    dbDataset["fibre"] = (factor * dbDataset["fibre"]);
    dbDataset["salt"] = (factor * dbDataset["salt"]);

    return dbDataset;
}

