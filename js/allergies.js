function checkAllergies(score) {
    const allergens = [
      "ägg",
      "jordnötter",
      "skaldjur",
      "jordgubbar",
      "tomater",
      "choklad",
      "pollen",
      "katter",
    ];
  
    const allergicTo = [];
    
    for (let i = 0; i < allergens.length; i++) {
      const allergyScore = 1 << i; // Bitvist skifta för att få rätt poäng
      if (score & allergyScore) {
        allergicTo.push(allergens[i]);
      }
    }
  
    return allergicTo;
  }
  
  function isAllergicTo(score, allergen) {
    const allergies = checkAllergies(score);
    return allergies.includes(allergen);
  }
  
  // Exempel på användning:
  const tomScore = 34;
  const tomAllergies = checkAllergies(tomScore);
  console.log("Tom är allergisk mot: " + tomAllergies.join(", "));
  
  const isTomAllergicToChoklad = isAllergicTo(tomScore, "choklad");
  console.log(`Tom är allergisk mot choklad: ${isTomAllergicToChoklad}`);
  