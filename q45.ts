interface Car {
    manufacturer: string;
    modelName: string;
    options: Record<string, any>; // Object to store optional properties
  }
  
  function createCar(manufacturer: string, modelName: string, options: Record<string, any>): Car {
    const car: Car = {
      manufacturer,
      modelName,
      options,
    };
  
    return car;
  }
  
  // Example usage
  const myCar = createCar('Toyota', 'Camry', { color: 'blue', optionalFeature: 'sunroof' });
  
  // Print the Object
  console.log(myCar);
  