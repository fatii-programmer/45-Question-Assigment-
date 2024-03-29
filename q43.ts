
// QUESTION NO43
// Define the showMagicians function
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  // magician names
  const magicianNames: string[] = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
  

  const greatMagicians: string[] = makeGreat([...magicianNames]); 
  
  
  console.log("Original Magicians:");
  showMagicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians);
  