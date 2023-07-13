export const execlude = (object: any, fieldsToRemove: any[]) => {
    const newObject = JSON.parse(JSON.stringify(object));
    fieldsToRemove.forEach((key) => {
        delete newObject[key]
    });

    return newObject;
}