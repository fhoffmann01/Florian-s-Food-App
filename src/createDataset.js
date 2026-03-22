export function createDataset(formData){
    const inputFormData = new FormData(formData);
    return Object.fromEntries(inputFormData);
}