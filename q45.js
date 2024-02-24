function createCar(manufacturer, modelName, options) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: options,
    };
    return car;
}
// Example usage
var myCar = createCar('Toyota', 'Camry', { color: 'blue', optionalFeature: 'sunroof' });
// Print the Object
console.log(myCar);
